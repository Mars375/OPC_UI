import * as React from "react";
import { DatePicker } from "@/main";

const App: React.FC = () => {
	return (
		<div className='flex h-screen items-center justify-around flex-col'>
			<DatePicker showOutsideDays={true} locale='fr-FR' />
		</div>
	);
};

export default App;
