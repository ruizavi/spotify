import { useEffect, useState } from "react";
import useControl from "../../../hooks/useControl";
import useLibrary from "../../../hooks/useLibrary";
import useUser from "../../../hooks/useUser";
import type { album, artist, like_entity, song } from "../../../lib/types";
import Layout from "../../layout";
import { Add, IsLiked, Pause, Play } from "../../ui/icons";
import LikedSong from "../../ui/icons/liked-songs-64.png";

const DEFAULT_USER_IMAGE =
	"https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg";

function fancyTimeFormat(duration: number) {
	// Hours, minutes and seconds
	const hrs = ~~(duration / 3600);
	const mins = ~~((duration % 3600) / 60);
	const secs = ~~duration % 60;

	// Output like "1:01" or "4:03:59" or "123:03:59"
	let ret = "";

	if (hrs > 0) {
		ret += `${hrs}:${mins < 10 ? "0" : ""}`;
	}

	ret += `${mins}:${secs < 10 ? "0" : ""}`;
	ret += `${secs}`;

	return ret;
}

const LikeSong = () => {
	const { data, isLoading } = useLibrary<{ song: Array<like_entity> }>("song");
	const user = useUser((s) => s.user);

	return (
		<Layout>
			<header className="flex pt-16 pb-4 px-8 gap-8 bg-gradient-to-tl from-violet-950/60 to-violet-900/70 ">
				<img
					src={LikedSong}
					alt="Liked Song's playlist"
					className="size-[228px] rounded-md"
				/>
				<div className="text-white self-end">
					<p className="my-4 text-xs font-circularSpBook">Playlist</p>
					<h1 className="my-4 text-7xl font-circularSpBold">Liked Songs</h1>
					<h2 className="my-4 flex gap-4 font-circularSpBook">
						<img
							src={user?.avatar || DEFAULT_USER_IMAGE}
							alt="User Avatar Profile"
							className="size-6 rounded-full"
						/>
						<span className="font-circularSpBold">{user?.username || ""}</span>{" "}
						•{" "}
						<span>
							{isLoading && "..."} {!isLoading && data?.song.length} songs
						</span>
					</h2>
				</div>
			</header>
			<section className="h-full bg-gradient-to-b to-25% from-violet-800/30 bg-opacity-30">
				<header className="px-8 py-4">
					<Play className="hover:scale-105 transition rounded-full bg-background size-16 p-5 fill-black" />
				</header>
				<section>
					<div className="sticky flex gap-4 mx-8 my-4 px-4 py-2 text-white font-circularSpBold">
						<span className="w-[2.5%]">#</span>
						<span className="w-[50%]">Title</span>
						<span className="w-[25%]">Album</span>
						<span className="w-[15%]"> </span>
						<span className="w-[10%]">Duration</span>
					</div>
					<div>
						{isLoading && "Loading..."}
						{!isLoading &&
							data?.song?.map((s, i) => (
								<SongRow
									key={`${s.like_id}/${s.entity_id}/${s.user_id}`}
									id={s.like_id}
									index={i}
								/>
							))}
					</div>
				</section>
			</section>
		</Layout>
	);
};

type Song = song & {
	artist: artist;
	album: album;
};

const SongRow = ({ id, index }: { id: number; index: number }) => {
	const token = useUser((s) => s.token);
	const { setSong, song, setPlay, isPlay } = useControl();
	const [data, setData] = useState<Song>();
	const [isLoading, setIsLoading] = useState(true);
	const [isHover, setIsHover] = useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setIsLoading(true);
		const fetching = async () => {
			const response = await fetch(`http://localhost:3000/api/song/${id}`, {
				headers: { Authorization: `Auth ${token}` },
			});

			if (!response.ok) return null;

			return (await response.json()) as Song;
		};

		fetching()
			.then((data) => setData(data))
			.catch((error) => console.log(error))
			.finally(() => setIsLoading(false));
	}, []);

	return isLoading ? (
		"..."
	) : (
		<div
			className="sticky flex gap-4 mx-8 items-center font-circularSpBook text-foreground text-sm hover:bg-zinc-900/80 px-4 py-2 rounded-md bg-opacity-65"
			onMouseEnter={() => setIsHover(!isHover)}
			onMouseLeave={() => setIsHover(!isHover)}
		>
			<PlaySong data={data} index={index} isHover={isHover} />
			<p className="w-[50%] flex gap-2">
				<img
					src={data.album.cover}
					alt={`${data.album.name} Cover`}
					className="size-12 rounded-sm"
				/>
				<div className="flex flex-col justify-center">
					<span
						className={`${
							song?.id === data.id ? "text-background" : "text-white"
						} block font-circularSpTitleBlack text-sm`}
					>
						{data.name}
					</span>
					<span className="block">{data.artist.name}</span>
				</div>
			</p>
			<p className="w-[25%]">{data.album.name}</p>
			<p className="w-[15%]">
				{!isHover ? null : data.isLiked ? (
					<IsLiked className="size-4 ml-auto mr-4 fill-background" />
				) : (
					<Add className="size-4 ml-auto mr-4 fill-white" />
				)}
			</p>
			<p className="w-[10%]">{fancyTimeFormat(data.duration)}</p>
		</div>
	);
};

const PlaySong = ({
	data,
	isHover,
	index,
}: {
	data: song;
	isHover: boolean;
	index: number;
}) => {
	const { setSong, song, setPlay, isPlay } = useControl();

	return (
		<p
			className={`w-[2.5%] ${
				song?.id === data.id ? "text-background" : "text-white"
			} block font-circularSpTitleBlack text-sm`}
		>
			{isHover ? (
				song?.id === data.id ? (
					!isPlay ? (
						<Play
							className="size-4 fill-white"
							onClick={() => {
								setPlay();
							}}
						/>
					) : (
						<Pause className="size-4 fill-white" onClick={() => setPlay()} />
					)
				) : (
					<Play
						className="size-4 fill-white"
						onClick={() => {
							setSong(data, "collection/tracks");
							setPlay();
						}}
					/>
				)
			) : (
				index + 1
			)}
		</p>
	);
};

export default LikeSong;
