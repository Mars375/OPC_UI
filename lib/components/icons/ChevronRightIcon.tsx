import * as React from "react";

export const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
	props
) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='ml-auto h-4 w-4'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<polyline points='9 18 15 12 9 6' />
	</svg>
);
