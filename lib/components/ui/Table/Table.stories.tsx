import { Meta, StoryObj } from "@storybook/react";
import {
	Table,
	TableHeader,
	TableBody,
	TableFooter,
	TableHead,
	TableRow,
	TableCell,
	TableCaption,
} from "./Table";

/**
 * Meta configuration for the Table component stories.
 * This includes the title, component, and decorators.
 */
const meta: Meta<typeof Table> = {
	title: "UI/Table",
	component: Table,
	decorators: [
		(Story) => (
			<div style={{ maxWidth: "800px", margin: "0 auto" }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Table>;

/**
 * Default story for the Table component.
 * Displays a simple table with headers, body, and footer.
 */
export const Default: Story = {
	render: (args) => (
		<Table {...args}>
			<TableCaption>A simple table example</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Header 1</TableHead>
					<TableHead>Header 2</TableHead>
					<TableHead>Header 3</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>Data 1</TableCell>
					<TableCell>Data 2</TableCell>
					<TableCell>Data 3</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Data 4</TableCell>
					<TableCell>Data 5</TableCell>
					<TableCell>Data 6</TableCell>
				</TableRow>
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell>Footer 1</TableCell>
					<TableCell>Footer 2</TableCell>
					<TableCell>Footer 3</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	),
	args: {
		className: "",
	},
};

/**
 * WithCustomStyles story for the Table component.
 * Displays a table with custom styles applied to headers, body, and footer.
 */
export const WithCustomStyles: Story = {
	render: (args) => (
		<Table {...args} className='border border-gray-300'>
			<TableCaption>A table with custom styles</TableCaption>
			<TableHeader>
				<TableRow className='bg-gray-100'>
					<TableHead className='p-2'>Header 1</TableHead>
					<TableHead className='p-2'>Header 2</TableHead>
					<TableHead className='p-2'>Header 3</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className='p-2'>Data 1</TableCell>
					<TableCell className='p-2'>Data 2</TableCell>
					<TableCell className='p-2'>Data 3</TableCell>
				</TableRow>
				<TableRow className='bg-gray-50'>
					<TableCell className='p-2'>Data 4</TableCell>
					<TableCell className='p-2'>Data 5</TableCell>
					<TableCell className='p-2'>Data 6</TableCell>
				</TableRow>
			</TableBody>
			<TableFooter>
				<TableRow className='bg-gray-100'>
					<TableCell className='p-2'>Footer 1</TableCell>
					<TableCell className='p-2'>Footer 2</TableCell>
					<TableCell className='p-2'>Footer 3</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	),
	args: {
		className: "",
	},
};
