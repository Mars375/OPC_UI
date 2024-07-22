// Ajout d'une fonction pour obtenir les options de formatage basées sur le format
function getDateTimeFormatOptions(format: string): Intl.DateTimeFormatOptions {
	const options: Intl.DateTimeFormatOptions = {};
	switch (format) {
		case "DD/MM/YYYY":
			options.day = "2-digit";
			options.month = "2-digit";
			options.year = "numeric";
			break;
		case "MM/DD/YYYY":
			options.month = "2-digit";
			options.day = "2-digit";
			options.year = "numeric";
			break;
		case "YYYY/MM/DD":
			options.year = "numeric";
			options.month = "2-digit";
			options.day = "2-digit";
			break;
		case "HH:mm:ss":
			options.hour = "2-digit";
			options.minute = "2-digit";
			options.second = "2-digit";
			break;
		default:
			options.month = "2-digit";
			options.day = "2-digit";
			options.year = "numeric";
			break;
	}
	return options;
}

export const formatDate = (
	date: Date,
	format: string = "MM/DD/YYYY",
	locale: string = "en-US"
): string => {
	const options = getDateTimeFormatOptions(format);
	return new Intl.DateTimeFormat(locale, options).format(date);
};
