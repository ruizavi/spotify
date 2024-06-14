import {
  type ChangeEvent,
  type PropsWithChildren,
  createContext,
  useEffect,
  useRef,
} from "react";
import useControl from "../hooks/useControl";

const AudioContext = createContext(null);

export function AudioProvider({ children }: PropsWithChildren) {
  const { setTime, song, isPlay, setPlay, currentTime, volume, dragTime, isMute } = useControl();

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    !isPlay ? audioRef.current.pause() : audioRef.current.play();

  }, [isPlay]);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.muted = isMute
  }, [isMute])

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = volume;
  }, [volume])

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = dragTime

    setTime(dragTime)
  }, [dragTime])

  useEffect(() => {
    if (!audioRef.current) return;
    if (!song) return;

    audioRef.current.src = song.file;

    audioRef.current.load();

    audioRef.current.currentTime = 0

    setTime(0)

    setPlay(false);
  }, [song]);

  return (
    <AudioContext.Provider value={null}>
      <audio
        ref={audioRef}
        onTimeUpdate={(e: ChangeEvent<HTMLAudioElement>) =>
          setTime(e.target.currentTime)
        }
      />
      {children}
    </AudioContext.Provider>
  );
}
