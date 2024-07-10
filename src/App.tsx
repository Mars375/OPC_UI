import * as React from "react";
import DemoDropdown from "../demos/DemoDropdown/DemoDropdown";
import DemoPopover from "../demos/DemoPopover/DemoPopover";
import DemoModal from "../demos/DemoModal/DemoModal";
import DatePicker from "../lib/components/ui/DatePicker/DatePicker";

const App: React.FC = () => {
	return (
		<div className='flex h-screen items-center justify-center'>
			<DatePicker />
		</div>
	);
};

export default App;
