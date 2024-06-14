import type { FormEvent } from "react";

interface Props {
	changeQuery(key: string, value: string): void;
	handleFormData(key: string, value: unknown): void;
	data: Record<string, unknown>;
}

const Step2 = ({ changeQuery, handleFormData }: Props) => {
	const onSubmit = (e: FormEvent) => {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		const data: Record<string, any> = { birthday: {} };

		formData.forEach((value, key) => {
			if (["day", "month", "year"].some((k) => k === key)) {
				data.birthday[key] = value;

				return;
			}

			data[key] = value;
		});

		for (const [key, value] of Object.entries(data)) {
			handleFormData(key, value);
		}

		changeQuery("step", "3");
	};

	return (
		<form onSubmit={onSubmit}>
			<label>
				<p className="font-circularSpBold text-white text-sm py-2">
					Name
					<span className="font-circularSpBook text-sm block text-[#727272]">
						This name will appear on your profile
					</span>
				</p>
				<input
					type="text"
					name="username"
					required
					className="w-full p-3 outline-none rounded-[4px] border border-gray-500 bg-base text-white"
				/>
			</label>

			<label>
				<p className="font-circularSpBold text-white text-sm py-2">
					Date of birth
					<span className="font-circularSpBook text-sm block text-[#727272]">
						Why do we need your date of birth?
					</span>
				</p>
				<div className="flex gap-2">
					<input
						type="text"
						name="day"
						required
						placeholder="dd"
						maxLength={2}
						className="w-[30%] p-3 outline-none rounded-[4px] border border-gray-500 bg-base text-white"
					/>
					<select
						required
						name="month"
						className="w-full p-3 outline-none rounded-[4px] border border-gray-500 bg-base text-white"
					>
						<option value="" disabled>
							Month
						</option>
						<option value="01">January</option>
						<option value="02">February</option>
						<option value="03">March</option>
						<option value="04">April</option>
						<option value="05">May</option>
						<option value="06">June</option>
						<option value="07">July</option>
						<option value="08">August</option>
						<option value="09">September</option>
						<option value="10">October</option>
						<option value="11">November</option>
						<option value="12">December</option>
					</select>
					<input
						type="text"
						name="year"
						maxLength={4}
						required
						placeholder="yyyy"
						className="w-[30%] p-3 outline-none rounded-[4px] border border-gray-500 bg-base text-white"
					/>
				</div>
			</label>

			<div>
				<p className="font-circularSpBold text-white text-sm py-2">
					Gender
					<span className="font-circularSpBook text-sm block text-[#727272]">
						We use your gender to help personalize our content recommendations
						and ads for you.
					</span>
				</p>
				<div className="flex flex-wrap gap-4">
					<label className="flex gap-2 text-white">
						<input
							required
							type="radio"
							name="gender"
							className="bg-none border-none"
							value="male"
						/>
						<p>Male</p>
					</label>
					<label className="flex gap-2 text-white">
						<input
							type="radio"
							name="gender"
							className="bg-none border-none"
							value="woman"
						/>
						<p>Woman</p>
					</label>
					<label className="flex gap-2 text-white">
						<input
							type="radio"
							name="gender"
							className="bg-none border-none"
							value="non-binary"
						/>
						<p>Non-Binary</p>
					</label>
					<label className="flex gap-2 text-white">
						<input
							type="radio"
							name="gender"
							className="bg-none border-none"
							value="something-else"
						/>
						<p>Something Else</p>
					</label>
					<label className="flex gap-2 text-white">
						<input
							type="radio"
							name="gender"
							className="bg-none border-none"
							value="not-say"
						/>
						<p>Prefer not to say</p>
					</label>
				</div>
			</div>

			<button type="submit" className="bg-background w-full rounded-full my-8">
				<p className="font-circularSpBold p-3">Next</p>
			</button>
		</form>
	);
};

export default Step2;
