import { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from "./Input";

/**
 * Meta configuration for the Input component stories.
 * This includes the title, component, argument types, and decorators.
 */
const meta: Meta<typeof Input> = {
	title: "UI/Input",
	component: Input,
	argTypes: {
		type: {
			options: ["text", "password", "email", "number", "url", "tel", "search"],
			control: {
				type: "select",
			},
		},
		placeholder: {
			control: "text",
		},
		disabled: {
			control: "boolean",
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
type Story = StoryObj<InputProps>;

/**
 * Interactive story for the Input component.
 * Displays an input field with configurable type, placeholder, and disabled state.
 */
export const Interactive: Story = {
	args: {
		type: "text",
		placeholder: "Enter text...",
		disabled: false,
	},
};
