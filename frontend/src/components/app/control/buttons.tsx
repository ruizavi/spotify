import useControl from "../../../hooks/useControl";
import { Pause, Play } from "../../ui/icons";
import Next from "../../ui/icons/next";
import { Slider } from "../../ui/slider";

function fancyTimeFormat(duration: number) {
  const hrs = ~~(duration / 3600);
  const mins = ~~((duration % 3600) / 60);
  const secs = ~~duration % 60;

  let ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;

  return ret;
}

const TimeSlider = () => {
  const { song, currentTime, setDragtime } = useControl();

  const handleChange = (value: number[]) => {
    setDragtime(value[0]);
  };
  return (
    <div className="flex text-white items-center gap-4 text-xs">
      <span>{fancyTimeFormat(currentTime)}</span>
      <Slider
        min={0}
        max={song?.duration ?? 60}
        value={[currentTime]}
        onValueChange={handleChange}
        className="w-[512px]"
      />
      <span>{song?.duration ? fancyTimeFormat(song.duration) : "--:--"}</span>
    </div>
  );
};

const Buttons = () => {
  const { isPlay, setPlay } = useControl();

  const handleClick = () => setPlay();

  return (
    <div className="flex gap-8 items-center">
      <Next className="fill-white size-4" />
      <button className="bg-white p-2 rounded-full outline-none" onClick={handleClick}>
        {isPlay ? (
          <Pause className="fill-black size-4" />
        ) : (
          <Play className="fill-black size-4" />
        )}
      </button>
      <Next className="rotate-180 fill-white size-4" />
    </div>
  );
};

export const ControlButtons = () => {
  return (
    <div className="w-4/6 flex flex-col items-center gap-1">
      <Buttons />
      <TimeSlider />
    </div>
  );
};
