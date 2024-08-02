import * as React from "react";

import { cn } from "@/utils/utils";

/**
 * Table component.
 * Renders a table with a wrapper for overflow handling.
 * @param {Object} props - Properties for the Table component.
 * @param {React.Ref<HTMLTableElement>} ref - Reference to the table element.
 * @returns {JSX.Element} - JSX element for the table.
 */
const Table = React.forwardRef<
	HTMLTableElement,
	React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
	<div className='relative w-full overflow-auto'>
		<table
			ref={ref}
			className={cn("w-full caption-bottom text-sm", className)}
			{...props}
		/>
	</div>
));
Table.displayName = "Table";

/**
 * TableHeader component.
 * Renders the header section of the table.
 * @param {Object} props - Properties for the TableHeader component.
 * @param {React.Ref<HTMLTableSectionElement>} ref - Reference to the header element.
 * @returns {JSX.Element} - JSX element for the table header.
 */
const TableHeader = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

/**
 * TableBody component.
 * Renders the body section of the table.
 * @param {Object} props - Properties for the TableBody component.
 * @param {React.Ref<HTMLTableSectionElement>} ref - Reference to the body element.
 * @returns {JSX.Element} - JSX element for the table body.
 */
const TableBody = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tbody
		ref={ref}
		className={cn("[&_tr:last-child]:border-0", className)}
		{...props}
	/>
));
TableBody.displayName = "TableBody";

/**
 * TableFooter component.
 * Renders the footer section of the table.
 * @param {Object} props - Properties for the TableFooter component.
 * @param {React.Ref<HTMLTableSectionElement>} ref - Reference to the footer element.
 * @returns {JSX.Element} - JSX element for the table footer.
 */
const TableFooter = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tfoot
		ref={ref}
		className={cn(
			"border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
			className
		)}
		{...props}
	/>
));
TableFooter.displayName = "TableFooter";

/**
 * TableRow component.
 * Renders a row in the table.
 * @param {Object} props - Properties for the TableRow component.
 * @param {React.Ref<HTMLTableRowElement>} ref - Reference to the row element.
 * @returns {JSX.Element} - JSX element for the table row.
 */
const TableRow = React.forwardRef<
	HTMLTableRowElement,
	React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
	<tr
		ref={ref}
		className={cn(
			"border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
			className
		)}
		{...props}
	/>
));
TableRow.displayName = "TableRow";

/**
 * TableHead component.
 * Renders a header cell in the table.
 * @param {Object} props - Properties for the TableHead component.
 * @param {React.Ref<HTMLTableCellElement>} ref - Reference to the header cell element.
 * @returns {JSX.Element} - JSX element for the table header cell.
 */
const TableHead = React.forwardRef<
	HTMLTableCellElement,
	React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<th
		ref={ref}
		className={cn(
			"h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
			className
		)}
		{...props}
	/>
));
TableHead.displayName = "TableHead";

/**
 * TableCell component.
 * Renders a cell in the table.
 * @param {Object} props - Properties for the TableCell component.
 * @param {React.Ref<HTMLTableCellElement>} ref - Reference to the cell element.
 * @returns {JSX.Element} - JSX element for the table cell.
 */
const TableCell = React.forwardRef<
	HTMLTableCellElement,
	React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<td
		ref={ref}
		className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
		{...props}
	/>
));
TableCell.displayName = "TableCell";

/**
 * TableCaption component.
 * Renders a caption for the table.
 * @param {Object} props - Properties for the TableCaption component.
 * @param {React.Ref<HTMLTableCaptionElement>} ref - Reference to the caption element.
 * @returns {JSX.Element} - JSX element for the table caption.
 */
const TableCaption = React.forwardRef<
	HTMLTableCaptionElement,
	React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
	<caption
		ref={ref}
		className={cn("mt-4 text-sm text-muted-foreground", className)}
		{...props}
	/>
));
TableCaption.displayName = "TableCaption";

export {
	Table,
	TableHeader,
	TableBody,
	TableFooter,
	TableHead,
	TableRow,
	TableCell,
	TableCaption,
};
