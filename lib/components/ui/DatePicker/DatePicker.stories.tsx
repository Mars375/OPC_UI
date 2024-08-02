import { Meta, StoryObj } from "@storybook/react";
import { DatePicker, DatePickerProps } from "./DatePicker";

/**
 * Meta configuration for the DatePicker component stories.
 * This includes the title, component, argument types, and decorators.
 */
const meta: Meta<typeof DatePicker> = {
	title: "UI/DatePicker",
	component: DatePicker,
	argTypes: {
		value: {
			control: "text",
		},
		showTime: {
			control: "boolean",
		},
		locale: {
			control: "text",
		},
		showOutsideDays: {
			control: "boolean",
		},
		showYearDropdown: {
			control: "boolean",
		},
		minDate: {
			control: "date",
		},
		maxDate: {
			control: "date",
		},
		onChange: {
			action: "changed",
		},
		disabled: {
			control: "boolean",
		},
		error: {
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
type Story = StoryObj<DatePickerProps>;

/**
 * Default story for the DatePicker component.
 * Displays a date picker with default settings.
 */
export const Default: Story = {
	args: {
		value: "",
		showTime: false,
		locale: "en-US",
		showOutsideDays: true,
		showYearDropdown: true,
		disabled: false,
		error: "",
	},
};

/**
 * WithTime story for the DatePicker component.
 * Displays a date picker with time selection enabled.
 */
export const WithTime: Story = {
	args: {
		value: "",
		showTime: true,
		locale: "en-US",
		showOutsideDays: true,
		showYearDropdown: true,
		disabled: false,
		error: "",
	},
};

/**
 * CustomLocale story for the DatePicker component.
 * Displays a date picker with French locale.
 */
export const CustomLocale: Story = {
	args: {
		value: "",
		showTime: false,
		locale: "fr-FR",
		showOutsideDays: true,
		showYearDropdown: true,
		disabled: false,
		error: "",
	},
};

/**
 * NoOutsideDays story for the DatePicker component.
 * Displays a date picker without showing outside days.
 */
export const NoOutsideDays: Story = {
	args: {
		value: "",
		showTime: false,
		locale: "en-US",
		showOutsideDays: false,
		showYearDropdown: true,
		disabled: false,
		error: "",
	},
};

/**
 * NoYearDropdown story for the DatePicker component.
 * Displays a date picker without the year dropdown.
 */
export const NoYearDropdown: Story = {
	args: {
		value: "",
		showTime: false,
		locale: "en-US",
		showOutsideDays: true,
		showYearDropdown: false,
		disabled: false,
		error: "",
	},
};

/**
 * WithMinMaxDates story for the DatePicker component.
 * Displays a date picker with minimum and maximum dates set.
 */
export const WithMinMaxDates: Story = {
	args: {
		value: "",
		showTime: false,
		locale: "en-US",
		showOutsideDays: true,
		showYearDropdown: true,
		minDate: new Date("2023-01-01"),
		maxDate: new Date("2023-12-31"),
		disabled: false,
		error: "",
	},
};

/**
 * Disabled story for the DatePicker component.
 * Displays a disabled date picker.
 */
export const Disabled: Story = {
	args: {
		value: "",
		showTime: false,
		locale: "en-US",
		showOutsideDays: true,
		showYearDropdown: true,
		disabled: true,
		error: "",
	},
};

/**
 * WithError story for the DatePicker component.
 * Displays a date picker with an error message.
 */
export const WithError: Story = {
	args: {
		value: "",
		showTime: false,
		locale: "en-US",
		showOutsideDays: true,
		showYearDropdown: true,
		disabled: false,
		error: "Invalid date",
	},
};
