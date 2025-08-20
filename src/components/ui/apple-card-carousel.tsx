"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface AppleCardCarouselProps {
  children: React.ReactNode
  initialScroll?: number
  className?: string
}

export function AppleCardCarousel({ 
  children, 
  initialScroll = 0,
  className 
}: AppleCardCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = () => {
    if (!scrollRef.current) return
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
  }

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    
    const scrollAmount = 300
    const newScrollLeft = scrollRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
    
    scrollRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    checkScroll()
    const element = scrollRef.current
    if (element) {
      element.addEventListener("scroll", checkScroll)
      return () => element.removeEventListener("scroll", checkScroll)
    }
  }, [])

  useEffect(() => {
    if (scrollRef.current && initialScroll > 0) {
      scrollRef.current.scrollLeft = initialScroll
    }
  }, [initialScroll])

  return (
    <div className={cn("relative group", className)}>
      {/* Scroll Controls */}
             <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
         <motion.button
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ 
             opacity: canScrollLeft ? 1 : 0,
             scale: canScrollLeft ? 1 : 0.8
           }}
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
           onClick={() => scroll("left")}
           disabled={!canScrollLeft}
           className="p-2 bg-black/20 backdrop-blur-sm rounded-full text-white border border-white/20 hover:bg-black/30 transition-all disabled:pointer-events-none"
         >
           <ChevronLeft size={20} />
         </motion.button>
       </div>

             <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
         <motion.button
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ 
             opacity: canScrollRight ? 1 : 0,
             scale: canScrollRight ? 1 : 0.8
           }}
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
           onClick={() => scroll("right")}
           disabled={!canScrollRight}
           className="p-2 bg-black/20 backdrop-blur-sm rounded-full text-white border border-white/20 hover:bg-black/30 transition-all disabled:pointer-events-none"
         >
           <ChevronRight size={20} />
         </motion.button>
       </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
                 className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>
    </div>
  )
}
