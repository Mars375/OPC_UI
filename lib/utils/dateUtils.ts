export const formatDate = (
	date: Date,
	format: string = "MM/DD/YYYY"
): string => {
	const pad = (n: number) => (n < 10 ? `0${n}` : n);

	const day = pad(date.getDate());
	const month = pad(date.getMonth() + 1);
	const year = date.getFullYear();

	switch (format) {
		case "MM/DD/YYYY":
			return `${month}/${day}/${year}`;
		case "DD/MM/YYYY":
			return `${day}/${month}/${year}`;
		case "YYYY/MM/DD":
			return `${year}/${month}/${day}`;
		default:
			return `${month}/${day}/${year}`;
	}
};
