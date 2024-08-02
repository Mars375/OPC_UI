import { Meta, StoryObj } from "@storybook/react";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationPrevious,
	PaginationNext,
	PaginationEllipsis,
	EntriesSelector,
} from "./Pagination";

/**
 * Meta configuration for the Pagination component stories.
 * This includes the title, component, and decorators.
 */
const meta: Meta<typeof Pagination> = {
	title: "UI/Pagination",
	component: Pagination,
	decorators: [
		(Story) => (
			<div style={{ maxWidth: "600px", margin: "0 auto" }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

/**
 * Default story for the Pagination component.
 * Displays a simple pagination with previous, next, and page links.
 */
export const Default: Story = {
	render: (args) => (
		<Pagination {...args}>
			<PaginationContent>
				<PaginationPrevious />
				<PaginationItem>
					<PaginationLink href='#'>1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href='#'>2</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href='#'>3</PaginationLink>
				</PaginationItem>
				<PaginationNext />
			</PaginationContent>
		</Pagination>
	),
	args: {
		className: "",
	},
};

/**
 * WithEllipsis story for the Pagination component.
 * Displays pagination with ellipsis to indicate more pages.
 */
export const WithEllipsis: Story = {
	render: (args) => (
		<Pagination {...args}>
			<PaginationContent>
				<PaginationPrevious />
				<PaginationItem>
					<PaginationLink href='#'>1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href='#'>2</PaginationLink>
				</PaginationItem>
				<PaginationEllipsis />
				<PaginationItem>
					<PaginationLink href='#'>10</PaginationLink>
				</PaginationItem>
				<PaginationNext />
			</PaginationContent>
		</Pagination>
	),
	args: {
		className: "",
	},
};

/**
 * WithEntriesSelector story for the Pagination component.
 * Displays pagination with an entries selector to choose the number of entries per page.
 */
export const WithEntriesSelector: Story = {
	render: (args) => (
		<div>
			<EntriesSelector
				value='10'
				onChange={() => {}}
				options={[
					{ value: "10", label: "10 entries" },
					{ value: "20", label: "20 entries" },
					{ value: "50", label: "50 entries" },
				]}
			/>
			<Pagination {...args}>
				<PaginationContent>
					<PaginationPrevious />
					<PaginationItem>
						<PaginationLink href='#'>1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href='#'>2</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href='#'>3</PaginationLink>
					</PaginationItem>
					<PaginationNext />
				</PaginationContent>
			</Pagination>
		</div>
	),
	args: {
		className: "",
	},
};
