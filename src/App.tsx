import * as React from "react";
import DemoDropdown from "../demos/DemoDropdown/DemoDropdown";
import DemoPopover from "../demos/DemoPopover/DemoPopover";
import DemoModal from "../demos/DemoModal/DemoModal";

const App: React.FC = () => {
	return (
		<div className='flex h-screen items-center justify-center'>
			<DemoModal />
		</div>
	);
};

export default App;
