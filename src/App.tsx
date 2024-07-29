import * as React from "react";
import { Combobox } from "../lib/components/ui/Combobox/Combobox";

const options = [
	{ value: "Sales", label: "Sales" },
	{ value: "Marketing", label: "Marketing" },
	{ value: "Engineering", label: "Engineering" },
	{ value: "Human Resources", label: "Human Resources" },
	{ value: "Legal", label: "Legal" },
];

const App: React.FC = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<Combobox options={options} includeInput={true} />
		</div>
	);
};

export default App;
