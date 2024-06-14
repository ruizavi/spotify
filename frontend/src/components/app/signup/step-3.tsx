import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import schematas from "../../../lib/schema";

interface Props {
	changeQuery(key: string, value: string): void;
	handleFormData(key: string, value: unknown): void;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	data: Record<string, any>;
}

const Step3 = ({ data }: Props) => {
	const navigate = useNavigate();
	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);

		const dataOfStep: Record<string, unknown> = {};

		formData.forEach((value, key) => {
			dataOfStep[key] = value as unknown;
		});

		const { success, data: validateData } = schematas.SignupSchema.safeParse({
			...data,
			...dataOfStep,
			birthday: `${data.birthday.year}-${data.birthday.month}-${data.birthday.day}T00:00:00Z`,
		});

		if (!success) return;

		const response = await fetch("http://localhost:3000/api/auth/signup", {
			method: "POST",
			body: JSON.stringify(validateData),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) return;

		navigate("/signin");
	};

	return (
		<form onSubmit={onSubmit}>
			<label className="flex gap-4 bg-gray-500 bg-opacity-10 p-4 rounded-md">
				<input
					type="checkbox"
					name="marketing"
					value="true"
					className="p-3 outline-none rounded-[4px] border border-gray-500 bg-base text-white accent-background "
				/>
				<p className="font-circularSpBold text-white text-sm py-2">
					I would prefer not to receive marketing messages from Spotify
				</p>
			</label>
			<label className="flex gap-4 bg-gray-500 bg-opacity-10 p-4 rounded-md my-3">
				<input
					type="checkbox"
					value="true"
					name="share_content"
					className="p-3 outline-none rounded-[4px] border border-gray-500 bg-base text-white accent-background "
				/>
				<p className="font-circularSpBold text-white text-sm py-2">
					Share my registration data with Spotify's content providers for
					marketing purposes.
				</p>
			</label>
			<p className="text-white text-sm">
				By clicking on sign-up, you agree to Spotify's{" "}
				<span className="text-background underline">
					Terms and Conditions of Use
				</span>
				.
			</p>
			<p className="my-2 text-white text-sm">
				To learn more about how Spotify collects, uses, shares and protects your
				personal data, please see
				<span className="text-background underline">
					Spotify's Privacy Policy
				</span>
				.
			</p>
			<button type="submit" className="bg-background w-full rounded-full my-8">
				<p className="font-circularSpBold p-3">Sign Up!</p>
			</button>
		</form>
	);
};

export default Step3;
