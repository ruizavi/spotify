import { type FormEvent, useState } from "react";
import {
	IsNotValid,
	IsValid,
	NotVisiblePassword,
	VisiblePassword,
} from "../../ui/icons";

const ONE_LETTER = /[a-zA-Z]+/;
const SPECIAL_CHARACTER = /[\d#$%!]+/;
const TEN_LENGHT = /.{10,}/;

interface Props {
	changeQuery(key: string, value: string): void;
	handleFormData(key: string, value: unknown): void;
	data: Record<string, unknown>;
}

const Step1 = ({ changeQuery, handleFormData }: Props) => {
	const [isVisible, setIsNotVisible] = useState({
		password: false,
		confirmPassword: false,
	});

	const [validatePassword, setValidatePassword] = useState({
		oneLetter: false,
		specialCharacter: false,
		tenLenght: false,
		matchPass: false,
	});

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();

		const form = new FormData(e.target as HTMLFormElement);

		const values: Record<string, string> = {};

		// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
		form.forEach((value, key) => (values[key] = value.toString()));

		setValidatePassword(() => {
			const saved = {
				oneLetter: false,
				specialCharacter: false,
				tenLenght: false,
				matchPass: false,
			};

			if (ONE_LETTER.test(values.password)) saved.oneLetter = true;
			if (SPECIAL_CHARACTER.test(values.password))
				saved.specialCharacter = true;
			if (TEN_LENGHT.test(values.password)) saved.tenLenght = true;
			if (values.password === values.confirm_password) saved.matchPass = true;

			return saved;
		});

		if (!Object.values(validatePassword).every((result) => result === true))
			return;

		for (const [key, value] of Object.entries(values)) {
			handleFormData(key, value);
		}

		changeQuery("step", "2");
	};

	return (
		<form onSubmit={onSubmit}>
			<div>
				<label htmlFor="password">
					<p className="font-circularSpBold text-white text-sm py-2">
						Password
					</p>
				</label>
				<input
					type={isVisible.password ? "text" : "password"}
					name="password"
					required
					id="password"
					className="w-full p-3 outline-none rounded-[4px] border border-gray-500 bg-base text-white"
				/>
				<button
					type="button"
					onClick={() =>
						setIsNotVisible({ ...isVisible, password: !isVisible.password })
					}
					className="absolute -ml-10 mt-3"
				>
					{isVisible.password ? (
						<VisiblePassword className="size-6 fill-[#727272] hover:fill-white" />
					) : (
						<NotVisiblePassword className="size-6 fill-[#727272] hover:fill-white" />
					)}
				</button>
			</div>
			<div className="my-4">
				<label htmlFor="password">
					<p className="font-circularSpBold text-white text-sm py-2">
						Confirm Password
					</p>
				</label>
				<input
					type={isVisible.confirmPassword ? "text" : "password"}
					name="confirm_password"
					id="password"
					required
					className="w-full p-3 outline-none rounded-[4px] border border-gray-500 bg-base text-white"
				/>
				<button
					type="button"
					onClick={() =>
						setIsNotVisible({
							...isVisible,
							confirmPassword: !isVisible.confirmPassword,
						})
					}
					className="absolute -ml-10 mt-3"
				>
					{isVisible.confirmPassword ? (
						<VisiblePassword className="size-6 fill-[#727272] hover:fill-white" />
					) : (
						<NotVisiblePassword className="size-6 fill-[#727272] hover:fill-white" />
					)}
				</button>
			</div>
			<ul className="text-[#727272] [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:text-sm">
				<li>
					<span>
						{validatePassword.oneLetter ? (
							<IsValid className="fill-background size-3" />
						) : (
							<IsNotValid />
						)}
					</span>
					1 letter
				</li>
				<li>
					<span>
						{validatePassword.specialCharacter ? (
							<IsValid className="fill-background size-3" />
						) : (
							<IsNotValid />
						)}
					</span>
					1 number or special character (example: # ? ! &)
				</li>
				<li>
					<span>
						{validatePassword.tenLenght ? (
							<IsValid className="fill-background size-3" />
						) : (
							<IsNotValid />
						)}
					</span>
					10 characters
				</li>
				<li>
					<span>
						{validatePassword.matchPass ? (
							<IsValid className="fill-background size-3" />
						) : (
							<IsNotValid />
						)}
					</span>
					Match password
				</li>
			</ul>
			<button type="submit" className="bg-background w-full rounded-full my-8">
				<p className="font-circularSpBold p-3">Next</p>
			</button>
		</form>
	);
};

export default Step1;
