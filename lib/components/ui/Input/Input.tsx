import * as React from "react";

import { cn } from "@/utils/utils";

/**
 * Props for the Input component.
 * Extends the standard HTML input attributes.
 */
export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Input component.
 * Renders a styled input field with various props.
 * @param {InputProps} props - Properties for the Input component.
 * @param {React.Ref<HTMLInputElement>} ref - Reference to the input element.
 * @returns {JSX.Element} - JSX element for the input field.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input";

export { Input };
