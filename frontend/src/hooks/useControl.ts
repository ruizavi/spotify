import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { album, artist, song } from "../lib/types";
import { boolean } from "zod";

type Song = song & { artist: artist; album: album; isLiked: object };
type Location =
  | "collection/tracks"
  | "collection/album"
  | "collection/playlist"
  | "collection/artist";

interface State {
  song: Song | null;
  location: Location | null;
  entity: number | null;
  isPlay: boolean;

  currentTime: number;
  dragTime: number;

  volume: number;
  isMute: boolean;
}

interface Action {
  setSong(song: Song, location: Location, entity?: number | null): void;
  setPlay(value?: boolean): void;
  setTime(time: number): void;
  setVolume(volume: number): void;
  setDragtime(dragTime: number): void;
  setIsMute(isMute?: boolean): void;
}

const useControl = create<State & Action>()(
  persist(
    (set) => ({
      isPlay: false,
      location: null,
      song: null,
      entity: null,
      audio: new Audio(),
      currentTime: 0,
      dragTime: 0,
      volume: 0,
      isMute: false,

      setSong: (song, location, entity = null) =>
        set({ song, location, entity, isPlay: true }),
      setPlay: (value) => set((state) => ({ isPlay: value ?? !state.isPlay })),
      setTime: (time) => set({ currentTime: time }),
      setVolume: (volume) => set({ volume }),
      setDragtime: (dragTime) => set({ dragTime }),
      setIsMute: (isMute) =>
        set((state) => ({ isMute: isMute ?? !state.isMute })),
    }),

    { name: "control-state" }
  )
);

export default useControl;
