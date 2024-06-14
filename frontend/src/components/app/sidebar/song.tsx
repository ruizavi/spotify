import { Link } from "react-router-dom";
import useLibrary from "../../../hooks/useLibrary";
import type { like_entity } from "../../../lib/types";
import LikedSong from "../../ui/icons/liked-songs-64.png";

const Songs = () => {
	const { data, isLoading } = useLibrary<{ song: Array<like_entity> }>("song");

	return (
		<Link
			to="/app/collection/tracks"
			className="flex gap-4 mx-4 hover:bg-zinc-700 hover:bg-opacity-15 p-2 rounded-md"
		>
			<img src={LikedSong} alt="Liked song's" className="size-12 rounded-sm" />
			<div className="text-white font-circularSpBold">
				<h6>Liked Songs</h6>
				<p className="text-foreground text-sm font-circularSpBook">
					Playlist • {isLoading && "..."} {data?.song?.length || 0} songs
				</p>
			</div>
		</Link>
	);
};

export default Songs;
