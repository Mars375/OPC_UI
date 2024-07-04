import * as React from "react";
import { cn } from "@/utils/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/Button/Button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
	<nav
		role='navigation'
		aria-label='pagination'
		className={cn("mx-auto flex w-full justify-center", className)}
		{...props}
	/>
);
Pagination.displayName = "Pagination";

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

const PaginationItem = React.forwardRef<
	HTMLLIElement,
	React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
	<li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
	isActive?: boolean;
} & Pick<ButtonProps, "size"> &
	React.ComponentProps<"a">;

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

type PaginationPreviousProps = {
	icon?: React.ReactNode;
} & React.ComponentProps<typeof PaginationLink>;

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

type PaginationNextProps = {
	icon?: React.ReactNode;
} & React.ComponentProps<typeof PaginationLink>;

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

type PaginationEllipsisProps = {
	icon?: React.ReactNode;
} & React.ComponentProps<"span">;

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

type EntriesSelectorProps = {
	value: string;
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	options: { value: string; label: string }[];
} & React.ComponentProps<"select">;

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
