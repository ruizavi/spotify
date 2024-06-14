import { type PropsWithChildren } from "react";
import Control from "./app/control/control";
import Sidebar from "./app/sidebar/sidebar";

function Layout({ children }: PropsWithChildren) {
	return (
		<div className="w-full h-full bg-[#000] layout grid gap-4 p-4">
			<Sidebar />
			<main id="main" className="bg-base rounded-md overflow-hidden">
				{children}
			</main>
			<div id="queue" className="bg-base rounded-md">
				queue
			</div>
			<Control />
		</div>
	);
}

export default Layout;
