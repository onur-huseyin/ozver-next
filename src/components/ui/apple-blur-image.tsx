"use client"

import { cn } from "@/lib/utils"

interface AppleBlurImageProps {
  src: string
  alt?: string
  width?: number | string
  height?: number | string
  fill?: boolean
  className?: string
}

export function AppleBlurImage({
  src,
  alt = "Background of a beautiful view",
  width,
  height,
  fill = false,
  className = "",
}: AppleBlurImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        "transition-all duration-300",
        fill && "w-full h-full",
        className
      )}
    />
  )
}
