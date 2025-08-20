import * as React from "react"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-full">
             <CarouselContent>
         <CarouselItem>
           <div>
             <Card>
               <CardContent className="flex aspect-video items-center justify-center p-0">
                 <Image
                   src="/mak1.jpeg"
                   alt="Makine 1"
                   width={800}
                   height={450}
                   className="rounded-lg object-cover w-full h-full"
                 />
               </CardContent>
             </Card>
           </div>
         </CarouselItem>
         <CarouselItem>
           <div>
             <Card>
               <CardContent className="flex aspect-video items-center justify-center p-0">
                 <Image
                   src="/engine-3d-model-00.jpg"
                   alt="3D Motor Modeli"
                   width={800}
                   height={450}
                   className="rounded-lg object-cover w-full h-full"
                 />
               </CardContent>
             </Card>
           </div>
         </CarouselItem>
       </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
