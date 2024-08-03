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

/**
 * Props for the Combobox component.
 * @property {Array<{ value: string; label: string }>} options - List of options for the combobox.
 * @property {boolean} [includeInput] - Whether to include an input field for searching.
 * @property {string} [id] - ID for the combobox.
 * @property {string} [name] - Name for the combobox.
 * @property {(value: string) => void} [onChange] - Callback function when the selected value changes.
 * @property {string} [error] - Error message to display.
 * @property {string} [value] - Selected value.
 * @property {string} [className] - Additional class names for the combobox.
 */
export interface ComboboxProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
	options: { value: string; label: string }[];
	includeInput?: boolean;
	id?: string;
	name?: string;
	onChange?: (value: string) => void;
	error?: string;
	value?: string;
	className?: string;
}

/**
 * Combobox component.
 * Renders a combobox with optional input field and error message.
 * @param {ComboboxProps} props - Properties for the Combobox component.
 * @returns {JSX.Element} - JSX element for the combobox.
 */
const Combobox: React.FC<ComboboxProps> = ({
	options,
	includeInput = false,
	id,
	name,
	onChange,
	error,
	value: propValue,
	className,
	...props
}) => {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(propValue || "");

	/**
	 * Handles the selection of an option.
	 * @param {string} selectedValue - The selected value.
	 */
	const handleSelect = (selectedValue: string) => {
		setValue(selectedValue);
		setOpen(false);
		if (onChange) {
			onChange(selectedValue);
		}
	};

	React.useEffect(() => {
		setValue(propValue || "");
	}, [propValue]);

	return (
		<div {...props} className={cn("w-full", className)}>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						id={id}
						name={name}
						variant='outline'
						role='combobox'
						aria-expanded={open}
						aria-controls={`${id}-listbox`}
						aria-haspopup='listbox'
						aria-label={
							value
								? options.find((option) => option.value === value)?.label
								: "Select Option"
						}
						className={cn(
							"w-full justify-between",
							!value && "text-muted-foreground"
						)}
						data-testid={id}
					>
						{value
							? options.find((option) => option.value === value)?.label
							: "Select Option"}
						<div className='ml-2 h-4 w-4 shrink-0 opacity-50'>
							<ChevronsUpDownIcon />
						</div>
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className={cn("w-[var(--radix-popover-trigger-width)] p-0")}
					role='listbox'
					id={`${id}-listbox`}
				>
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
										onSelect={() => handleSelect(option.value)}
										role='option'
										aria-selected={option.value === value}
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
