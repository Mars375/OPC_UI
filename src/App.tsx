"use client";

import * as React from "react";
import { Calendar } from "../lib/components/Calendar/Calendar";

const App: React.FC = () => {
	const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

	const handleDateChange = (date: Date) => {
		setSelectedDate(date);
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
			<Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
		</div>
	);
};

export default App;
