"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "@/main";

import { cn } from "@/utils/utils";

/**
 * Root component for the dropdown menu.
 */
const DropdownMenu = DropdownMenuPrimitive.Root;

/**
 * Component to trigger the opening of the dropdown menu.
 */
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

/**
 * Group component for grouping dropdown menu items.
 */
const DropdownMenuGroup = DropdownMenuPrimitive.Group;

/**
 * Portal component for rendering the dropdown menu outside the DOM hierarchy.
 */
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

/**
 * Submenu component for the dropdown menu.
 */
const DropdownMenuSub = DropdownMenuPrimitive.Sub;

/**
 * Radio group component for the dropdown menu.
 */
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

/**
 * SubTrigger component for the dropdown menu.
 * @param {Object} props - Properties for the DropdownMenuSubTrigger component.
 * @returns {JSX.Element} - JSX element for the submenu trigger.
 */
const DropdownMenuSubTrigger = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
		inset?: boolean;
	}
>(({ className, inset, children, ...props }, ref) => (
	<DropdownMenuPrimitive.SubTrigger
		ref={ref}
		className={cn(
			"flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
			inset && "pl-8",
			className
		)}
		{...props}
	>
		{children}
		<ChevronRightIcon className='ml-auto h-4 w-4' />
	</DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
	DropdownMenuPrimitive.SubTrigger.displayName;

/**
 * SubContent component for the dropdown menu.
 * @param {Object} props - Properties for the DropdownMenuSubContent component.
 * @returns {JSX.Element} - JSX element for the submenu content.
 */
const DropdownMenuSubContent = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
	<DropdownMenuPrimitive.SubContent
		ref={ref}
		className={cn(
			"z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
			className
		)}
		{...props}
	/>
));
DropdownMenuSubContent.displayName =
	DropdownMenuPrimitive.SubContent.displayName;

/**
 * Content component for the dropdown menu.
 * @param {Object} props - Properties for the DropdownMenuContent component.
 * @returns {JSX.Element} - JSX element for the dropdown menu content.
 */
const DropdownMenuContent = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
	<DropdownMenuPrimitive.Portal>
		<DropdownMenuPrimitive.Content
			ref={ref}
			sideOffset={sideOffset}
			className={cn(
				"z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
				className
			)}
			{...props}
		/>
	</DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

/**
 * Item component for the dropdown menu.
 * @param {Object} props - Properties for the DropdownMenuItem component.
 * @returns {JSX.Element} - JSX element for the dropdown menu item.
 */
const DropdownMenuItem = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
		inset?: boolean;
	}
>(({ className, inset, ...props }, ref) => (
	<DropdownMenuPrimitive.Item
		ref={ref}
		className={cn(
			"relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
			inset && "pl-8",
			className
		)}
		{...props}
	/>
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

/**
 * CheckboxItem component for the dropdown menu.
 * @param {Object} props - Properties for the DropdownMenuCheckboxItem component.
 * @returns {JSX.Element} - JSX element for the checkbox item.
 */
const DropdownMenuCheckboxItem = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
	<DropdownMenuPrimitive.CheckboxItem
		ref={ref}
		className={cn(
			"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
			className
		)}
		checked={checked}
		{...props}
	>
		<span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
			<DropdownMenuPrimitive.ItemIndicator>
				<CheckIcon className='h-4 w-4' />
			</DropdownMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
	DropdownMenuPrimitive.CheckboxItem.displayName;

/**
 * RadioItem component for the dropdown menu.
 * @param {Object} props - Properties for the DropdownMenuRadioItem component.
 * @returns {JSX.Element} - JSX element for the radio item.
 */
const DropdownMenuRadioItem = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
	<DropdownMenuPrimitive.RadioItem
		ref={ref}
		className={cn(
			"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
			className
		)}
		{...props}
	>
		<span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
			<DropdownMenuPrimitive.ItemIndicator>
				<CircleIcon className='h-2 w-2 fill-current' />
			</DropdownMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

/**
 * Label component for the dropdown menu.
 * @param {Object} props - Properties for the DropdownMenuLabel component.
 * @returns {JSX.Element} - JSX element for the dropdown menu label.
 */
const DropdownMenuLabel = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
		inset?: boolean;
	}
>(({ className, inset, ...props }, ref) => (
	<DropdownMenuPrimitive.Label
		ref={ref}
		className={cn(
			"px-2 py-1.5 text-sm font-semibold",
			inset && "pl-8",
			className
		)}
		{...props}
	/>
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

/**
 * Separator component for the dropdown menu.
 * @param {Object} props - Properties for the DropdownMenuSeparator component.
 * @returns {JSX.Element} - JSX element for the dropdown menu separator.
 */
const DropdownMenuSeparator = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<DropdownMenuPrimitive.Separator
		ref={ref}
		className={cn("-mx-1 my-1 h-px bg-muted", className)}
		{...props}
	/>
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

/**
 * Shortcut component for the dropdown menu.
 * @param {Object} props - Properties for the DropdownMenuShortcut component.
 * @returns {JSX.Element} - JSX element for the dropdown menu shortcut.
 */
const DropdownMenuShortcut = ({
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span
			className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
			{...props}
		/>
	);
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuGroup,
	DropdownMenuPortal,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuRadioGroup,
};
