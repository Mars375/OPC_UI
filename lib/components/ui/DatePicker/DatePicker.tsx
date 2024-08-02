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

/**
 * Props for the DatePicker component.
 * @property {string | null} [value] - The selected date value.
 * @property {(date: string | null) => void} [onChange] - Callback function when the date changes.
 * @property {string} [id] - ID for the date picker input.
 * @property {string} [placeholder] - Placeholder text for the input.
 * @property {string} [className] - Additional class names for the date picker.
 * @property {string} [error] - Error message to display.
 * @property {boolean} [disableFutureDates] - Whether to disable future dates.
 * @property {Date} [minDate] - Minimum selectable date.
 * @property {Date} [maxDate] - Maximum selectable date.
 * @property {boolean} [disabled] - Whether the date picker is disabled.
 * @property {string} [locale] - Locale for date formatting.
 * @property {string} [dateFormat] - Date format string.
 * @property {boolean} [showTime] - Whether to show time selection.
 * @property {(event: React.FocusEvent<HTMLInputElement>) => void} [onBlur] - Callback function when the input loses focus.
 * @property {(event: React.FocusEvent<HTMLInputElement>) => void} [onFocus] - Callback function when the input gains focus.
 * @property {Object} [customClassNames] - Custom class names for various elements.
 * @property {boolean} [showYearDropdown] - Whether to show the year dropdown in the calendar.
 * @property {Object} [calendarClassNames] - Custom class names for the calendar.
 * @property {boolean} [showOutsideDays] - Whether to show days outside the current month.
 */
export interface DatePickerProps {
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
	showYearDropdown?: boolean;
	calendarClassNames?: { [key: string]: string };
	showOutsideDays?: boolean;
}

/**
 * DatePicker component.
 * Renders a date picker with optional time selection and error handling.
 * @param {DatePickerProps} props - Properties for the DatePicker component.
 * @returns {JSX.Element} - JSX element for the date picker.
 */
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
		showYearDropdown = true,
		calendarClassNames = {},
		showOutsideDays = true,
	}) => {
		// State to manage the selected date
		const [date, setDate] = React.useState<Date | null>(
			value ? new Date(value.split("/").reverse().join("-")) : null
		);
		// State to manage the input value
		const [inputValue, setInputValue] = React.useState<string>(value || "");
		// State to manage future date error
		const [futureDateError, setFutureDateError] = React.useState<string | null>(
			null
		);

		/**
		 * Handles input change and updates the date value.
		 * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
		 */
		const handleInputChange = React.useCallback(
			(event: React.ChangeEvent<HTMLInputElement>) => {
				let value = event.target.value;
				// Remove non-numeric characters
				value = value.replace(/\D/g, "");

				// Format the input value as DD/MM/YYYY
				if (value.length <= 2) {
					setInputValue(value);
				} else if (value.length <= 4) {
					setInputValue(`${value.slice(0, 2)}/${value.slice(2)}`);
				} else {
					setInputValue(
						`${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4, 8)}`
					);
				}

				// Parse the date if the input length is 8 (DDMMYYYY)
				if (value.length === 8) {
					const [day, month, year] = [
						value.slice(0, 2),
						value.slice(2, 4),
						value.slice(4, 8),
					].map(Number);
					const parsedDate = new Date(year, month - 1, day);
					if (!isNaN(parsedDate.getTime())) {
						// Check for future date
						if (disableFutureDates && parsedDate > new Date()) {
							setInputValue("");
							setFutureDateError("Date cannot be in the future.");
							if (onChange) {
								onChange(null);
							}
						} else if (
							minDate &&
							parsedDate <
								new Date(
									minDate.getFullYear(),
									minDate.getMonth(),
									minDate.getDate()
								)
						) {
							// Check for date before minDate
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
						} else if (
							maxDate &&
							parsedDate >
								new Date(
									maxDate.getFullYear(),
									maxDate.getMonth(),
									maxDate.getDate()
								)
						) {
							// Check for date after maxDate
							setInputValue("");
							setFutureDateError(
								`Date cannot be after ${formatDate(
									maxDate,
									dateFormat,
									locale
								)}.`
							);
							if (onChange) {
								onChange(null);
							}
						} else {
							// Set the date if all checks pass
							setDate(parsedDate);
							const formattedDate = formatDate(parsedDate, dateFormat, locale);
							setFutureDateError(null);
							if (onChange) {
								onChange(formattedDate);
							}
						}
					}
				}
			},
			[disableFutureDates, minDate, maxDate, onChange, dateFormat, locale]
		);

		/**
		 * Handles date change from the calendar component.
		 * @param {Date[]} newDates - The new selected dates.
		 */
		const handleDateChange = React.useCallback(
			(newDates: Date[]) => {
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
				// Check for future date
				if (disableFutureDates && newDate > new Date()) {
					setInputValue("");
					setFutureDateError("Date cannot be in the future.");
					if (onChange) {
						onChange(null);
					}
				} else if (
					minDate &&
					newDate <
						new Date(
							minDate.getFullYear(),
							minDate.getMonth(),
							minDate.getDate()
						)
				) {
					// Check for date before minDate
					setInputValue("");
					setFutureDateError(
						`Date cannot be before ${formatDate(minDate, dateFormat, locale)}.`
					);
					if (onChange) {
						onChange(null);
					}
				} else if (
					maxDate &&
					newDate >
						new Date(
							maxDate.getFullYear(),
							maxDate.getMonth(),
							maxDate.getDate()
						)
				) {
					// Check for date after maxDate
					setInputValue("");
					setFutureDateError(
						`Date cannot be after ${formatDate(maxDate, dateFormat, locale)}.`
					);
					if (onChange) {
						onChange(null);
					}
				} else {
					// Set the date if all checks pass
					setDate(newDate);
					const formattedDate = formatDate(newDate, dateFormat, locale);
					setInputValue(formattedDate);
					setFutureDateError(null);
					if (onChange) {
						onChange(formattedDate);
					}
				}
			},
			[disableFutureDates, minDate, maxDate, onChange, dateFormat, locale]
		);

		// Effect to update the date and input value when the value prop changes
		React.useEffect(() => {
			if (value === "" || value === null) {
				setDate(null);
				setInputValue("");
				setFutureDateError(null);
			} else if (value) {
				const newDate = new Date(value.split("/").reverse().join("-"));
				if (!isNaN(newDate.getTime())) {
					setDate(newDate);
					setInputValue(formatDate(newDate, dateFormat, locale));
				}
			}
		}, [value, dateFormat, locale]);

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
								(error || futureDateError) && "border-destructive",
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
									(error || futureDateError) && "border-destructive border-l-0",
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
								showYearDropdown={showYearDropdown}
								classNames={calendarClassNames}
								showOutsideDays={showOutsideDays}
							/>
						</PopoverContent>
					</div>
					{(error || futureDateError) && (
						<p id={`${id}-error`} className='text-destructive text-sm mt-1'>
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
