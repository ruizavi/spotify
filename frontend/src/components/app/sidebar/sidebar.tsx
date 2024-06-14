import { Link } from "react-router-dom";
import { Home, Library, Search } from "../../ui/icons";
import Songs from "./song";

const Sidebar = () => {
	return (
		<aside id="sidebar" className="flex flex-col gap-4">
			<section className="bg-main rounded-md px-4 py-2">
				<ul className="[&>li]:my-4">
					<li className="group ">
						<Link className="flex gap-4 items-center" to="/app">
							<Home className="size-6 fill-foreground group-hover:fill-foreground-active stroke-none" />
							<p className="font-circularSpBold text-foreground group-hover:text-foreground-active">
								Home
							</p>
						</Link>
					</li>
					<li className="group ">
						<Link className="flex gap-4 items-center" to="/app/search">
							<Search className="size-6 fill-foreground group-hover:fill-foreground-active" />
							<p className="font-circularSpBold text-foreground group-hover:text-foreground-active">
								Search
							</p>
						</Link>
					</li>
				</ul>
			</section>
			<section className="bg-main rounded-md h-full">
				<header className="flex gap-4 py-4 px-6 items-center">
					<Library className="size-6 fill-foreground" />
					<p className="font-circularSpBold text-foreground">Your library</p>
				</header>
				<Songs />
			</section>
		</aside>
	);
};

export default Sidebar;
