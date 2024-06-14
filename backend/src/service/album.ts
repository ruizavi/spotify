import prisma from "../lib/prisma";
import s3 from "../lib/aws";
import config from "../config";
import schematas from "../lib/schema";

async function create(data: unknown, file?: Express.Multer.File) {
  const { success, data: album } = schematas.CreateAlbumSchema.safeParse(data);

  if (!success) throw new Error("Data is not valid");

  const createdAlbum = await prisma.album.create({ data: album });

  if (file) {
    await s3.uploadFile(file);

    const albumUpdated = await prisma.album.update({
      where: { id: createdAlbum.id },
      data: { cover: file.filename },
    });

    return albumUpdated;
  }

  return createdAlbum;
}

async function findOne(id: number) {
  const foundAlbum = await prisma.album.findUnique({
    where: { id },
  });

  if (!foundAlbum) throw new Error("Album not found");

  return {
    ...foundAlbum,
    cover: foundAlbum.cover
      ? `${config.S3_PUBLIC_URL}/${foundAlbum.cover}`
      : null,
  };
}

async function findSongs(id: number) {
  const songs = await prisma.song_album.findMany({
    where: { album_id: id },
    select: { song: true },
  });

  return songs.map(({song}) => (song));
}


async function linkSongs(data: unknown, id: number) {
  const artistFound = await prisma.album.findUnique({
    where: { id },
    select: { artist_id: true },
  });

  if (!artistFound) throw new Error("Album not found");

  const { success, data: songs } = schematas.LinkSong.safeParse(data);

  if (!success) throw new Error("Not valid songs");

  const relation: Array<{ song_id: number; album_id: number }> = [];

  for (const song of songs) {
    const foundSong = await prisma.song.findUnique({
      where: { id: song },
      select: { artist_id: true },
    });

    if (!foundSong) continue;

    if (foundSong.artist_id !== artistFound.artist_id) continue;

    relation.push({ album_id: id, song_id: song });
  }

  const linkedSongs = await prisma.song_album.createMany({ data: relation });

  return linkedSongs;
}

const albumService = { create, findOne, findSongs, linkSongs };

export default albumService;
