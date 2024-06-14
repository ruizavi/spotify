import * as RadixSlider from "@radix-ui/react-slider"

interface Props { 
  min: number
  max: number
  value: number[]
  className?: string
  step?: number
  onValueChange?: (value: number[]) => void
}

export function Slider(props: Props) {
  return <RadixSlider.Root {...props} className={`relative flex touch-none select-none items-center group ${props.className}`}>
    <RadixSlider.Track className="relative h-[4px] w-full grow overflow-hidden rounded-full bg-[#727272]">
      <RadixSlider.Range className="absolute h-full bg-white group-hover:bg-[#1ed762]"/>
    </RadixSlider.Track>
    <RadixSlider.Thumb className="w-[12px] h-[12px] rounded-full hidden group-hover:block group-hover:bg-white outline-none"/>
  </RadixSlider.Root>
}
