import * as React from "react";
import DemoDropdown from "../demos/DemoDropdown/DemoDropdown";
import DemoPopover from "../demos/DemoPopover/DemoPopover";

const App: React.FC = () => {
	return (
		<div className='flex h-screen items-center justify-center'>
			<DemoDropdown />
		</div>
	);
};

export default App;
