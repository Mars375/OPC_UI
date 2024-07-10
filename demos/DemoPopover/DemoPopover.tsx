import * as React from "react";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	Button,
} from "../../lib/main";

const DemoPopover: React.FC = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen space-y-4'>
			<Popover>
				<PopoverTrigger asChild>
					<Button variant='outline'>Ouvrir le popover</Button>
				</PopoverTrigger>
				<PopoverContent className='p-4 bg-white rounded shadow-lg'>
					<p className='text-sm text-gray-700'>
						Ceci est le contenu du popover.
					</p>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default DemoPopover;
