import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

/**
 * Meta configuration for the Button component stories.
 * This includes the title, component, argument types, and decorators.
 */
const meta: Meta<typeof Button> = {
	title: "UI/Button",
	component: Button,
	argTypes: {
		variant: {
			options: [
				"default",
				"destructive",
				"outline",
				"secondary",
				"ghost",
				"link",
				"disabled",
			],
			control: {
				type: "select",
			},
		},
		size: {
			options: ["default", "sm", "lg", "icon"],
			control: {
				type: "select",
			},
		},
	},
	decorators: [
		(Story) => (
			<div style={{ maxWidth: "300px", margin: "0 auto" }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<ButtonProps>;

/**
 * Default story for the Button component.
 * Displays a button with default variant and size.
 */
export const Default: Story = {
	args: {
		variant: "default",
		size: "default",
		children: "Button",
	},
};

/**
 * Destructive story for the Button component.
 * Displays a button with destructive variant and default size.
 */
export const Destructive: Story = {
	args: {
		variant: "destructive",
		size: "default",
		children: "Button",
	},
};

/**
 * Outline story for the Button component.
 * Displays a button with outline variant and default size.
 */
export const Outline: Story = {
	args: {
		variant: "outline",
		size: "default",
		children: "Button",
	},
};

/**
 * Secondary story for the Button component.
 * Displays a button with secondary variant and default size.
 */
export const Secondary: Story = {
	args: {
		variant: "secondary",
		size: "default",
		children: "Button",
	},
};

/**
 * Ghost story for the Button component.
 * Displays a button with ghost variant and default size.
 */
export const Ghost: Story = {
	args: {
		variant: "ghost",
		size: "default",
		children: "Button",
	},
};

/**
 * Link story for the Button component.
 * Displays a button with link variant and default size.
 */
export const Link: Story = {
	args: {
		variant: "link",
		size: "default",
		children: "Button",
	},
};

/**
 * Disabled story for the Button component.
 * Displays a button with disabled variant and default size.
 */
export const Disabled: Story = {
	args: {
		variant: "disabled",
		size: "default",
		children: "Button",
	},
};
