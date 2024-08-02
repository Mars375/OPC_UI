import { Meta, StoryObj } from "@storybook/react";
import { Combobox, ComboboxProps } from "./Combobox";

/**
 * Meta configuration for the Combobox component stories.
 * This includes the title, component, argument types, and decorators.
 */
const meta: Meta<typeof Combobox> = {
	title: "UI/Combobox",
	component: Combobox,
	argTypes: {
		options: {
			control: "object",
		},
		includeInput: {
			control: "boolean",
		},
		id: {
			control: "text",
		},
		name: {
			control: "text",
		},
		onChange: {
			action: "changed",
		},
		error: {
			control: "text",
		},
		value: {
			control: "text",
		},
		className: {
			control: "text",
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
type Story = StoryObj<ComboboxProps>;

/**
 * Default story for the Combobox component.
 * Displays a combobox with default settings.
 */
export const Default: Story = {
	args: {
		options: [
			{ value: "option1", label: "Option 1" },
			{ value: "option2", label: "Option 2" },
			{ value: "option3", label: "Option 3" },
		],
		includeInput: false,
		id: "combobox-default",
		name: "combobox",
		value: "",
		error: "",
	},
};

/**
 * WithInput story for the Combobox component.
 * Displays a combobox with an input field.
 */
export const WithInput: Story = {
	args: {
		options: [
			{ value: "option1", label: "Option 1" },
			{ value: "option2", label: "Option 2" },
			{ value: "option3", label: "Option 3" },
		],
		includeInput: true,
		id: "combobox-with-input",
		name: "combobox",
		value: "",
		error: "",
	},
};

/**
 * WithError story for the Combobox component.
 * Displays a combobox with an error message.
 */
export const WithError: Story = {
	args: {
		options: [
			{ value: "option1", label: "Option 1" },
			{ value: "option2", label: "Option 2" },
			{ value: "option3", label: "Option 3" },
		],
		includeInput: false,
		id: "combobox-with-error",
		name: "combobox",
		value: "",
		error: "This is an error message",
	},
};

/**
 * PreselectedValue story for the Combobox component.
 * Displays a combobox with a preselected value.
 */
export const PreselectedValue: Story = {
	args: {
		options: [
			{ value: "option1", label: "Option 1" },
			{ value: "option2", label: "Option 2" },
			{ value: "option3", label: "Option 3" },
		],
		includeInput: false,
		id: "combobox-preselected",
		name: "combobox",
		value: "option2",
		error: "",
	},
};
