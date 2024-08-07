import * as React from "react";

export const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-4 w-4'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<polyline points='20 6 9 17 4 12' />
	</svg>
);
