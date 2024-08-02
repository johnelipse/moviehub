import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

export function AnimatedGridPatternDemo() {
  return (
    <div className="absolute flex h-[100%] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl top-0 left-0 right-0 bottom-0">
       <AnimatedGridPattern
        numSquares={1000}
        maxOpacity={0.3}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-70%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}
