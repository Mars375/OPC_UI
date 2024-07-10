import * as React from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@/main";
import { cn } from "@/utils/utils";

interface ModalProps {
	open: boolean;
	onClose: (
		event: React.MouseEvent | React.KeyboardEvent,
		reason: string
	) => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
	const modalRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
			if (modalRef.current) {
				modalRef.current.focus();
			}
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [open]);

	const handleBackdropClick = (event: React.MouseEvent) => {
		onClose(event, "backdropClick");
	};

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === "Escape") {
			onClose(event, "escapeKeyDown");
		}
	};

	if (!open) return null;

	return createPortal(
		<div
			className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
			onKeyDown={handleKeyDown}
			aria-modal='true'
			role='dialog'
		>
			<div className='fixed inset-0' onClick={handleBackdropClick} />
			<div
				ref={modalRef}
				className='bg-white rounded-lg shadow-lg w-96 p-6 relative transform transition-transform duration-300 scale-100'
				tabIndex={-1}
			>
				<button
					className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
					onClick={(event) => onClose(event, "closeButtonClick")}
				>
					<CloseIcon />
					<span className='sr-only'>Close</span>
				</button>
				{children}
			</div>
		</div>,
		document.body
	);
};

const ModalHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	className,
	...props
}) => (
	<div
		className={cn(
			"flex flex-col space-y-1.5 text-center sm:text-left",
			className
		)}
		{...props}
	/>
);
ModalHeader.displayName = "ModalHeader";

const ModalFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	className,
	...props
}) => (
	<div
		className={cn(
			"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
			className
		)}
		{...props}
	/>
);
ModalFooter.displayName = "ModalFooter";

const ModalTitle = React.forwardRef<
	React.ElementRef<"h2">,
	React.ComponentPropsWithoutRef<"h2">
>(({ className, ...props }, ref) => (
	<h2
		ref={ref}
		className={cn(
			"text-lg font-semibold leading-none tracking-tight",
			className
		)}
		{...props}
	/>
));
ModalTitle.displayName = "ModalTitle";

const ModalDescription = React.forwardRef<
	React.ElementRef<"p">,
	React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={cn("text-sm text-muted-foreground", className)}
		{...props}
	/>
));
ModalDescription.displayName = "ModalDescription";

export { Modal, ModalHeader, ModalFooter, ModalTitle, ModalDescription };
