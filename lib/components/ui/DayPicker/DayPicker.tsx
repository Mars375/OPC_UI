import * as React from "react";
import { cn } from "@/utils/utils";

const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

interface DayPickerProps {
	className?: string;
	classNames?: { [key: string]: string };
	showOutsideDays?: boolean;
	selectedDate: Date | null;
	onDateChange: (date: Date) => void;
}

const DayPicker: React.FC<DayPickerProps> = ({
	className,
	classNames = {},
	showOutsideDays = true,
	selectedDate,
	onDateChange,
}) => {
	const [currentDate, setCurrentDate] = React.useState(new Date());

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

	const handleDateClick = (day: number, monthOffset = 0) => {
		const newDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth() + monthOffset,
			day
		);
		setCurrentDate(newDate); // Change the current month to the new date's month
		onDateChange(newDate);
	};

	const renderDays = () => {
		const days = [];
		const today = new Date();

		// Days from the previous month
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

		// Days of the current month
		for (let day = 1; day <= daysInMonth; day++) {
			const isSelected =
				selectedDate &&
				selectedDate.getDate() === day &&
				selectedDate.getMonth() === currentDate.getMonth() &&
				selectedDate.getFullYear() === currentDate.getFullYear();
			const isToday =
				today.getDate() === day &&
				today.getMonth() === currentDate.getMonth() &&
				today.getFullYear() === currentDate.getFullYear();
			days.push(
				<td key={day} className={cn("p-2", classNames.cell)}>
					<button
						onClick={() => handleDateClick(day)}
						className={cn(
							"w-full h-full text-sm rounded-md",
							isSelected
								? classNames.day_selected
								: isToday
								? classNames.day_today
								: classNames.day
						)}
					>
						{day}
					</button>
				</td>
			);
		}

		// Days from the next month
		if (showOutsideDays) {
			const nextMonthDays = 42 - days.length; // 42 = 6 weeks * 7 days
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

		return days;
	};

	const renderWeeks = () => {
		const days = renderDays();
		const weeks = [];
		for (let i = 0; i < days.length; i += 7) {
			weeks.push(
				<tr key={i} className={classNames.row}>
					{days.slice(i, i + 7)}
				</tr>
			);
		}
		return weeks;
	};

	return (
		<div
			className={cn("p-3 bg-white text-black rounded-lg shadow-md", className)}
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
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<polyline points='15 18 9 12 15 6'></polyline>
					</svg>
				</button>
				<span className={cn(classNames.caption_label)}>
					{currentDate.toLocaleString("default", { month: "long" })}{" "}
					{currentDate.getFullYear()}
				</span>
				<button
					onClick={handleNextMonth}
					className={cn(classNames.nav_button, classNames.nav_button_next)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-4 w-4'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<polyline points='9 18 15 12 9 6'></polyline>
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
									"text-gray-500 rounded-md w-9 font-normal text-sm",
									classNames.head_cell
								)}
							>
								{day}
							</th>
						))}
					</tr>
				</thead>
				<tbody>{renderWeeks()}</tbody>
			</table>
		</div>
	);
};

DayPicker.displayName = "DayPicker";

export { DayPicker };
