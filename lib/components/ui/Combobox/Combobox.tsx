import * as React from "react";
import { cn } from "@/utils/utils";
import { Button } from "@/main";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandList,
	CommandInput,
} from "@/main";
import { Popover, PopoverContent, PopoverTrigger } from "@/main";
import { ChevronsUpDownIcon } from "@/main";

interface ComboboxProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
	options: { value: string; label: string }[];
	includeInput?: boolean;
	id?: string;
	name?: string;
	onChange?: (value: string) => void;
	error?: string;
	value?: string;
}

const Combobox: React.FC<ComboboxProps> = ({
	options,
	includeInput = false,
	id,
	name,
	onChange,
	error,
	value,
	...props
}) => {
	const [open, setOpen] = React.useState(false);
	return (
		<div {...props}>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						id={id}
						name={name}
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
						{includeInput && (
							<CommandInput placeholder='Search...' id={id} name={name} />
						)}
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
											setOpen(false);
											onChange?.(option.value);
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
			{error && <div className='text-destructive text-sm mt-1'>{error}</div>}
		</div>
	);
};

Combobox.displayName = "Combobox";

export { Combobox };
