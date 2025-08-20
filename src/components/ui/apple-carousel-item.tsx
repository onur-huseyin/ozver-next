"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AppleCarouselItemProps {
  index: number
  children: ReactNode
}

export function AppleCarouselItem({ index, children }: AppleCarouselItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
             className="flex-shrink-0 px-3"
    >
      {children}
    </motion.div>
  )
}
