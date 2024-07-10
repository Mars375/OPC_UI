import { Button } from "@/components/ui/Button/Button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/Popover/Popover";

export default function PopoverDemo() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant='outline'>Open popover</Button>
			</PopoverTrigger>
			<PopoverContent className='w-80'>
				<div>
					<p>This is the popover content.</p>
					<button onClick={() => alert("Popover button clicked!")}>
						Click me
					</button>
				</div>
			</PopoverContent>
		</Popover>
	);
}
