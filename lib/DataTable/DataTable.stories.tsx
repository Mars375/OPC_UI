import type { Meta, StoryObj } from "@storybook/react";

import { DataTable } from "./DataTable";

const meta: Meta<typeof DataTable> = {
	component: DataTable,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Click me",
	},
};
