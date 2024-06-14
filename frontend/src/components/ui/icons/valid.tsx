import type { SVGProps } from "react";

const IsValid = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-encore-id="icon"
		role="img"
		aria-hidden="true"
		data-testid="password_requirement_one_number_or_special_character-true"
		viewBox="0 0 16 16"
		{...props}
	>
		<path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z" />
	</svg>
);

const IsNotValid = (props: SVGProps<SVGSVGElement>) => (
	<svg
		aria-hidden="true"
		width="12"
		height="12"
		data-testid="password_requirement_ten_characters-false"
		{...props}
	>
		<ellipse
			cx="6"
			cy="6"
			rx="5.5"
			ry="5.5"
			stroke="#A7A7A7"
			stroke-width="1"
			fill="none"
		/>
	</svg>
);

export { IsNotValid, IsValid };
