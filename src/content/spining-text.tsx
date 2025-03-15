"use client";

import { useEffect, useRef, useState } from "react";

export default function SpinningText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [clicked, setClicked] = useState(false);

  // Handle scroll-based rotation
  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible || !containerRef.current) return;

      // Calculate rotation based on scroll position
      const scrollPosition = window.scrollY;
      const newRotation = (scrollPosition * 0.1) % 360;
      setRotation(newRotation);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  // Check if element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Handle button click
  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 500);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-primary p-4"
      ref={containerRef}
    >
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Rotating text */}
        <div
          ref={textRef}
          className="absolute w-full h-full rounded-full"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {/* Create text around circle */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-full text-[#e6e1c5] text-lg font-serif"
              style={{
                transform: `rotate(${i * 30}deg)`,
              }}
            >
              <span
                className="absolute left-1/2 -translate-x-1/2 -top-2 whitespace-nowrap"
                style={{
                  transform: `rotate(${90}deg)`,
                }}
              >
                {i === 0 && "Explore"}
                {i === 2 && "More"}
                {i === 4 && "Explore"}
                {i === 6 && "More"}
                {i === 8 && "Explore"}
                {i === 10 && "More"}
              </span>
            </div>
          ))}
        </div>

        {/* Center button */}
        <button
          onClick={handleClick}
          className={`relative z-10 w-28 h-28 rounded-full bg-primary border-2 border-[#e6e1c5] flex flex-col items-center justify-center transition-transform ${
            clicked ? "scale-95" : "scale-100"
          }`}
        >
          <span className="text-white font-bold text-xl">SCROLL</span>
          <span className="text-white font-bold text-xl">ME!</span>
        </button>
      </div>
    </div>
  );
}
