"use client"

import React from "react"

import LogoCarousel from "../ui/logo-carousel"

export function Comments() {
  return (
    <div className="space-y-8  py-24">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
           ÖZVER&apos;İ TERCİH EDENLER
          </h1>

        </div>

        <LogoCarousel columnCount={5} />
      </div>
    </div>
  )
}
