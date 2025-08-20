  import React, { ComponentPropsWithoutRef, CSSProperties } from "react";

  import { cn } from "@/lib/utils";

  interface RippleProps extends ComponentPropsWithoutRef<"div"> {
    mainCircleSize?: number;
    mainCircleOpacity?: number;
    numCircles?: number;
  }

  export const Ripple2 = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  ...props
}: RippleProps) {
  // Mobile için daha küçük boyutlar
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const mobileCircleSize = mainCircleSize * 0.6; // Mobile'da %60 boyut
  const mobileNumCircles = Math.floor(numCircles * 0.7); // Mobile'da %70 daire sayısı
  
  const finalCircleSize = isMobile ? mobileCircleSize : mainCircleSize;
  const finalNumCircles = isMobile ? mobileNumCircles : numCircles;
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",
          className,
        )}
        {...props}
      >
        {Array.from({ length: finalNumCircles }, (_, i) => {
          const size = finalCircleSize + i * (isMobile ? 40 : 70);
          const opacity = mainCircleOpacity - i * 0.03;
          const animationDelay = `${i * 0.06}s`;
          const borderStyle = "solid";

          return (
            <div
              key={i}
              className={`absolute animate-ripple rounded-full border bg-foreground/25 shadow-xl`}
              style={
                {
                  "--i": i,
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity,
                  animationDelay,
                  borderStyle,
                  borderWidth: "1px",
                  borderColor: `hsl(${120 + i * 10}, 70%, ${50 + i * 5}%)`,
                  background: `linear-gradient(45deg, hsl(${120 + i * 10}, 70%, ${50 + i * 5}%), hsl(${120 + i * 15}, 60%, ${60 + i * 8}%))`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) scale(1)",
                } as CSSProperties
              }
            />
          );
        })}
      </div>
    );
  });

  Ripple2.displayName = "Ripple2";
