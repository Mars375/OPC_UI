import { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

/**
 * Meta configuration for the Label component stories.
 * This includes the title, component, argument types, and decorators.
 */
const meta: Meta<typeof Label> = {
	title: "UI/Label",
	component: Label,
	argTypes: {
		className: {
			control: "text",
		},
		children: {
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
type Story = StoryObj<typeof Label>;

/**
 * Default story for the Label component.
 * Displays a label with default styling.
 */
export const Default: Story = {
	render: (args) => <Label {...args}>Default Label</Label>,
	args: {
		className: "",
	},
};

/**
 * Disabled story for the Label component.
 * Displays a label with disabled styling.
 */
export const Disabled: Story = {
	render: (args) => (
		<Label
			{...args}
			className='peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
		>
			Disabled Label
		</Label>
	),
	args: {
		className: "",
	},
};

/**
 * CustomClass story for the Label component.
 * Displays a label with custom class styling.
 */
export const CustomClass: Story = {
	render: (args) => (
		<Label {...args} className='text-destructive'>
			Custom Class Label
		</Label>
	),
	args: {
		className: "text-destructive",
	},
};
