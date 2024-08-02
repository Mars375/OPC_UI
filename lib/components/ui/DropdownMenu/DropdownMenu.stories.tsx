import { Meta, StoryObj } from "@storybook/react";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuShortcut,
	DropdownMenuGroup,
} from "./DropdownMenu";
import { Button } from "@/components/ui/Button/Button";
import {
	User,
	CreditCard,
	Settings,
	Keyboard,
	Users,
	Plus,
	Github,
	HelpCircle,
	LogOut,
} from "lucide-react";

/**
 * Meta configuration for the DropdownMenu component stories.
 * This includes the title, component, and decorators.
 */
const meta: Meta<typeof DropdownMenu> = {
	title: "UI/DropdownMenu",
	component: DropdownMenu,
	decorators: [
		(Story) => (
			<div style={{ maxWidth: "400px", margin: "0 auto" }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

/**
 * Demo story for the DropdownMenu component.
 * Displays a dropdown menu with various items, submenus, and shortcuts.
 */
export const Demo: Story = {
	render: (args) => (
		<DropdownMenu {...args}>
			<DropdownMenuTrigger asChild>
				<Button>Open Menu</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuItem>
					<User className='mr-2 h-4 w-4' />
					<span>Profile</span>
					<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<CreditCard className='mr-2 h-4 w-4' />
					<span>Billing</span>
					<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Settings className='mr-2 h-4 w-4' />
					<span>Settings</span>
					<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Keyboard className='mr-2 h-4 w-4' />
					<span>Keyboard shortcuts</span>
					<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<Users className='mr-2 h-4 w-4' />
						<span>Team</span>
					</DropdownMenuItem>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<Plus className='mr-2 h-4 w-4' />
							<span>Invite users</span>
						</DropdownMenuSubTrigger>
						<DropdownMenuSubContent>
							<DropdownMenuItem>Email</DropdownMenuItem>
							<DropdownMenuItem>Message</DropdownMenuItem>
							<DropdownMenuItem>Copy Link</DropdownMenuItem>
						</DropdownMenuSubContent>
					</DropdownMenuSub>
					<DropdownMenuItem>
						<Plus className='mr-2 h-4 w-4' />
						<span>New Team</span>
						<DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Github className='mr-2 h-4 w-4' />
					<span>GitHub</span>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<HelpCircle className='mr-2 h-4 w-4' />
					<span>Support</span>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<LogOut className='mr-2 h-4 w-4' />
					<span>Log out</span>
					<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	),
};
