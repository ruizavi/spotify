import { z } from "zod";
import prisma from "../lib/prisma";
import s3 from "../lib/aws";
import config from "../config";
import schematas from "../lib/schema";

async function create(data: unknown, file?: Express.Multer.File) {
	const { success, data: artist } =
		schematas.CreateArtistSchema.safeParse(data);

	if (!success) throw new Error("Is not valid artist's data");

	const createdArtist = await prisma.artist.create({ data: artist });

	if (file) {
		await s3.uploadFile(file);

		return await prisma.artist.update({
			where: { id: createdArtist.id },
			data: { avatar: file.filename },
		});
	}

	return {};
}

async function findOne(id: number) {
	const artistFound = await prisma.artist.findUnique({ where: { id } });

	if (!artistFound) throw new Error("Artist not found");

	return {
		...artistFound,
		avatar: artistFound.avatar
			? `${config.S3_PUBLIC_URL}/${artistFound.avatar}`
			: null,
	};
}

async function findAlbums(id: number) {
	const foundAlbums = await prisma.album.findMany({ where: { artist_id: id } });

	return foundAlbums;
}

const artistService = { create, findOne, findAlbums };

export default artistService;
