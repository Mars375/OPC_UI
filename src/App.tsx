import * as React from "react";
import { DatePicker } from "@/main";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuRadioGroup,
} from "@/main";
import { Button } from "@/main";
import { Modal } from "@/main";

const App: React.FC = () => {
	const [open, setOpen] = React.useState(false);
	return (
		<div className='flex h-screen items-center justify-around flex-col'>
			<div className='flex flex-col gap-4'>
				<DatePicker showOutsideDays={true} locale='fr-FR' />
			</div>
			<div>
				<DropdownMenu>
					<DropdownMenuTrigger>
						<button>Open Menu</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem>Item 1</DropdownMenuItem>
						<DropdownMenuItem>Item 2</DropdownMenuItem>
						<DropdownMenuCheckboxItem checked>
							Checkbox Item
						</DropdownMenuCheckboxItem>
						<DropdownMenuRadioGroup>
							<DropdownMenuRadioItem value='1'>
								Radio Item
							</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value='2'>
								Radio Item 2
							</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
						<DropdownMenuSeparator />
						<DropdownMenuLabel>Label</DropdownMenuLabel>
						<DropdownMenuSub>
							<DropdownMenuSubTrigger>Sub Menu</DropdownMenuSubTrigger>
							<DropdownMenuSubContent>
								<DropdownMenuItem>Sub Item 1</DropdownMenuItem>
								<DropdownMenuItem>Sub Item 2</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuSub>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div>
				<Button onClick={() => setOpen(true)}>Open Modal</Button>
				<Modal open={open} onClose={() => setOpen(false)}>
					<div>Modal</div>
				</Modal>
			</div>
		</div>
	);
};

export default App;
