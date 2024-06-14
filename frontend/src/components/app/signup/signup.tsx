import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Spotify } from "../../ui/icons";
import Step0 from "./step-0";
import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import StepCounter from "./step-counter";

const RenderStep = ({
	step = "0",
	changeQuery,
	data,
	handleFormData,
}: {
	step: string;
	changeQuery(key: string, value: string): void;
	handleFormData(key: string, value: string): void;
	data: Record<string, unknown>;
}) => {
	if (step === "0")
		return (
			<Step0
				changeQuery={changeQuery}
				data={data}
				handleFormData={handleFormData}
			/>
		);
	if (step === "1")
		return (
			<Step1
				changeQuery={changeQuery}
				data={data}
				handleFormData={handleFormData}
			/>
		);
	if (step === "2")
		return (
			<Step2
				changeQuery={changeQuery}
				data={data}
				handleFormData={handleFormData}
			/>
		);
	if (step === "3")
		return (
			<Step3
				changeQuery={changeQuery}
				data={data}
				handleFormData={handleFormData}
			/>
		);

	return null;
};

const Signup = () => {
	const [searchParams, setSearchParams] = useSearchParams({ step: "0" });
	const [formData, setFormData] = useState<Record<string, unknown>>({});

	const changeQuery = (key: string, value: string) =>
		setSearchParams({ [key]: value });

	const handleFormData = (key: string, value: unknown) => {
		setFormData((prev) => ({ ...prev, [key]: value }));
	};

	const step = searchParams.get("step") ?? "0";

	return (
		<main className="w-full h-full bg-main flex items-center flex-col">
			<header className="p-8 self-start">
				<Spotify className="fill-white" />
			</header>
			<section className="w-[328px] px-8 box-content flex flex-col items-center">
				<header className="pb-8">
					{step === "0" ? (
						<h1 className="font-circularSpTitleBold text-white text-5xl box-border leading-tight">
							Sign up to start listening
						</h1>
					) : (
						<StepCounter step={step} changeQuery={changeQuery} />
					)}
				</header>
				<div className="w-80">
					<RenderStep
						step={step || "0"}
						changeQuery={changeQuery}
						data={formData}
						handleFormData={handleFormData}
					/>
				</div>
			</section>
		</main>
	);
};

export default Signup;
