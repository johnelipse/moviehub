import Ripple from "./magicui/ripple";


export function RippleBg2() {
  return (
    <div className="absolute flex min-h-[130vh] w-full -z-30 flex-col items-center justify-center  rounded-lg border bg-background md:shadow-xl left-0 top-0 bottom-0">
      <Ripple />
    </div>
  );
}
