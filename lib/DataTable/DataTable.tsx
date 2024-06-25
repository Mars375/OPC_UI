import type { ReactNode } from "react";

interface DataTableProps {
	children: ReactNode;
}

export const DataTable = ({ children }: DataTableProps): ReactNode => {
	return <button className='bg-red-900'>{children}</button>;
};
