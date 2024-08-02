import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
	Command,
	CommandDialog,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandShortcut,
	CommandSeparator,
} from "./Command";

/**
 * Meta configuration for the Command component stories.
 * This includes the title, component, argument types, and decorators.
 */
const meta: Meta<typeof Command> = {
	title: "UI/Command",
	component: Command,
	argTypes: {
		className: {
			control: "text",
		},
	},
	decorators: [
		(Story) => (
			<div style={{ maxWidth: "400px", margin: "0 auto" }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Command>;

/**
 * Default story for the Command component.
 * Displays a command input with a list of suggestions and settings.
 */
export const Default: Story = {
	render: (args) => (
		<Command {...args} className='rounded-lg border shadow-md'>
			<CommandInput placeholder='Type a command or search...' />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading='Suggestions'>
					<CommandItem>
						<span>Calendar</span>
					</CommandItem>
					<CommandItem>
						<span>Search Emoji</span>
					</CommandItem>
					<CommandItem>
						<span>Calculator</span>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading='Settings'>
					<CommandItem>
						<span>Profile</span>
						<CommandShortcut>⌘P</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<span>Billing</span>
						<CommandShortcut>⌘B</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<span>Settings</span>
						<CommandShortcut>⌘S</CommandShortcut>
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	),
	args: {
		className: "",
	},
};

/**
 * WithDialog story for the Command component.
 * Displays a command input within a dialog that can be toggled with a keyboard shortcut.
 */
export const WithDialog: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState(false);

		React.useEffect(() => {
			const down = (e: KeyboardEvent) => {
				if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
					e.preventDefault();
					setOpen((open) => !open);
				}
			};

			document.addEventListener("keydown", down);
			return () => document.removeEventListener("keydown", down);
		}, []);

		return (
			<>
				<p className='text-sm text-muted-foreground'>
					Press{" "}
					<kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
						<span className='text-xs'>⌘</span>J
					</kbd>
				</p>
				<CommandDialog {...args} open={open} onOpenChange={setOpen}>
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading='Suggestions'>
							<CommandItem>
								<span>Calendar</span>
							</CommandItem>
							<CommandItem>
								<span>Search Emoji</span>
							</CommandItem>
							<CommandItem>
								<span>Calculator</span>
							</CommandItem>
						</CommandGroup>
						<CommandSeparator />
						<CommandGroup heading='Settings'>
							<CommandItem>
								<span>Profile</span>
								<CommandShortcut>⌘P</CommandShortcut>
							</CommandItem>
							<CommandItem>
								<span>Billing</span>
								<CommandShortcut>⌘B</CommandShortcut>
							</CommandItem>
							<CommandItem>
								<span>Settings</span>
								<CommandShortcut>⌘S</CommandShortcut>
							</CommandItem>
						</CommandGroup>
					</CommandList>
				</CommandDialog>
			</>
		);
	},
	args: {
		className: "",
	},
};

/**
 * WithShortcuts story for the Command component.
 * Displays a command input with a list of suggestions and keyboard shortcuts.
 */
export const WithShortcuts: Story = {
	render: (args) => (
		<Command {...args} className='rounded-lg border shadow-md'>
			<CommandInput placeholder='Type a command or search...' />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading='Suggestions'>
					<CommandItem>
						Calendar
						<CommandShortcut>Ctrl+1</CommandShortcut>
					</CommandItem>
					<CommandItem>
						Search Emoji
						<CommandShortcut>Ctrl+2</CommandShortcut>
					</CommandItem>
					<CommandItem>
						Calculator
						<CommandShortcut>Ctrl+3</CommandShortcut>
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	),
	args: {
		className: "",
	},
};

/**
 * WithSeparator story for the Command component.
 * Displays a command input with a list of suggestions separated by a separator.
 */
export const WithSeparator: Story = {
	render: (args) => (
		<Command {...args} className='rounded-lg border shadow-md'>
			<CommandInput placeholder='Type a command or search...' />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading='Suggestions'>
					<CommandItem>Calendar</CommandItem>
					<CommandItem>Search Emoji</CommandItem>
					<CommandSeparator />
					<CommandItem>Calculator</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	),
	args: {
		className: "",
	},
};
