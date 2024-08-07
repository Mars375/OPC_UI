"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { CloseIcon } from "@/main";
import { cn } from "@/utils/utils";

/**
 * ToastProvider component.
 * Provides context for the Toast components.
 */
const ToastProvider = ToastPrimitives.Provider;

/**
 * ToastViewport component.
 * Renders the viewport for the toasts.
 * @param {Object} props - Properties for the ToastViewport component.
 * @param {React.Ref<HTMLDivElement>} ref - Reference to the viewport element.
 * @returns {JSX.Element} - JSX element for the toast viewport.
 */
const ToastViewport = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Viewport>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Viewport
		ref={ref}
		className={cn(
			"fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
			className
		)}
		{...props}
	/>
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

/**
 * Variants for the Toast component.
 * Defines the base styles and states for the toast.
 */
const toastVariants = cva(
	"group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
	{
		variants: {
			variant: {
				default: "border bg-background text-foreground",
				destructive:
					"destructive group border-destructive bg-destructive text-destructive-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

/**
 * Toast component.
 * Renders a styled toast with various props.
 * @param {Object} props - Properties for the Toast component.
 * @param {React.Ref<HTMLDivElement>} ref - Reference to the toast element.
 * @returns {JSX.Element} - JSX element for the toast.
 */
const Toast = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
		VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
	return (
		<ToastPrimitives.Root
			ref={ref}
			className={cn(toastVariants({ variant }), className)}
			{...props}
		/>
	);
});
Toast.displayName = ToastPrimitives.Root.displayName;

/**
 * ToastAction component.
 * Renders an action button inside the toast.
 * @param {Object} props - Properties for the ToastAction component.
 * @param {React.Ref<HTMLButtonElement>} ref - Reference to the action element.
 * @returns {JSX.Element} - JSX element for the toast action.
 */
const ToastAction = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Action>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Action
		ref={ref}
		className={cn(
			"inline-flex h-8 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium",
			className
		)}
		{...props}
	/>
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

/**
 * ToastClose component.
 * Renders a close button inside the toast.
 * @param {Object} props - Properties for the ToastClose component.
 * @param {React.Ref<HTMLButtonElement>} ref - Reference to the close element.
 * @returns {JSX.Element} - JSX element for the toast close button.
 */
const ToastClose = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Close>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Close
		ref={ref}
		className={cn(
			"absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
			className
		)}
		{...props}
	>
		<div className='h-4 w-4'>
			<CloseIcon />
		</div>
	</ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

/**
 * ToastTitle component.
 * Renders the title of the toast.
 * @param {Object} props - Properties for the ToastTitle component.
 * @param {React.Ref<HTMLDivElement>} ref - Reference to the title element.
 * @returns {JSX.Element} - JSX element for the toast title.
 */
const ToastTitle = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Title>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Title
		ref={ref}
		className={cn("text-sm font-semibold", className)}
		{...props}
	/>
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

/**
 * ToastDescription component.
 * Renders the description of the toast.
 * @param {Object} props - Properties for the ToastDescription component.
 * @param {React.Ref<HTMLDivElement>} ref - Reference to the description element.
 * @returns {JSX.Element} - JSX element for the toast description.
 */
const ToastDescription = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Description>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Description
		ref={ref}
		className={cn("text-sm opacity-90", className)}
		{...props}
	/>
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

export {
	ToastProvider,
	ToastViewport,
	Toast,
	ToastTitle,
	ToastDescription,
	ToastClose,
	ToastAction,
};
