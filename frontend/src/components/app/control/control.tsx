import { ControlButtons } from "./buttons";
import { VolumeControl } from "./volume";
import { CurrentSong } from "./current";

const Control = () => {
  return (
    <footer id="control" className="flex">
      <CurrentSong />
      <ControlButtons />
      <VolumeControl />
    </footer>
  );
};

export default Control;
