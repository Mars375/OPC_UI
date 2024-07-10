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
} from "@/main";

import { cn } from "@/utils/utils";

export default function DatePicker() {
	const [date, setDate] = React.useState<Date | null>(null);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"w-[280px] justify-start text-left font-normal",
						!date && "text-muted-foreground"
					)}
				>
					<CalendarIcon className='mr-2 h-4 w-4' />
					{date ? formatDate(date) : <span>Pick a date</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0'>
				<Calendar selectedDate={date} onDateChange={setDate} />
			</PopoverContent>
		</Popover>
	);
}