import * as React from "react";
import { cn } from "@/utils/utils";
import { ButtonProps, buttonVariants } from "@/main";

/**
 * Pagination component.
 * Renders a navigation element for pagination.
 * @param {Object} props - Properties for the Pagination component.
 * @returns {JSX.Element} - JSX element for the pagination.
 */
const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
	<nav
		role='navigation'
		aria-label='pagination'
		className={cn("mx-auto flex w-full justify-center", className)}
		{...props}
	/>
);
Pagination.displayName = "Pagination";

/**
 * PaginationContent component.
 * Renders the content of the pagination as a list.
 * @param {Object} props - Properties for the PaginationContent component.
 * @returns {JSX.Element} - JSX element for the pagination content.
 */
const PaginationContent = React.forwardRef<
	HTMLUListElement,
	React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
	<ul
		ref={ref}
		className={cn("flex flex-row items-center gap-1", className)}
		{...props}
	/>
));
PaginationContent.displayName = "PaginationContent";

/**
 * PaginationItem component.
 * Renders an item in the pagination list.
 * @param {Object} props - Properties for the PaginationItem component.
 * @returns {JSX.Element} - JSX element for the pagination item.
 */
const PaginationItem = React.forwardRef<
	HTMLLIElement,
	React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
	<li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

/**
 * Props for the PaginationLink component.
 * @property {boolean} [isActive] - Whether the link is active.
 * @property {string} [size] - Size of the link.
 */
type PaginationLinkProps = {
	isActive?: boolean;
} & Pick<ButtonProps, "size"> &
	React.ComponentProps<"a">;

/**
 * PaginationLink component.
 * Renders a link in the pagination.
 * @param {PaginationLinkProps} props - Properties for the PaginationLink component.
 * @returns {JSX.Element} - JSX element for the pagination link.
 */
const PaginationLink = ({
	className,
	isActive,
	size = "icon",
	...props
}: PaginationLinkProps) => (
	<a
		aria-current={isActive ? "page" : undefined}
		className={cn(
			buttonVariants({
				variant: isActive ? "outline" : "ghost",
				size,
			}),
			className
		)}
		{...props}
	/>
);
PaginationLink.displayName = "PaginationLink";

/**
 * Props for the PaginationPrevious component.
 * @property {React.ReactNode} [icon] - Icon for the previous button.
 */
type PaginationPreviousProps = {
	icon?: React.ReactNode;
} & React.ComponentProps<typeof PaginationLink>;

/**
 * PaginationPrevious component.
 * Renders a button to go to the previous page.
 * @param {PaginationPreviousProps} props - Properties for the PaginationPrevious component.
 * @returns {JSX.Element} - JSX element for the previous button.
 */
const PaginationPrevious = ({
	className,
	icon,
	...props
}: PaginationPreviousProps) => (
	<PaginationLink
		aria-label='Go to previous page'
		size='default'
		className={cn("gap-1 pl-2.5", className)}
		{...props}
	>
		{icon || <span>Previous</span>}
	</PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

/**
 * Props for the PaginationNext component.
 * @property {React.ReactNode} [icon] - Icon for the next button.
 */
type PaginationNextProps = {
	icon?: React.ReactNode;
} & React.ComponentProps<typeof PaginationLink>;

/**
 * PaginationNext component.
 * Renders a button to go to the next page.
 * @param {PaginationNextProps} props - Properties for the PaginationNext component.
 * @returns {JSX.Element} - JSX element for the next button.
 */
const PaginationNext = ({ className, icon, ...props }: PaginationNextProps) => (
	<PaginationLink
		aria-label='Go to next page'
		size='default'
		className={cn("gap-1 pr-2.5", className)}
		{...props}
	>
		{icon || <span>Next</span>}
	</PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

/**
 * Props for the PaginationEllipsis component.
 * @property {React.ReactNode} [icon] - Icon for the ellipsis.
 */
type PaginationEllipsisProps = {
	icon?: React.ReactNode;
} & React.ComponentProps<"span">;

/**
 * PaginationEllipsis component.
 * Renders an ellipsis to indicate more pages.
 * @param {PaginationEllipsisProps} props - Properties for the PaginationEllipsis component.
 * @returns {JSX.Element} - JSX element for the ellipsis.
 */
const PaginationEllipsis = ({
	className,
	icon,
	...props
}: PaginationEllipsisProps) => (
	<span
		aria-hidden
		className={cn("flex h-9 w-9 items-center justify-center", className)}
		{...props}
	>
		{icon || <span>...</span>}
		<span className='sr-only'>More pages</span>
	</span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

/**
 * Props for the EntriesSelector component.
 * @property {string} value - Selected value.
 * @property {(event: React.ChangeEvent<HTMLSelectElement>) => void} onChange - Change handler.
 * @property {{ value: string; label: string }[]} options - Options for the selector.
 */
type EntriesSelectorProps = {
	value: string;
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	options: { value: string; label: string }[];
} & React.ComponentProps<"select">;

/**
 * EntriesSelector component.
 * Renders a selector for the number of entries per page.
 * @param {EntriesSelectorProps} props - Properties for the EntriesSelector component.
 * @returns {JSX.Element} - JSX element for the entries selector.
 */
const EntriesSelector = ({
	value,
	onChange,
	className,
	options,
	...props
}: EntriesSelectorProps) => (
	<select
		value={value}
		onChange={onChange}
		className={cn("border p-2 rounded-md", className)}
		{...props}
	>
		{options.map((option) => (
			<option key={option.value} value={option.value}>
				{option.label}
			</option>
		))}
	</select>
);
EntriesSelector.displayName = "EntriesSelector";

export {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
	EntriesSelector,
};
