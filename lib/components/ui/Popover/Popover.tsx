"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/utils/utils";

/**
 * Popover component.
 * Root component for the popover.
 */
const Popover = PopoverPrimitive.Root;

/**
 * PopoverTrigger component.
 * Component to trigger the opening of the popover.
 */
const PopoverTrigger = PopoverPrimitive.Trigger;

/**
 * PopoverContent component.
 * Renders the content of the popover.
 * @param {Object} props - Properties for the PopoverContent component.
 * @param {React.Ref<HTMLDivElement>} ref - Reference to the content element.
 * @returns {JSX.Element} - JSX element for the popover content.
 */
const PopoverContent = React.forwardRef<
	React.ElementRef<typeof PopoverPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
	<PopoverPrimitive.Portal>
		<PopoverPrimitive.Content
			ref={ref}
			align={align}
			sideOffset={sideOffset}
			className={cn(
				"z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out data-[state=closed]:zoom-out data-[state=open]:zoom-in data-[side=bottom]:slide-in-from-top data-[side=left]:slide-in-from-right data-[side=right]:slide-in-from-left data-[side=top]:slide-in-from-bottom",
				className
			)}
			{...props}
		/>
	</PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
