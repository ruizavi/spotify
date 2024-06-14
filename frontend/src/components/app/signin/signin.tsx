import { Link } from "react-router-dom";
import { Spotify } from "../../ui/icons";
import SignInForm from "./signin-form";

const Signin = () => {
	return (
		<main className="w-full h-full bg-gradient-to-b from-zinc-800 to-black grid place-content-center">
			<div className="bg-main w-[734px] p-8 rounded-md">
				<header>
					<Spotify className="fill-white mx-auto mb-8" />
					<h1 className="font-circularSpBold text-white text-3xl text-center">
						Log in to Spotify
					</h1>
				</header>
				<hr className="mx-8 my-10 border-zinc-700" />
				<SignInForm />
				<hr className="mx-8 my-10 border-zinc-700" />
				<p className="font-circularSpBook text-sm text-[#727272] text-center">
					Don't have an account?{" "}
					<Link to="/signup" className="text-white underline">
						Sign up for Spotify
					</Link>
				</p>
			</div>
		</main>
	);
};

export default Signin;
