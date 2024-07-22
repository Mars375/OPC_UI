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
	showYearDropdown?: boolean;
	calendarClassNames?: { [key: string]: string };
	showOutsideDays?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
	value,
	onChange,
	id,
	placeholder,
	className,
	error,
	disableFutureDates,
	minDate,
	maxDate,
	disabled,
	locale = "en-US",
	dateFormat = "yyyy-MM-dd",
	showTime = false,
	onBlur,
	onFocus,
	customClassNames = {},
	showYearDropdown = true,
	calendarClassNames = {},
	showOutsideDays = true,
}) => {
	const [date, setDate] = React.useState<Date | null>(
		value ? new Date(value) : null
	);
	const [inputValue, setInputValue] = React.useState(
		value ? formatDate(new Date(value), dateFormat, locale) : ""
	);
	const [futureDateError, setFutureDateError] = React.useState<string | null>(
		null
	);

	const handleDateChange = (dates: Date[]) => {
		const newDate = dates[0];
		if (disableFutureDates && newDate && newDate > new Date()) {
			setFutureDateError("Les dates futures ne sont pas autorisées.");
			return;
		}
		if (minDate && newDate && newDate < minDate) {
			setFutureDateError(
				`La date ne peut pas être antérieure à ${formatDate(
					minDate,
					dateFormat,
					locale
				)}.`
			);
			return;
		}
		if (maxDate && newDate && newDate > maxDate) {
			setFutureDateError(
				`La date ne peut pas être postérieure à ${formatDate(
					maxDate,
					dateFormat,
					locale
				)}.`
			);
			return;
		}
		setFutureDateError(null);
		setDate(newDate);
		setInputValue(newDate ? formatDate(newDate, dateFormat, locale) : "");
		onChange?.(newDate ? newDate.toISOString() : null);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
		const parsedDate = new Date(event.target.value);
		if (!isNaN(parsedDate.getTime())) {
			if (disableFutureDates && parsedDate > new Date()) {
				setFutureDateError("Les dates futures ne sont pas autorisées.");
				setDate(null);
				onChange?.(null);
				return;
			}
			if (minDate && parsedDate < minDate) {
				setFutureDateError(
					`La date ne peut pas être antérieure à ${formatDate(
						minDate,
						dateFormat,
						locale
					)}.`
				);
				setDate(null);
				onChange?.(null);
				return;
			}
			if (maxDate && parsedDate > maxDate) {
				setFutureDateError(
					`La date ne peut pas être postérieure à ${formatDate(
						maxDate,
						dateFormat,
						locale
					)}.`
				);
				setDate(null);
				onChange?.(null);
				return;
			}
			setFutureDateError(null);
			setDate(parsedDate);
			onChange?.(parsedDate.toISOString());
		} else {
			setDate(null);
			onChange?.(null);
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
							showYearDropdown={showYearDropdown}
							classNames={calendarClassNames}
							showOutsideDays={showOutsideDays}
							minDate={minDate}
							maxDate={maxDate}
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
};

export default DatePicker;
