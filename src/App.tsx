import * as React from "react";
import DatePicker from "../lib/components/ui/DatePicker/DatePicker";

const App: React.FC = () => {
	return (
		<div className='flex h-screen items-center justify-center'>
			<DatePicker />
		</div>
	);
};

export default App;
