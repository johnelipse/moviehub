import Ripple from "./magicui/ripple";


export function RippleBg() {
  return (
    <div className="absolute flex h-full w-full -z-30 flex-col items-center justify-center  rounded-lg border bg-background md:shadow-xl left-0 top-0 bottom-0">
      <Ripple />
    </div>
  );
}
