import { Arrow } from "../../ui/icons";

const StepCounter = ({
	step = "1",
	changeQuery,
}: { step: string; changeQuery(key: string, value: string): void }) => {
	return (
		<div className="w-[438px]">
			<div className="w-full bg-[#727272] mx-auto" style={{ blockSize: 2 }}>
				<div
					style={{ blockSize: 2, inlineSize: `${33.33 * Number(step)}%` }}
					className="bg-background transition-all"
				/>
			</div>
			<div className="flex gap-4 my-4 mx-2">
				<button
					type="button"
					onClick={() => changeQuery("step", String(Number(step) - 1))}
				>
					<Arrow className="fill-[#727272] size-6" />
				</button>
				<div>
					<p className="text-[#727272] font-circularSpBook">Step {step} of 3</p>
					<h1 className="font-circularSpBold text-white">
						{step === "1" && "Create a password"}
						{step === "2" && "Tell us about yourself"}
						{step === "3" && "Terms & Conditions"}
					</h1>
				</div>
			</div>
		</div>
	);
};

export default StepCounter;
