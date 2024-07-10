import * as React from "react";
import {
	Modal,
	ModalHeader,
	ModalFooter,
	ModalTitle,
	ModalDescription,
	Button,
} from "../../lib/main";

const DemoModal: React.FC = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleOpen = () => setIsOpen(true);
	const handleClose = (
		event: React.MouseEvent | React.KeyboardEvent,
		reason: string
	) => {
		console.log(`Modal closed due to: ${reason}`);
		setIsOpen(false);
	};

	return (
		<div className='flex flex-col items-center justify-center h-screen space-y-4'>
			<Button variant='default' onClick={handleOpen}>
				Ouvrir le modal
			</Button>
			<Modal open={isOpen} onClose={handleClose}>
				<ModalHeader>
					<ModalTitle>Titre du Modal</ModalTitle>
					<ModalDescription>Ceci est la description du modal.</ModalDescription>
				</ModalHeader>
				<ModalFooter>
					<Button
						variant='outline'
						onClick={(event) => handleClose(event, "closeButtonClick")}
					>
						Fermer
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default DemoModal;
