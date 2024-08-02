import { Meta, StoryObj } from "@storybook/react";
import { Calendar, CalendarProps } from "./Calendar";

/**
 * Meta configuration for the Calendar component stories.
 * This includes the title, component, argument types, and decorators.
 */
const meta: Meta<typeof Calendar> = {
	title: "UI/Calendar",
	component: Calendar,
	argTypes: {
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
		onDateChange: {
			action: "changed",
		},
		maxDate: {
			control: "date",
		},
	},
	decorators: [
		(Story) => (
			<div style={{ width: "280px", margin: "auto" }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<CalendarProps>;

/**
 * Default story for the Calendar component.
 * Displays a calendar with default settings.
 */
export const Default: Story = {
	args: {
		locale: "en-US",
		showOutsideDays: true,
		showYearDropdown: true,
	},
};

/**
 * CustomLocale story for the Calendar component.
 * Displays a calendar with French locale.
 */
export const CustomLocale: Story = {
	args: {
		locale: "fr-FR",
		showOutsideDays: true,
		showYearDropdown: true,
	},
};

/**
 * NoOutsideDays story for the Calendar component.
 * Displays a calendar without showing outside days.
 */
export const NoOutsideDays: Story = {
	args: {
		locale: "en-US",
		showOutsideDays: false,
		showYearDropdown: true,
	},
};

/**
 * NoYearDropdown story for the Calendar component.
 * Displays a calendar without the year dropdown.
 */
export const NoYearDropdown: Story = {
	args: {
		locale: "en-US",
		showOutsideDays: true,
		showYearDropdown: false,
	},
};

/**
 * WithMinMaxDates story for the Calendar component.
 * Displays a calendar with minimum and maximum dates set.
 */
export const WithMinMaxDates: Story = {
	args: {
		locale: "en-US",
		showOutsideDays: true,
		showYearDropdown: true,
		minDate: new Date("2023-01-01"),
		maxDate: new Date("2023-12-31"),
	},
};
