"use client";

import * as React from "react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export function WavyBackgroundDemo() {
  return (
    <section className="pb-20 pt-36 md:pb-32 md:pt-48">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h1 className="font-bold leading-tight text-4xl md:text-7xl tracking-tighter">
              Tekstil makinalarında kalite adresi{" "}
              <div className="relative inline-flex">
                <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-blue-800"></span>
                <span className="relative">ÖZVER.</span>
              </div>
            </h1>
            <p className="mt-8 text-sm font-normal sm:text-2xl text-[#83838367]">
              Bobin Boyama, Numune Bobin Boyama, Elyaf Kurutma, <br /> Rota-Dye Kumaş Boyama, Santrifüj
            </p>
 
            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
              <ShimmerButton>
               <span className="text-white">%100 Garanti, %100 Kalite</span>
              </ShimmerButton>
            </div>
          </div>
 
          {/* Right Image */}
          <div className="rounded-xl h-full md:bg-muted/70 md:p-3.5 md:ring-1 md:ring-inset md:ring-border">
            <div className="relative h-full overflow-hidden rounded-xl border md:rounded-lg">
              <img
                alt="preview landing"
                src="/factory2.png"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
