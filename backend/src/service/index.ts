import albumService from './album';
import artistService from './artist';
import authService from './auth';
import jamService from './jam';
import playlistService from './playlist';
import searchService from './search';
import songService from './song';
import userService from './user';

const service = {
  auth: authService,
  artist: artistService,
  album: albumService,
  song: songService,
  jam: jamService,
  playlist: playlistService,
  search: searchService,
  user: userService
};

export default service;
