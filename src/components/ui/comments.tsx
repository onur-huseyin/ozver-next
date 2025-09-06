"use client"

import React from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import LogoCarousel from "../ui/logo-carousel"

export function Comments() {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-8  py-24 overflow-hidden">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
           {t('home.comments.title')}
          </h1>

        </div>

        <LogoCarousel columnCount={5} />
      </div>
    </div>
  )
}
