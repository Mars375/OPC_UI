/**
 * Gets the formatting options based on the given format.
 * @param {string} format - The desired date/time format.
 * @returns {Intl.DateTimeFormatOptions} - The formatting options for Intl.DateTimeFormat.
 */
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

/**
 * Formats a date according to the specified format and locale.
 * @param {Date} date - The date to format.
 * @param {string} [format="MM/DD/YYYY"] - The desired date format.
 * @param {string} [locale="en-US"] - The locale to use for formatting.
 * @returns {string} - The formatted date.
 */
export const formatDate = (
	date: Date,
	format: string = "MM/DD/YYYY",
	locale: string = "en-US"
): string => {
	const options = getDateTimeFormatOptions(format);
	return new Intl.DateTimeFormat(locale, options).format(date);
};
