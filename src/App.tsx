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
	const [selectedValue, setSelectedValue] = React.useState("");
	const [error, setError] = React.useState("");

	const handleComboboxChange = (value: string) => {
		setSelectedValue(value);
		if (value === "") {
			setError("Please select an option.");
		} else {
			setError("");
		}
	};

	console.log(selectedValue);

	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<label htmlFor='department-combobox'>Department:</label>
			<Combobox
				options={options}
				includeInput={true}
				id='department-combobox'
				name='department'
				onChange={handleComboboxChange}
				error={error}
				value={selectedValue}
				className='w-full'
			/>
		</div>
	);
};

export default App;
