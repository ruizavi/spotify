import useControl from "../../../hooks/useControl";
import { VolumeMute, Volume1, Volume3, Volume2 } from "../../ui/icons";
import { MouseEvent } from "react";
import { Slider } from "../../ui/slider";

const VolumeIconClassNames =
  "size-3 fill-[#727272] hover:fill-white hover:stroke-white stroke-[#727272]";

const VolumeIcon = () => {
  const { volume, isMute } = useControl();

  if (isMute) return <VolumeMute className={VolumeIconClassNames} />;

  if (volume < 0.33) return <Volume1 className={VolumeIconClassNames} />;
  if (volume > 0.67) return <Volume3 className={VolumeIconClassNames} />;

  return <Volume2 className={VolumeIconClassNames} />;
};

export const VolumeControl = () => {
  const { volume, setVolume, setIsMute } = useControl();

  const handleChange = (value: number[]) => {
    setVolume(value[0] / 100);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsMute();
  };

  return (
    <div className="w-1/6 flex items-center gap-4 justify-end mx-2">
      <button
        type="button"
        onClick={handleClick}
        className="size-3 outline-none"
      >
        <VolumeIcon />
      </button>
      <Slider
        max={100}
        min={0}
        value={[volume * 100]}
        onValueChange={handleChange}
        step={1}
        className="w-28"
      />
    </div>
  );
};
