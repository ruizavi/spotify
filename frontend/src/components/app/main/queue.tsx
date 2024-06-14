import useControl from "../../../hooks/useControl";

const Queue = () => {
  const { song, location } = useControl();

  const render = () => {
    if (location === "collection/tracks") return "Liked Songs";

    return "";
  };

  return (
    <div id="queue" className="bg-main rounded md p-4">
      <h1 className="text-white font-circularSpBold text-base">Queue</h1>
      <h2 className="text-white font-circularSpBold text-base mt-12">
        Now playing
      </h2>
      {song ? (
        <div className="flex gap-4 items-center my-4">
          <img
            src={song.album.cover}
            alt={`${song.album.name} Cover`}
            className="size-12 rounded-sm"
          />
          <div className="flex flex-col justify-between gap-1">
            <span className="text-background block font-circularSpBook font-light text-base">
              {song.name}
            </span>
            <span className="block text-white font-circularSpBook font-light text-base">
              {song.artist.name}
            </span>
          </div>
        </div>
      ) : null}
      <h2 className="text-white font-circularSpBold text-base mt-12">
        Next from: {render()}
      </h2>

    </div>
  );
};

export default Queue;
