"use client";

import * as React from "react";
import { formatDate } from "@/utils/dateUtils";
import {
	CalendarIcon,
	Button,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Calendar,
	Input,
} from "@/main";

import { cn } from "@/utils/utils";

interface DatePickerProps {
	value?: string | null;
	onChange?: (date: string | null) => void;
	id?: string;
	placeholder?: string;
	className?: string;
	error?: string;
	disableFutureDates?: boolean;
	minDate?: Date;
	maxDate?: Date;
	disabled?: boolean;
	locale?: string;
	dateFormat?: string;
	showTime?: boolean;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
	customClassNames?: {
		input?: string;
		button?: string;
		popover?: string;
	};
	multiSelect?: boolean;
	showYearDropdown?: boolean;
	calendarClassNames?: { [key: string]: string };
	showOutsideDays?: boolean; // Added showOutsideDays prop
}

const DatePicker: React.FC<DatePickerProps> = React.memo(
	({
		value = null,
		onChange,
		id,
		placeholder = "DD/MM/YYYY",
		className,
		error,
		disableFutureDates = false,
		minDate,
		maxDate,
		disabled = false,
		locale = "en-US",
		dateFormat = "DD/MM/YYYY",
		showTime = false,
		onBlur,
		onFocus,
		customClassNames = {},
		multiSelect = false,
		showYearDropdown = true,
		calendarClassNames = {},
		showOutsideDays = true, // Default value for showOutsideDays
	}) => {
		const [date, setDate] = React.useState<Date | null>(
			value ? new Date(value.split("/").reverse().join("-")) : null
		);
		const [inputValue, setInputValue] = React.useState<string>(value || "");
		const [futureDateError, setFutureDateError] = React.useState<string | null>(
			null
		);

		const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			let value = event.target.value;
			value = value.replace(/\D/g, "");

			if (value.length <= 2) {
				setInputValue(value);
			} else if (value.length <= 4) {
				setInputValue(`${value.slice(0, 2)}/${value.slice(2)}`);
			} else {
				setInputValue(
					`${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4, 8)}`
				);
			}

			if (value.length === 8) {
				const [day, month, year] = [
					value.slice(0, 2),
					value.slice(2, 4),
					value.slice(4, 8),
				].map(Number);
				const parsedDate = new Date(year, month - 1, day);
				if (!isNaN(parsedDate.getTime())) {
					if (disableFutureDates && parsedDate > new Date()) {
						setInputValue("");
						setFutureDateError("Date cannot be in the future.");
						if (onChange) {
							onChange(null);
						}
					} else if (minDate && parsedDate < minDate) {
						setInputValue("");
						setFutureDateError(
							`Date cannot be before ${formatDate(
								minDate,
								dateFormat,
								locale
							)}.`
						);
						if (onChange) {
							onChange(null);
						}
					} else if (maxDate && parsedDate > maxDate) {
						setInputValue("");
						setFutureDateError(
							`Date cannot be after ${formatDate(maxDate, dateFormat, locale)}.`
						);
						if (onChange) {
							onChange(null);
						}
					} else {
						setDate(parsedDate);
						const formattedDate = formatDate(parsedDate, dateFormat, locale);
						setFutureDateError(null);
						if (onChange) {
							onChange(formattedDate);
						}
					}
				}
			}
		};

		React.useEffect(() => {
			if (date) {
				setInputValue(formatDate(date, dateFormat, locale));
			}
		}, [date, dateFormat, locale]);

		const handleDateChange = (newDates: Date[]) => {
			if (newDates.length === 0) {
				setDate(null);
				setInputValue("");
				setFutureDateError(null);
				if (onChange) {
					onChange(null);
				}
				return;
			}

			const newDate = newDates[0];
			if (disableFutureDates && newDate > new Date()) {
				setInputValue("");
				setFutureDateError("Date cannot be in the future.");
				if (onChange) {
					onChange(null);
				}
			} else if (minDate && newDate < minDate) {
				setInputValue("");
				setFutureDateError(
					`Date cannot be before ${formatDate(minDate, dateFormat, locale)}.`
				);
				if (onChange) {
					onChange(null);
				}
			} else if (maxDate && newDate > maxDate) {
				setInputValue("");
				setFutureDateError(
					`Date cannot be after ${formatDate(maxDate, dateFormat, locale)}.`
				);
				if (onChange) {
					onChange(null);
				}
			} else {
				setDate(newDate);
				const formattedDate = formatDate(newDate, dateFormat, locale);
				setInputValue(formattedDate);
				setFutureDateError(null);
				if (onChange) {
					onChange(formattedDate);
				}
			}
		};

		return (
			<div className={className}>
				<Popover>
					<div className='relative flex items-center'>
						<Input
							type='text'
							id={id}
							placeholder={placeholder}
							value={inputValue}
							onChange={handleInputChange}
							onBlur={onBlur}
							onFocus={onFocus}
							disabled={disabled}
							className={cn(
								"border rounded w-full pr-10 appearance-none",
								(error || futureDateError) && "border-red-500",
								customClassNames.input
							)}
							aria-invalid={!!(error || futureDateError)}
							aria-describedby={
								error || futureDateError ? `${id}-error` : undefined
							}
						/>
						<PopoverTrigger asChild className='rounded-l-none'>
							<Button
								variant={"outline"}
								className={cn(
									"absolute right-0 p-3 bg-accent rounded rounded-l-none hover:bg-accent/80",
									!date && "text-muted-foreground",
									(error || futureDateError) && "border-red-500 border-l-0",
									customClassNames.button
								)}
								disabled={disabled}
								aria-label='Select date'
							>
								<CalendarIcon className='h-4 w-4' />
							</Button>
						</PopoverTrigger>
						<PopoverContent
							className={cn("w-auto p-0", customClassNames.popover)}
						>
							<Calendar
								selectedDates={date ? [date] : []}
								onDateChange={handleDateChange}
								showTime={showTime}
								locale={locale}
								multiSelect={multiSelect}
								showYearDropdown={showYearDropdown}
								classNames={calendarClassNames}
								showOutsideDays={showOutsideDays} // Pass showOutsideDays prop to Calendar
							/>
						</PopoverContent>
					</div>
					{(error || futureDateError) && (
						<p id={`${id}-error`} className='text-red-500 text-sm mt-1'>
							{error || futureDateError}
						</p>
					)}
				</Popover>
			</div>
		);
	}
);

DatePicker.displayName = "DatePicker";

export { DatePicker };
