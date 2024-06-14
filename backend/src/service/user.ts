import { z } from "zod";

import prisma from "../lib/prisma";

async function searchSong(userId: number, entity: string) {
  return await prisma.like_entity.findMany({
    where: { user_id: userId, entity: { name: entity } },
  });
}

async function searchPlaylist(userId: number, entity: string) {
  const relation = await prisma.like_entity.findMany({
    where: { user_id: userId, entity: { name: entity } },
  });

  const playlists = [];

  for (const record of relation) {
    const playlist = await prisma.playlist.findFirst({
      where: { id: record.like_id },
    });

    if (playlist) playlists.push(playlist);
  }
}

async function searchAlbum(userId: number, entity: string) {
  const relation = await prisma.like_entity.findMany({
    where: { user_id: userId, entity: { name: entity } },
  });

  const playlists = [];

  for (const record of relation) {
    const playlist = await prisma.album.findFirst({
      where: { id: record.like_id },
    });

    if (playlist) playlists.push(playlist);
  }
}

async function searchArtist(userId: number, entity: string) {
  const relation = await prisma.like_entity.findMany({
    where: { user_id: userId, entity: { name: entity } },
  });

  const playlists = [];

  for (const record of relation) {
    const playlist = await prisma.artist.findFirst({
      where: { id: record.like_id },
    });

    if (playlist) playlists.push(playlist);
  }
}

const searchFunctions: Record<
  string,
  (userId: number, entity: string) => Promise<unknown>
> = {
  playlist: searchPlaylist,
  song: searchSong,
  album: searchAlbum,
  artist: searchArtist,
};

const EntitySchema = z.array(z.enum(["playlist", "song", "album", "artist"]));

async function search(userId: number, entity: Array<string>) {
  let entities = entity;

  const { success } = EntitySchema.safeParse(entity);

  if (!success) entities = ["playlist", "song", "album", "artist"];

  const searchResult: Record<string, unknown> = {};

  for (const key of entities) {
    const result = await searchFunctions[key](userId, key);

    searchResult[key] = result;
  }

  return searchResult;
}

const userService = { search };

export default userService;
