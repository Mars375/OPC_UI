import * as React from "react";
import { Button } from "../Button/Button";

/* -------------------------------------------------------------------------------------------------
 * Popover
 * -----------------------------------------------------------------------------------------------*/

interface PopoverContextValue {
	triggerRef: React.MutableRefObject<HTMLButtonElement | null>;
	contentId: string;
	open: boolean;
	onOpenChange: (open: boolean) => void;
	onOpenToggle: () => void;
	modal: boolean;
}

const PopoverContext = React.createContext<PopoverContextValue | null>(null);
const PopoverProvider: React.FC<{
	value: PopoverContextValue;
	children: React.ReactNode;
}> = ({ children, value }) => {
	return (
		<PopoverContext.Provider value={value}>{children}</PopoverContext.Provider>
	);
};

const usePopoverContext = (): PopoverContextValue => {
	const context = React.useContext(PopoverContext);
	if (!context) {
		throw new Error("usePopoverContext must be used within a PopoverProvider");
	}
	return context;
};

interface PopoverProps {
	children?: React.ReactNode;
	open?: boolean;
	defaultOpen?: boolean;
	onOpenChange?: (open: boolean) => void;
	modal?: boolean;
}

const Popover: React.FC<PopoverProps> = ({
	children,
	open,
	defaultOpen,
	onOpenChange,
	modal = false,
}) => {
	const [isOpen, setIsOpen] = React.useState(defaultOpen || false);
	const triggerRef = React.useRef<HTMLButtonElement | null>(null);
	const contentId = React.useId();

	React.useEffect(() => {
		if (open !== undefined) {
			setIsOpen(open);
		}
	}, [open]);

	const handleOpenChange = (isOpen: boolean) => {
		setIsOpen(isOpen);
		if (onOpenChange) onOpenChange(isOpen);
	};

	const value: PopoverContextValue = {
		triggerRef,
		contentId,
		open: isOpen,
		onOpenChange: handleOpenChange,
		onOpenToggle: () => handleOpenChange(!isOpen),
		modal,
	};

	return <PopoverProvider value={value}>{children}</PopoverProvider>;
};

/* -------------------------------------------------------------------------------------------------
 * PopoverTrigger
 * -----------------------------------------------------------------------------------------------*/

interface PopoverTriggerProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
	({ children, ...props }, forwardedRef) => {
		const { triggerRef, open, onOpenToggle, contentId } = usePopoverContext();
		const ref = React.useRef<HTMLButtonElement | null>(null);

		React.useImperativeHandle(
			forwardedRef,
			() => ref.current as HTMLButtonElement
		);

		const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
			if (event.key === " " || event.key === "Enter") {
				event.preventDefault();
				onOpenToggle();
			} else if (event.key === "Escape") {
				event.preventDefault();
				onOpenChange(false);
			} else if (event.key === "Tab") {
				// Handle tab navigation
			} else if (event.shiftKey && event.key === "Tab") {
				// Handle shift + tab navigation
			}
		};

		return (
			<Button
				type='button'
				aria-haspopup='dialog'
				aria-expanded={open}
				aria-controls={contentId}
				ref={(node) => {
					ref.current = node;
					triggerRef.current = node;
				}}
				onClick={onOpenToggle}
				onKeyDown={handleKeyDown}
				{...props}
			>
				{children}
			</Button>
		);
	}
);

/* -------------------------------------------------------------------------------------------------
 * PopoverContent
 * -----------------------------------------------------------------------------------------------*/

interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {
	asChild?: boolean;
	onOpenAutoFocus?: () => void;
	onCloseAutoFocus?: () => void;
	onEscapeKeyDown?: (event: KeyboardEvent) => void;
	onPointerDownOutside?: (event: PointerEvent) => void;
	onFocusOutside?: (event: FocusEvent) => void;
	onInteractOutside?: (event: Event) => void;
	forceMount?: boolean;
	side?: "top" | "right" | "bottom" | "left";
	sideOffset?: number;
	align?: "start" | "center" | "end";
	alignOffset?: number;
	avoidCollisions?: boolean;
	collisionBoundary?: HTMLElement | null;
	collisionPadding?: number;
	arrowPadding?: number;
	sticky?: "partial" | "always";
	hideWhenDetached?: boolean;
}

const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
	(
		{
			children,
			asChild = false,
			onOpenAutoFocus,
			onCloseAutoFocus,
			onEscapeKeyDown,
			onPointerDownOutside,
			onFocusOutside,
			onInteractOutside,
			forceMount,
			side = "bottom",
			sideOffset = 0,
			align = "center",
			alignOffset = 0,
			avoidCollisions = true,
			collisionBoundary,
			collisionPadding = 0,
			arrowPadding = 0,
			sticky = "partial",
			hideWhenDetached = false,
			...props
		},
		forwardedRef
	) => {
		const { open, contentId, onOpenChange, modal, triggerRef } =
			usePopoverContext();
		const ref = React.useRef<HTMLDivElement | null>(null);

		React.useImperativeHandle(
			forwardedRef,
			() => ref.current as HTMLDivElement
		);

		React.useEffect(() => {
			if (open && modal) {
				const handleKeyDown = (event: KeyboardEvent) => {
					if (event.key === "Escape") {
						onOpenChange(false);
						if (triggerRef.current) {
							triggerRef.current.focus();
						}
					}
				};
				document.addEventListener("keydown", handleKeyDown);
				return () => {
					document.removeEventListener("keydown", handleKeyDown);
				};
			}
		}, [open, modal, onOpenChange, triggerRef]);

		React.useEffect(() => {
			if (open && onOpenAutoFocus) {
				onOpenAutoFocus();
			}
			if (!open && onCloseAutoFocus) {
				onCloseAutoFocus();
			}
		}, [open, onOpenAutoFocus, onCloseAutoFocus]);

		React.useEffect(() => {
			const handlePointerDownOutside = (event: PointerEvent) => {
				if (onPointerDownOutside) {
					onPointerDownOutside(event);
				}
			};

			const handleFocusOutside = (event: FocusEvent) => {
				if (onFocusOutside) {
					onFocusOutside(event);
				}
			};

			const handleInteractOutside = (event: Event) => {
				if (onInteractOutside) {
					onInteractOutside(event);
				}
			};

			document.addEventListener("pointerdown", handlePointerDownOutside);
			document.addEventListener("focusin", handleFocusOutside);
			document.addEventListener("click", handleInteractOutside);

			return () => {
				document.removeEventListener("pointerdown", handlePointerDownOutside);
				document.removeEventListener("focusin", handleFocusOutside);
				document.removeEventListener("click", handleInteractOutside);
			};
		}, [onPointerDownOutside, onFocusOutside, onInteractOutside]);

		if (!open && !forceMount) return null;

		const contentStyle = {
			position: "absolute",
			...(side === "top" && { bottom: `calc(100% + ${sideOffset}px)` }),
			...(side === "bottom" && { top: `calc(100% + ${sideOffset}px)` }),
			...(side === "left" && { right: `calc(100% + ${sideOffset}px)` }),
			...(side === "right" && { left: `calc(100% + ${sideOffset}px)` }),
			...(align === "start" && { alignSelf: "flex-start" }),
			...(align === "center" && { alignSelf: "center" }),
			...(align === "end" && { alignSelf: "flex-end" }),
			...(collisionBoundary && { boundary: collisionBoundary }),
			...(collisionPadding && { padding: collisionPadding }),
			...(arrowPadding && { arrowPadding }),
			...(sticky && { sticky }),
			...(hideWhenDetached && { display: open ? "block" : "none" }),
		};

		return (
			<div
				id={contentId}
				role='dialog'
				ref={ref}
				data-state={open ? "open" : "closed"}
				data-side={side}
				data-align={align}
				onKeyDown={onEscapeKeyDown}
				style={contentStyle}
				{...props}
			>
				{children}
			</div>
		);
	}
);

/* -------------------------------------------------------------------------------------------------
 * PopoverClose
 * -----------------------------------------------------------------------------------------------*/

interface PopoverCloseProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const PopoverClose = React.forwardRef<HTMLButtonElement, PopoverCloseProps>(
	({ children, ...props }, forwardedRef) => {
		const { onOpenChange } = usePopoverContext();
		const ref = React.useRef<HTMLButtonElement | null>(null);

		React.useImperativeHandle(
			forwardedRef,
			() => ref.current as HTMLButtonElement
		);

		return (
			<Button
				type='button'
				ref={ref}
				onClick={() => onOpenChange(false)}
				{...props}
			>
				{children}
			</Button>
		);
	}
);

/* -------------------------------------------------------------------------------------------------
 * PopoverArrow
 * -----------------------------------------------------------------------------------------------*/

interface PopoverArrowProps extends React.HTMLAttributes<HTMLDivElement> {}

const PopoverArrow = React.forwardRef<HTMLDivElement, PopoverArrowProps>(
	(props, forwardedRef) => {
		return <div ref={forwardedRef} {...props} />;
	}
);

/* -----------------------------------------------------------------------------------------------*/

const Root = Popover;
const Trigger = PopoverTrigger;
const Content = PopoverContent;
const Close = PopoverClose;
const Arrow = PopoverArrow;

export { Root, Trigger, Content, Close, Arrow };
