import { Meta, StoryObj } from "@storybook/react";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
	DialogClose,
} from "./Dialog";
import { Button } from "../Button/Button";

/**
 * Meta configuration for the Dialog component stories.
 * This includes the title, component, and decorators.
 */
const meta: Meta<typeof Dialog> = {
	title: "UI/Dialog",
	component: Dialog,
	decorators: [
		(Story) => (
			<div style={{ maxWidth: "400px", margin: "0 auto" }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

/**
 * Demo story for the Dialog component.
 * Displays a dialog with a trigger button, header, content, and footer.
 */
export const Demo: Story = {
	render: (args) => (
		<Dialog {...args}>
			<DialogTrigger asChild>
				<Button>Open Dialog</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Dialog Title</DialogTitle>
					<DialogDescription>
						This is a description of the dialog.
					</DialogDescription>
				</DialogHeader>
				<div>
					<p>Dialog content goes here.</p>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant='secondary'>Close</Button>
					</DialogClose>
					<Button>Save changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
};
