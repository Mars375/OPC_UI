import { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverTrigger, PopoverContent } from "./Popover";
import { Button } from "@/components/ui/Button/Button";

/**
 * Meta configuration for the Popover component stories.
 * This includes the title, component, and decorators.
 */
const meta: Meta<typeof Popover> = {
	title: "UI/Popover",
	component: Popover,
	decorators: [
		(Story) => (
			<div style={{ maxWidth: "400px", margin: "0 auto" }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Popover>;

/**
 * Default story for the Popover component.
 * Displays a popover with a trigger button and default content.
 */
export const Default: Story = {
	render: (args) => (
		<Popover {...args}>
			<PopoverTrigger asChild>
				<Button>Open Popover</Button>
			</PopoverTrigger>
			<PopoverContent>
				<div className='p-4'>
					<h4 className='text-lg font-medium'>Popover Title</h4>
					<p className='text-sm text-muted-foreground'>
						This is the popover content.
					</p>
				</div>
			</PopoverContent>
		</Popover>
	),
};

/**
 * WithCustomContent story for the Popover component.
 * Displays a popover with a trigger button and custom content.
 */
export const WithCustomContent: Story = {
	render: (args) => (
		<Popover {...args}>
			<PopoverTrigger asChild>
				<Button>Open Custom Popover</Button>
			</PopoverTrigger>
			<PopoverContent>
				<div className='p-4'>
					<h4 className='text-lg font-medium'>Custom Popover Title</h4>
					<p className='text-sm text-muted-foreground'>
						This is the custom popover content.
					</p>
					<Button className='mt-2'>Action</Button>
				</div>
			</PopoverContent>
		</Popover>
	),
};
