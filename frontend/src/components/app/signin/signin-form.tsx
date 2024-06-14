import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import schematas from "../../../lib/schema";
import type { user } from "../../../lib/types";
import { NotVisiblePassword, VisiblePassword } from "../../ui/icons";

const SignInForm = () => {
	const [isVisible, setIsNotVisible] = useState(false);
	const [error, setError] = useState<{ error: {}; message: string } | null>(
		null,
	);

	const signin = useUser((state) => state.signin);

	const navigate = useNavigate();

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);

		const record: Record<string, string> = {};

		formData.forEach((value, key) => {
			record[key] = value.toString();
		});

		const { success, data: signInData } =
			schematas.SigninSchema.safeParse(record);

		if (!success) return;

		const response = await fetch("http://localhost:3000/api/auth/signin", {
			method: "POST",
			body: JSON.stringify(signInData),
			headers: { "Content-Type": "application/json" },
		});

		const data = await response.json();

		if (data.error) {
			setError({ error: {}, message: "Password not match" });

			return;
		}

		signin(data.user, data.token);

		navigate("/app");
	};
	return (
		<form className="w-80 mx-auto" onSubmit={onSubmit}>
			<label>
				<p className="font-circularSpBold text-white text-sm py-2">Email</p>
				<input
					type="email"
					name="email"
					required
					className="w-full p-3 outline-none rounded-[4px] border border-gray-500 bg-main text-white"
				/>
			</label>
			<div>
				<label htmlFor="password">
					<p className="font-circularSpBold text-white text-sm py-2">
						Password
					</p>
				</label>
				<input
					type={isVisible ? "text" : "password"}
					name="password"
					required
					id="password"
					className="w-full p-3 outline-none rounded-[4px] border border-gray-500 bg-main text-white"
				/>
				<button
					type="button"
					onClick={() => setIsNotVisible(!isVisible)}
					className="absolute -ml-10 mt-3"
				>
					{isVisible ? (
						<VisiblePassword className="size-6 fill-[#727272] hover:fill-white" />
					) : (
						<NotVisiblePassword className="size-6 fill-[#727272] hover:fill-white" />
					)}
				</button>
			</div>
			{error && <p className="text-red-500">{error.message}</p>}
			<button type="submit" className="bg-background w-full rounded-full my-8">
				<p className="font-circularSpBold p-3">Sign In</p>
			</button>
		</form>
	);
};

export default SignInForm;
