"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getSliderImages } from "@/lib/supabaseClient";
import type { SliderImage } from "@/lib/types";

export function CarouselDemo() {
  const [sliderImages, setSliderImages] = useState<SliderImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchSliderImages = async () => {
      try {
        setIsLoading(true);
        const images = await getSliderImages();
        setSliderImages(images);
        setError(null);
      } catch (err) {
        console.error('Slider görselleri yüklenirken hata:', err);
        setError('Slider görselleri yüklenemedi');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSliderImages();
  }, []);

  const handleImageError = (imageUrl: string) => {
    console.error(`Resim yüklenemedi: ${imageUrl}`);
    setFailedImages(prev => new Set(prev).add(imageUrl));
  };

  // Başarısız olan resimleri filtrele
  const validImages = sliderImages.filter(image => !failedImages.has(image.url));

  // Loading state
  if (isLoading) {
    return (
      <div className="w-full max-w-full">
        <div className="flex aspect-video items-center justify-center p-0 bg-gray-200 bg-[#0A0A0A] rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Slider yükleniyor...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-full max-w-full">
        <div className="flex aspect-video items-center justify-center p-0 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400 mb-2">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Tekrar Dene
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Eğer hiç geçerli resim yoksa fallback göster
  if (validImages.length === 0) {
    return (
      <div className="w-full max-w-full">
        <div className="flex aspect-video items-center justify-center p-0 bg-gray-100 dark:bg-gray-900 rounded-lg">
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-4">Henüz slider görseli eklenmemiş</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Yenile
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Carousel className="w-full max-w-full">
      <CarouselContent>
        {validImages.map((image) => (
          <CarouselItem key={image.id}>
            <div>
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-0">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={800}
                    height={450}
                    className="rounded-lg object-contain w-full h-full"
                    priority={true}
                    onError={() => handleImageError(image.url)}
                    unoptimized={false} // Next.js image optimization'ı kullan
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
