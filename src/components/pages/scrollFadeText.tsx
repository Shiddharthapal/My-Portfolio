"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollFadeTextProps {
  text: string;
  initialSize?: number; // in pixels
  maxScale?: number; // maximum scale factor
  scrollRange?: number; // pixels to scroll before effect is complete
  className?: string;
}

export function ScrollFadeText({
  text,
  initialSize = 60,
  maxScale = 10,
  scrollRange = 500,
  className = "",
}: ScrollFadeTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const effectiveRange = Math.max(1, scrollRange);

    const updateProgress = () => {
      frameRef.current = null;
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const elementTop = rect.top;
      const windowHeight = window.innerHeight;

      // Calculate how much the element has scrolled into view
      // When element is at bottom of screen (elementTop = windowHeight), scrollProgress = 0
      // When element is at top of screen (elementTop = 0), scrollProgress increases
      const scrollProgress = Math.max(
        0,
        (windowHeight - elementTop) / effectiveRange,
      );
      const clampedProgress = Math.min(1, scrollProgress);
      setProgress((prev) =>
        Math.abs(prev - clampedProgress) > 0.001 ? clampedProgress : prev,
      );
    };

    const handleScroll = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(updateProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [scrollRange]);

  const scale = maxScale - (maxScale - 1) * progress;
  const opacity = Math.max(0, progress);

  return (
    <div ref={containerRef} className={className}>
      <div
        className="will-change-transform"
        style={{
          transform: `scale(${scale})`,
          opacity,
          transformOrigin: "left center",
          willChange: "transform, opacity",
        }}
      >
        <h1
          style={{
            fontSize: `${initialSize}px`,
            fontWeight: "bold",
          }}
          className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent cursor-pointer leading-none"
        >
          {text}
        </h1>
      </div>
    </div>
  );
}
