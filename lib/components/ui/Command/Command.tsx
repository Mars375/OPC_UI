"use client";

import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";

import { cn } from "@/utils/utils";
import { Dialog, DialogContent } from "@/components/ui/Dialog/Dialog";

/**
 * SearchIcon component.
 * Renders an SVG icon for the search functionality.
 * @returns {JSX.Element} - JSX element for the search icon.
 */
const SearchIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='16'
		height='16'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
		strokeWidth='2'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
		/>
	</svg>
);

/**
 * Command component.
 * A wrapper around the CommandPrimitive component with additional styling.
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive>} props - Properties for the Command component.
 * @param {React.Ref<typeof CommandPrimitive>} ref - Reference for the Command component.
 * @returns {JSX.Element} - JSX element for the Command component.
 */
const Command = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
	<CommandPrimitive
		ref={ref}
		className={cn(
			"flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
			className
		)}
		{...props}
	/>
));
Command.displayName = CommandPrimitive.displayName;

/**
 * Props for the CommandDialog component.
 */
interface CommandDialogProps extends DialogProps {}

/**
 * CommandDialog component.
 * Renders a dialog containing the Command component.
 * @param {CommandDialogProps} props - Properties for the CommandDialog component.
 * @returns {JSX.Element} - JSX element for the CommandDialog component.
 */
const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
	return (
		<Dialog {...props}>
			<DialogContent className='overflow-hidden p-0 shadow-lg'>
				<Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>
					{children}
				</Command>
			</DialogContent>
		</Dialog>
	);
};

/**
 * CommandInput component.
 * A wrapper around the CommandPrimitive.Input component with additional styling.
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>} props - Properties for the CommandInput component.
 * @param {React.Ref<typeof CommandPrimitive.Input>} ref - Reference for the CommandInput component.
 * @returns {JSX.Element} - JSX element for the CommandInput component.
 */
const CommandInput = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Input>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
	<div className='flex items-center border-b px-3' cmdk-input-wrapper=''>
		<div className='mr-2 h-4 w-4 shrink-0 opacity-50'>
			<SearchIcon />
		</div>
		<CommandPrimitive.Input
			ref={ref}
			className={cn(
				"flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
			{...props}
		/>
	</div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

/**
 * CommandList component.
 * A wrapper around the CommandPrimitive.List component with additional styling.
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>} props - Properties for the CommandList component.
 * @param {React.Ref<typeof CommandPrimitive.List>} ref - Reference for the CommandList component.
 * @returns {JSX.Element} - JSX element for the CommandList component.
 */
const CommandList = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.List
		ref={ref}
		className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
		{...props}
	/>
));

CommandList.displayName = CommandPrimitive.List.displayName;

/**
 * CommandEmpty component.
 * A wrapper around the CommandPrimitive.Empty component with additional styling.
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>} props - Properties for the CommandEmpty component.
 * @param {React.Ref<typeof CommandPrimitive.Empty>} ref - Reference for the CommandEmpty component.
 * @returns {JSX.Element} - JSX element for the CommandEmpty component.
 */
const CommandEmpty = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Empty>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
	<CommandPrimitive.Empty
		ref={ref}
		className='py-6 text-center text-sm'
		{...props}
	/>
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

/**
 * CommandGroup component.
 * A wrapper around the CommandPrimitive.Group component with additional styling.
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>} props - Properties for the CommandGroup component.
 * @param {React.Ref<typeof CommandPrimitive.Group>} ref - Reference for the CommandGroup component.
 * @returns {JSX.Element} - JSX element for the CommandGroup component.
 */
const CommandGroup = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Group>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Group
		ref={ref}
		className={cn(
			"overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
			className
		)}
		{...props}
	/>
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

/**
 * CommandSeparator component.
 * A wrapper around the CommandPrimitive.Separator component with additional styling.
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>} props - Properties for the CommandSeparator component.
 * @param {React.Ref<typeof CommandPrimitive.Separator>} ref - Reference for the CommandSeparator component.
 * @returns {JSX.Element} - JSX element for the CommandSeparator component.
 */
const CommandSeparator = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Separator
		ref={ref}
		className={cn("-mx-1 h-px bg-border", className)}
		{...props}
	/>
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

/**
 * CommandItem component.
 * A wrapper around the CommandPrimitive.Item component with additional styling.
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>} props - Properties for the CommandItem component.
 * @param {React.Ref<typeof CommandPrimitive.Item>} ref - Reference for the CommandItem component.
 * @returns {JSX.Element} - JSX element for the CommandItem component.
 */
const CommandItem = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Item
		ref={ref}
		className={cn(
			"relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled='true']:pointer-events-none data-[disabled='true']:opacity-50",
			className
		)}
		{...props}
	/>
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

/**
 * CommandShortcut component.
 * Renders a span element for displaying keyboard shortcuts.
 * @param {React.HTMLAttributes<HTMLSpanElement>} props - Properties for the CommandShortcut component.
 * @returns {JSX.Element} - JSX element for the CommandShortcut component.
 */
const CommandShortcut = ({
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span
			className={cn(
				"ml-auto text-xs tracking-widest text-muted-foreground",
				className
			)}
			{...props}
		/>
	);
};
CommandShortcut.displayName = "CommandShortcut";

export {
	Command,
	CommandDialog,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandShortcut,
	CommandSeparator,
};
