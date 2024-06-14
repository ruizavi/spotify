import type { FormEvent } from "react";

interface Props {
	changeQuery(key: string, value: string): void;
	handleFormData(key: string, value: unknown): void;
	data: Record<string, unknown>;
}

const Step0 = ({ changeQuery, handleFormData }: Props) => {
	const onSubmit = (e: FormEvent) => {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);

		formData.forEach((value, key) => handleFormData(key, value as unknown));

		changeQuery("step", "1");
	};

	return (
		<form onSubmit={onSubmit}>
			<label>
				<p className="font-circularSpBold text-white text-sm py-2">
					Email address
				</p>
				<input
					type="email"
					name="email"
					required
					className="w-full p-3 outline-none rounded-[4px] border border-gray-500 bg-base text-white"
				/>
			</label>
			<button type="submit" className="bg-background w-full rounded-full my-8">
				<p className="font-circularSpBold p-3">Next</p>
			</button>
		</form>
	);
};

export default Step0;
