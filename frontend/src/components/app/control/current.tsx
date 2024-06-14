import useControl from "../../../hooks/useControl";
import { IsLiked, Add } from "../../ui/icons";

export const CurrentSong = () => {
  const song = useControl((s) => s.song);
  return (
    <aside className="w-1/6">
      <div className="flex gap-4 items-center">
        {song ? (
          <>
            <img
              src={song.album.cover}
              alt={`${song.album.name} Cover`}
              className="size-12 rounded-sm"
            />
            <div className="flex flex-col justify-center">
              <span className="text-white block font-circularSpTitleBlack text-sm">
                {song.name}
              </span>
              <span className="block text-white text-xs">
                {song.artist.name}
              </span>
            </div>
            {song.isLiked ? (
              <IsLiked className="size-4 fill-background" />
            ) : (
              <Add className="size-4 fill-white" />
            )}
          </>
        ) : null}
      </div>
    </aside>
  );
};
