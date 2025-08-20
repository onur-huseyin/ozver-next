"use client";

import { Suspense, ReactNode } from "react";

interface PerformanceOptimizerProps {
  children: ReactNode;
  fallback?: ReactNode;
  delay?: number;
}

export function PerformanceOptimizer({ 
  children, 
  fallback = <div className="h-32 flex items-center justify-center">Yükleniyor...</div>,
  delay = 0 
}: PerformanceOptimizerProps) {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
}

// Preload component for critical resources
export function PreloadResources() {
  return (
    <>
      {/* Preload critical fonts */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Preload critical images */}
      <link rel="preload" as="image" href="/ozver-mek.png" />
      
      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    </>
  );
}
