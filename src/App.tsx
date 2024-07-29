import * as React from "react";
import { Button } from "@/components/ui/Button/Button";
import { useToast } from "@/utils/use-toast";

const App: React.FC = () => {
	const { toast } = useToast();

	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<Button onClick={() => toast({ title: "Hello World" })}>Click me</Button>
		</div>
	);
};

export default App;
