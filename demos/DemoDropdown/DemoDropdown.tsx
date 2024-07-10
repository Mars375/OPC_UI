import * as React from "react";
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
	DropdownMenuSubTrigger,
	DropdownMenuSubContent,
	DropdownMenuRadioGroup,
} from "../../lib/main";

import { Button } from "../../lib/main";

const DemoDropdown: React.FC = () => {
	const [checked, setChecked] = React.useState(false);
	const [radioValue, setRadioValue] = React.useState("one");

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline'>Ouvrir le menu</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Options</DropdownMenuLabel>
				<DropdownMenuItem onSelect={() => alert("Option 1 sélectionnée")}>
					Option 1
				</DropdownMenuItem>
				<DropdownMenuItem onSelect={() => alert("Option 2 sélectionnée")}>
					Option 2
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuCheckboxItem
					checked={checked}
					onCheckedChange={setChecked}
				>
					Option avec case à cocher
				</DropdownMenuCheckboxItem>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup
					value={radioValue}
					onValueChange={setRadioValue}
				>
					<DropdownMenuRadioItem value='one'>
						Option radio 1
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value='two'>
						Option radio 2
					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
				<DropdownMenuSeparator />
				<DropdownMenuSub>
					<DropdownMenuSubTrigger>Plus d'options</DropdownMenuSubTrigger>
					<DropdownMenuSubContent>
						<DropdownMenuItem onSelect={() => alert("Option 3 sélectionnée")}>
							Option 3
						</DropdownMenuItem>
						<DropdownMenuItem onSelect={() => alert("Option 4 sélectionnée")}>
							Option 4
						</DropdownMenuItem>
					</DropdownMenuSubContent>
				</DropdownMenuSub>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default DemoDropdown;
