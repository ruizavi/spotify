import {z} from 'zod';

import config from '../config';
import prisma from '../lib/prisma';

async function searchSong(search: string) {
  return await prisma.song.findMany({where: {name: {contains: search}}});
}

async function searchPlaylist(search: string) {
  return await prisma.playlist.findMany({
    where: {name: {contains: search}},
  });
}

async function searchAlbum(search: string) {
  const album = await prisma.album.findMany({
    where: {name: {contains: search}},
    include: {artist: true},
  });

  return album.map((a) => ({...a, cover: `${config.S3_PUBLIC_URL}/${a.cover}`}))
}

async function searchArtist(search: string) {
  const artist = await prisma.artist.findMany({
    where: {name: {contains: search}},
  });

  return artist.map(
      (a) => ({...a, avatar: `${config.S3_PUBLIC_URL}/${a.avatar}`}))
}

const searchFunctions: Record<string, (search: string) => Promise<unknown>> = {
  playlist: searchPlaylist,
  song: searchSong,
  album: searchAlbum,
  artist: searchArtist,
};

const EntitySchema = z.array(z.enum(['playlist', 'song', 'album', 'artist']));

async function search(search: string, entity: Array<string>) {
  let entities = entity;

  const {success} = EntitySchema.safeParse(entity);

  if (!success) entities = ['playlist', 'song', 'album', 'artist'];

  const searchResult: Record<string, unknown> = {};

  for (const key of entities) {
    const result = await searchFunctions[key](search);

    searchResult[key] = result;
  }

  return searchResult;
}

const searchService = {search};

export default searchService;
