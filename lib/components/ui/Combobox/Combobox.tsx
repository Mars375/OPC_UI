import * as React from "react";
import { cn } from "@/utils/utils";
import { Button } from "@/main";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandList,
	CommandInput, // Assurez-vous d'importer CommandInput
} from "@/main";
import { Popover, PopoverContent, PopoverTrigger } from "@/main";
import { ChevronsUpDownIcon } from "@/main";

interface ComboboxProps {
	options: { value: string; label: string }[];
	includeInput?: boolean;
}

const Combobox: React.FC<ComboboxProps> = ({
	options,
	includeInput = false,
}) => {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					role='combobox'
					aria-expanded={open}
					className={cn(
						"w-[200px] justify-between",
						!value && "text-muted-foreground"
					)}
				>
					{value
						? options.find((option) => option.value === value)?.label
						: "Select Option"}
					<div className='ml-2 h-4 w-4 shrink-0 opacity-50'>
						<ChevronsUpDownIcon />
					</div>
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-[200px] p-0'>
				<Command>
					{includeInput && <CommandInput placeholder='Search...' />}
					<CommandList>
						{options.length === 0 && (
							<CommandEmpty>No options found.</CommandEmpty>
						)}
						<CommandGroup>
							{options.map((option, index) => (
								<CommandItem
									key={index}
									value={option.value}
									onSelect={() => {
										console.log("onSelect triggered:", option.label);
										setValue(option.value);
										setOpen(false);
									}}
								>
									{option.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

Combobox.displayName = "Combobox";

export { Combobox };
