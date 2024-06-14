import prisma from "../lib/prisma";
import schematas from "../lib/schema";

async function create(data: unknown, user: number) {
	const { success, data: playlist } =
		schematas.CreatePlaylistSchema.safeParse(data);

	if (!success) throw new Error("Playlist data is not valid");

	const createdPlaylist = await prisma.playlist.create({
		data: { name: playlist.name, user_id: user },
	});

	return createdPlaylist;
}

async function findOne(id: number) {
	const foundPlaylist = await prisma.playlist.findUnique({ where: { id } });

	return foundPlaylist;
}

async function find(user: number) {
	const playlists = await prisma.playlist.findMany({
		where: { user_id: user },
	});

	return playlists;
}

async function findSongs(id: number) {
	const songs = await prisma.playlist_song.findMany({
		where: { playlist_id: id },
		select: { song: true },
	});

	return songs.map(({ song }) => song);
}

async function remove(id: number, user: number) {
	const isOwn = await prisma.playlist.findFirst({
		where: { id, user_id: user },
	});

	if (!isOwn) throw new Error("This playlist not own the user");

	const playlist = await prisma.playlist.delete({ where: { id } });

	return playlist;
}

const playlistService = { create, find, findOne, findSongs, remove };

export default playlistService;
