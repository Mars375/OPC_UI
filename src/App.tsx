import * as React from "react";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuCheckboxItem,
} from "@/components/ui/DropdownMenu/DropdownMenu"; // Assurez-vous que le chemin d'importation est correct

const App: React.FC = () => {
	const [notificationSetting, setNotificationSetting] =
		React.useState("enabled");
	const [darkMode, setDarkMode] = React.useState(true);

	return (
		<div className='flex h-screen items-center justify-center'>
			<DropdownMenu>
				<DropdownMenuTrigger className='px-4 py-2 text-white bg-blue-500 rounded-md'>
					Options
				</DropdownMenuTrigger>
				<DropdownMenuContent sideOffset={5}>
					<DropdownMenuLabel className='text-gray-900'>
						Paramètres
					</DropdownMenuLabel>
					<DropdownMenuItem onSelect={() => alert("Profil sélectionné")}>
						Profil
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuLabel className='text-gray-900'>
						Notifications
					</DropdownMenuLabel>
					<DropdownMenuRadioGroup
						value={notificationSetting}
						onValueChange={setNotificationSetting}
					>
						<DropdownMenuRadioItem value='enabled'>
							Activées
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value='disabled'>
							Désactivées
						</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
					<DropdownMenuSeparator />
					<DropdownMenuLabel className='text-gray-900'>
						Apparence
					</DropdownMenuLabel>
					<DropdownMenuCheckboxItem
						checked={darkMode}
						onCheckedChange={(checked) => setDarkMode(checked === true)}
					>
						Mode Sombre
					</DropdownMenuCheckboxItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem onSelect={() => alert("Déconnexion sélectionnée")}>
						Déconnexion
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default App;
