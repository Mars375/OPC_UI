import { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastAction } from "./Toast";
import { Button } from "@/components/ui/Button/Button";
import { useToast } from "@/utils/use-toast";
import { Toaster } from "@/main";

/**
 * Meta configuration for the Toast component stories.
 * This includes the title, component, and decorators.
 */
const meta: Meta<typeof Toast> = {
	title: "UI/Toast",
	component: Toast,
	decorators: [
		(Story) => (
			<>
				<Toaster />
				<div style={{ maxWidth: "400px", margin: "0 auto" }}>
					<Story />
				</div>
			</>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Toast>;

/**
 * ToastDemo component.
 * Demonstrates the usage of the Toast component with a button to trigger the toast.
 * @returns {JSX.Element} - JSX element for the toast demo.
 */
const ToastDemo = () => {
	const { toast } = useToast();

	return (
		<Button
			variant='outline'
			onClick={() => {
				toast({
					title: "Scheduled: Catch up ",
					description: "Friday, February 10, 2023 at 5:57 PM",
					action: (
						<ToastAction altText='Goto schedule to undo'>Undo</ToastAction>
					),
				});
			}}
		>
			Add to calendar
		</Button>
	);
};

/**
 * Default story for the Toast component.
 * Displays the ToastDemo component.
 */
export const Default: Story = {
	render: () => (
		<>
			<ToastDemo />
		</>
	),
	args: {},
};
