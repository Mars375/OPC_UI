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

export default function DatePicker() {
	const [date, setDate] = React.useState<Date | null>(null);
	const [inputValue, setInputValue] = React.useState<string>("");

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
			const [month, day, year] = [
				value.slice(0, 2),
				value.slice(2, 4),
				value.slice(4, 8),
			].map(Number);
			const parsedDate = new Date(year, month - 1, day);
			if (!isNaN(parsedDate.getTime())) {
				setDate(parsedDate);
			}
		}
	};

	React.useEffect(() => {
		if (date) {
			setInputValue(formatDate(date, "DD/MM/YYYY"));
		}
	}, [date]);

	const handleDateChange = (newDate: Date) => {
		setDate(newDate);
		setInputValue(formatDate(newDate, "DD/MM/YYYY"));
	};

	return (
		<Popover>
			<div className='relative flex items-center'>
				<Input
					type='text'
					placeholder='DD/MM/YYYY'
					value={inputValue}
					onChange={handleInputChange}
					className='border rounded w-full pr-10 appearance-none'
					style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
				/>
				<PopoverTrigger asChild>
					<Button
						variant={"outline"}
						className={cn(
							"absolute right-0 p-3 bg-gray-200 rounded",
							!date && "text-muted-foreground"
						)}
					>
						<CalendarIcon className='h-4 w-4' />
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-auto p-0'>
					<Calendar selectedDate={date} onDateChange={handleDateChange} />
				</PopoverContent>
			</div>
		</Popover>
	);
}
