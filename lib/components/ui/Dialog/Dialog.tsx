"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/utils/utils";

/**
 * CloseIcon component.
 * Renders an SVG icon for the close button.
 * @returns {JSX.Element} - JSX element for the close icon.
 */
const CloseIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='16'
		height='16'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<line x1='18' y1='6' x2='6' y2='18'></line>
		<line x1='6' y1='6' x2='18' y2='18'></line>
	</svg>
);

/**
 * Dialog component.
 * Root component for the dialog.
 */
const Dialog = DialogPrimitive.Root;

/**
 * DialogTrigger component.
 * Component to trigger the opening of the dialog.
 */
const DialogTrigger = DialogPrimitive.Trigger;

/**
 * DialogPortal component.
 * Portal component for rendering the dialog outside the DOM hierarchy.
 */
const DialogPortal = DialogPrimitive.Portal;

/**
 * DialogClose component.
 * Component to close the dialog.
 */
const DialogClose = DialogPrimitive.Close;

/**
 * DialogOverlay component.
 * Renders the overlay behind the dialog.
 * @param {Object} props - Properties for the DialogOverlay component.
 * @returns {JSX.Element} - JSX element for the dialog overlay.
 */
const DialogOverlay = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={cn(
			"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
			className
		)}
		{...props}
	/>
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

/**
 * DialogContent component.
 * Renders the content of the dialog.
 * @param {Object} props - Properties for the DialogContent component.
 * @returns {JSX.Element} - JSX element for the dialog content.
 */
const DialogContent = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<DialogPrimitive.Content
			ref={ref}
			className={cn(
				"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
				className
			)}
			{...props}
		>
			{children}
			<DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
				<div className='h-4 w-4'>
					<CloseIcon />
				</div>
				<span className='sr-only'>Close</span>
			</DialogPrimitive.Close>
		</DialogPrimitive.Content>
	</DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

/**
 * DialogHeader component.
 * Renders the header of the dialog.
 * @param {Object} props - Properties for the DialogHeader component.
 * @returns {JSX.Element} - JSX element for the dialog header.
 */
const DialogHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"flex flex-col space-y-1.5 text-center sm:text-left",
			className
		)}
		{...props}
	/>
);
DialogHeader.displayName = "DialogHeader";

/**
 * DialogFooter component.
 * Renders the footer of the dialog.
 * @param {Object} props - Properties for the DialogFooter component.
 * @returns {JSX.Element} - JSX element for the dialog footer.
 */
const DialogFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
			className
		)}
		{...props}
	/>
);
DialogFooter.displayName = "DialogFooter";

/**
 * DialogTitle component.
 * Renders the title of the dialog.
 * @param {Object} props - Properties for the DialogTitle component.
 * @returns {JSX.Element} - JSX element for the dialog title.
 */
const DialogTitle = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={cn(
			"text-lg font-semibold leading-none tracking-tight",
			className
		)}
		{...props}
	/>
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

/**
 * DialogDescription component.
 * Renders the description of the dialog.
 * @param {Object} props - Properties for the DialogDescription component.
 * @returns {JSX.Element} - JSX element for the dialog description.
 */
const DialogDescription = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={cn("text-sm text-muted-foreground", className)}
		{...props}
	/>
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
	Dialog,
	DialogPortal,
	DialogOverlay,
	DialogClose,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
};
