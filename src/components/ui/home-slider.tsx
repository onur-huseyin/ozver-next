"use client";

import * as React from "react";
import { WavyBackground } from "../ui/wavy-background"

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40 ">

      <p className="text-2xl md:text-4xl lg:text-[96px] text-white font-bold inter-var text-center">
        ÖZVER MEKATRONİK
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        DOĞRU RENK VE KALİTE İÇİN ADRES DAİMA ÖZVER.
      </p>
    </WavyBackground>
  );
}
