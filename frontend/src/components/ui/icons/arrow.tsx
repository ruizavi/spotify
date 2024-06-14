import type { SVGProps } from "react";

const Arrow = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			data-encore-id="icon"
			role="img"
			aria-hidden="true"
			viewBox="0 0 24 24"
			{...props}
		>
			<path d="M15.957 2.793a1 1 0 0 1 0 1.414L8.164 12l7.793 7.793a1 1 0 1 1-1.414 1.414L5.336 12l9.207-9.207a1 1 0 0 1 1.414 0z" />
		</svg>
	);
};

export default Arrow;
