import prisma from "../lib/prisma";
import s3 from "../lib/aws";
import config from "../config";
import getAudioDurationInSeconds from "get-audio-duration";
import schematas from "../lib/schema";

async function create(data: unknown, file: Express.Multer.File) {
  const { success, data: song } = schematas.CreateSongSchema.safeParse(data);

  if (!success) throw new Error("Song data is not valid");

  await s3.uploadFile(file);

  const duration = await getAudioDurationInSeconds(file.path);

  const addedSong = await prisma.song.create({
    data: {
      ...song,
      duration,
      file: file.filename,
    },
  });

  return addedSong;
}

async function findOne(id: number, userId: number) {
  const song = await prisma.song.findUnique({
    where: { id },
    include: {
      artist: { select: { name: true, id: true } },
      song_album: {
        include: { album: { select: { name: true, id: true, cover: true } } },
      },
    },
  });

  if (!song) throw new Error("Song not found");

  const isLiked = await prisma.like_entity.findFirst({
    where: { like_id: song.id, entity: { name: "song" }, user_id: userId },
  });

  const album = song.song_album.pop()?.album || null;

  return {
    ...song,
    file: `${config.S3_PUBLIC_URL}/${song.file}`,
    album: {
      ...album,
      cover: `${config.S3_PUBLIC_URL}/${album?.cover}`,
    },
    isLiked,
  };
}

const songService = { create, findOne };

export default songService;
