"use client";

import * as React from "react";
import { cn } from "@/utils/utils";

export interface DayPickerProps {
	className?: string;
	classNames?: { [key: string]: string };
	showOutsideDays?: boolean;
	selectedDates: Date[] | null;
	minDate?: Date;
	maxDate?: Date;
	onDateChange: (dates: Date[]) => void;
	showTime?: boolean;
	locale?: string;
	showYearDropdown?: boolean;
}

const DayPicker: React.FC<DayPickerProps> = ({
	className,
	classNames = {},
	showOutsideDays = true,
	selectedDates,
	onDateChange,
	minDate,
	maxDate,
	showTime = false,
	locale = "en-US",
	showYearDropdown = true,
}) => {
	const [currentDate, setCurrentDate] = React.useState(new Date());
	const [yearDropdownOpen, setYearDropdownOpen] = React.useState(false);
	const currentYearRef = React.useRef<HTMLDivElement | null>(null);

	const daysOfWeek = React.useMemo(() => {
		const formatter = new Intl.DateTimeFormat(locale, { weekday: "short" });
		const days = [];
		for (let i = 0; i < 7; i++) {
			const day = new Date(2021, 5, i + 1);
			days.push(
				formatter.format(day).charAt(0).toUpperCase() +
					formatter.format(day).slice(1)
			);
		}
		const sunday = days.pop();
		if (sunday) {
			days.unshift(sunday);
		}
		return days;
	}, [locale]);

	const handlePrevMonth = () => {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
		);
	};

	const handleNextMonth = () => {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
		);
	};

	const handleYearChange = (year: number) => {
		setCurrentDate(new Date(year, currentDate.getMonth(), 1));
		setYearDropdownOpen(false);
	};

	const handleDateClick = React.useCallback(
		(day: number, monthOffset = 0) => {
			const newDate = new Date(
				currentDate.getFullYear(),
				currentDate.getMonth() + monthOffset,
				day
			);
			if ((minDate && newDate < minDate) || (maxDate && newDate > maxDate)) {
				return;
			}
			setCurrentDate(newDate);
			onDateChange([newDate]);
		},
		[currentDate, minDate, maxDate, onDateChange]
	);

	const handleTimeChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		type: "hours" | "minutes"
	) => {
		if (selectedDates && selectedDates.length > 0) {
			const newDate = new Date(selectedDates[0]);
			if (type === "hours") {
				newDate.setHours(parseInt(event.target.value, 10));
			} else if (type === "minutes") {
				newDate.setMinutes(parseInt(event.target.value, 10));
			}
			onDateChange([newDate]);
		}
	};

	const renderDays = React.useMemo(() => {
		const days = [];
		const today = new Date();
		const startOfMonth = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			1
		);
		const endOfMonth = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth() + 1,
			0
		);
		const startDay = (startOfMonth.getDay() + 6) % 7;
		const daysInMonth = endOfMonth.getDate();

		if (showOutsideDays) {
			const prevMonthDays = startDay;
			const prevMonth = new Date(
				currentDate.getFullYear(),
				currentDate.getMonth(),
				0
			).getDate();
			for (let i = prevMonth - prevMonthDays + 1; i <= prevMonth; i++) {
				days.push(
					<td
						key={`prev-${i}`}
						className={cn("p-2 text-gray-300", classNames.cell)}
					>
						<button
							onClick={() => handleDateClick(i, -1)}
							className='w-full h-full text-sm'
						>
							{i}
						</button>
					</td>
				);
			}
		} else {
			for (let i = 0; i < startDay; i++) {
				days.push(
					<td key={`empty-${i}`} className={cn("p-2", classNames.cell)}></td>
				);
			}
		}

		for (let i = 1; i <= daysInMonth; i++) {
			const date = new Date(
				currentDate.getFullYear(),
				currentDate.getMonth(),
				i
			);
			const isSelected = selectedDates?.some(
				(selectedDate) =>
					selectedDate.getDate() === date.getDate() &&
					selectedDate.getMonth() === date.getMonth() &&
					selectedDate.getFullYear() === date.getFullYear()
			);
			const isToday =
				date.getDate() === today.getDate() &&
				date.getMonth() === today.getMonth() &&
				date.getFullYear() === today.getFullYear();

			days.push(
				<td
					key={i}
					className={cn(
						"p-2",
						classNames.cell,
						isSelected && classNames.day_selected,
						isToday && classNames.day_today
					)}
				>
					<button
						onClick={() => handleDateClick(i)}
						className='w-full h-full text-sm'
					>
						{i}
					</button>
				</td>
			);
		}

		if (showOutsideDays) {
			const nextMonthDays = (7 - ((startDay + daysInMonth) % 7)) % 7;
			for (let i = 1; i <= nextMonthDays; i++) {
				days.push(
					<td
						key={`next-${i}`}
						className={cn("p-2 text-gray-300", classNames.cell)}
					>
						<button
							onClick={() => handleDateClick(i, 1)}
							className='w-full h-full text-sm'
						>
							{i}
						</button>
					</td>
				);
			}
		}

		const rows = [];
		for (let i = 0; i < days.length; i += 7) {
			rows.push(
				<tr key={i} className={classNames.row}>
					{days.slice(i, i + 7)}
				</tr>
			);
		}
		return rows;
	}, [
		currentDate,
		selectedDates,
		showOutsideDays,
		classNames,
		handleDateClick,
	]);

	const renderYearOptions = () => {
		const years = [];
		const currentYear = currentDate.getFullYear();
		for (let year = currentYear - 50; year <= currentYear + 50; year++) {
			years.push(
				<div
					key={year}
					ref={year === currentYear ? currentYearRef : null}
					className={cn(
						"p-2 cursor-pointer rounded hover:bg-gray-200 text-center",
						classNames.dropdown_cells,
						year === currentYear && classNames.dropdown_cells_selected
					)}
					onClick={() => handleYearChange(year)}
				>
					{year}
				</div>
			);
		}
		return years;
	};

	React.useEffect(() => {
		if (yearDropdownOpen && currentYearRef.current) {
			currentYearRef.current.parentElement?.scrollTo({
				top:
					currentYearRef.current.offsetTop -
					currentYearRef.current.parentElement.offsetTop,
				behavior: "auto",
			});
		}
	}, [yearDropdownOpen]);

	return (
		<div
			className={cn(
				"p-3 bg-background text-foreground rounded-lg shadow-md",
				className
			)}
		>
			<div
				className={cn(
					"flex relative justify-around items-center mb-4",
					classNames.nav
				)}
			>
				<button
					onClick={handlePrevMonth}
					className={cn(classNames.nav_button, classNames.nav_button_previous)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-4 w-4'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth='2'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15 19l-7-7 7-7'
						/>
					</svg>
				</button>
				<span className={cn(classNames.caption_label)}>
					{currentDate
						.toLocaleString(locale, { month: "long" })
						.charAt(0)
						.toUpperCase() +
						currentDate.toLocaleString(locale, { month: "long" }).slice(1)}{" "}
					{showYearDropdown && (
						<div className='relative inline-block'>
							<button
								onClick={() => setYearDropdownOpen(!yearDropdownOpen)}
								className='bg-background text-foreground px-2 py-1 rounded flex items-center'
							>
								{currentDate.getFullYear()}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className={cn("h-4 w-4 ml-1 transition-transform", {
										"rotate-180": yearDropdownOpen,
									})}
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path
										fillRule='evenodd'
										d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z'
										clipRule='evenodd'
									/>
								</svg>
							</button>
							{yearDropdownOpen && (
								<div
									className={cn(
										"absolute z-10 left-[-118px] mt-1 w-[17rem] border rounded shadow-lg max-h-[19rem] overflow-y-auto grid grid-cols-4 gap-1 p-2 ",
										classNames.dropdown
									)}
								>
									{renderYearOptions()}
								</div>
							)}
						</div>
					)}
				</span>
				<button
					onClick={handleNextMonth}
					className={cn(classNames.nav_button, classNames.nav_button_next)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-4 w-4'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth='2'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M9 5l7 7-7 7'
						/>
					</svg>
				</button>
			</div>
			<table className={cn("w-full border-collapse", classNames.table)}>
				<thead>
					<tr className={classNames.head_row}>
						{daysOfWeek.map((day) => (
							<th
								key={day}
								className={cn(
									"text-muted-foreground rounded-md w-9 font-normal text-sm",
									classNames.head_cell
								)}
							>
								{day}
							</th>
						))}
					</tr>
				</thead>
				<tbody>{renderDays}</tbody>
			</table>
			{showTime && selectedDates && selectedDates.length > 0 && (
				<div className='mt-4 flex justify-around'>
					<div>
						<label>Hours</label>
						<input
							type='number'
							value={selectedDates[0].getHours()}
							onChange={(e) => handleTimeChange(e, "hours")}
							className='w-16 p-1 border rounded'
						/>
					</div>
					<div>
						<label>Minutes</label>

						<input
							type='number'
							value={selectedDates[0].getMinutes()}
							onChange={(e) => handleTimeChange(e, "minutes")}
							className='w-16 p-1 border rounded'
						/>
					</div>
				</div>
			)}
		</div>
	);
};

DayPicker.displayName = "DayPicker";

export { DayPicker };
