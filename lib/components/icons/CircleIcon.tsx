import * as React from "react";

export const CircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-2 w-2 fill-current'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<circle cx='12' cy='12' r='10' />
	</svg>
);
