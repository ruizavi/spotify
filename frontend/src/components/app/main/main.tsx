import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import type { album, artist } from "../../../lib/types";
import Layout from "../../layout";

const Main = () => {
	const token = useUser((s) => s.token);

	const [data, setdata] =
		useState<
			Record<"artist" | "album", Array<(album & { artist: artist }) | artist>>
		>();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetching = async () => {
			const response = await fetch(
				"http://localhost:3000/api/search?entity=artist,album",
				{ headers: { Authorization: `Auth ${token}` } },
			);

			if (!response.ok) return {};

			return await response.json();
		};

		setIsLoading(true);

		fetching()
			.then((data) => setdata(data))
			.finally(() => setIsLoading(false));
	}, []);

	console.log({ isLoading, data });

	return (
		<Layout>
			<main className="flex flex-wrap gap-4 p-8">
				{isLoading && null}
				{data &&
					[...(data?.album || []), ...(data?.artist || [])].map((a) => (
						<Link to="#" className="p-4 rounded-md hover:bg-black/50 block">
							<img
								src={a?.avatar || a?.cover}
								alt=""
								className="size-44 rounded-md"
							/>
							<h3 className="text-white font-circularSpTitleBold">{a.name}</h3>
							<h4 className="text-[#727272] font-circularSpBook text-xs">
								{a.artist_id ? a.artist.name : "Artist"}
							</h4>
						</Link>
					))}
			</main>
		</Layout>
	);
};

export default Main;
