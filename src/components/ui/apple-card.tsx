"use client"

import { motion } from "framer-motion"
import { AppleBlurImage } from "./apple-blur-image"
import { cn } from "@/lib/utils"

interface CardData {
  src: string
  title: string
  category: string
}

interface AppleCardProps {
  card: CardData
  index: number
  layout?: boolean
}

export function AppleCard({ card, index, layout = false }: AppleCardProps) {
  return (
    <motion.div
      layoutId={layout ? `card-${index}` : undefined}
      className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-[600px] w-90 overflow-hidden">
        <AppleBlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      
      <div className="absolute top-12 left-2 right-0 p-4 text-white">
        <p className="text-sm font-medium text-white/70">{card.category}</p>
        <h3 className="text-2xl font-semibold">{card.title}</h3>
      </div>
    </motion.div>
  )
}
