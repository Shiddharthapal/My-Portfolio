import { useEffect, useRef, useState } from "react";

interface ScrollMarqueeProps {
  text: string;
  fontSize?: number; // in pixels
  className?: string;
  normalSpeed?: number; // pixels per second (default 50)
  scrollSpeed?: number; // pixels per second when scrolling (default 150)
}

export function ScrollMarquee({
  text,
  fontSize = 120,
  className = "",
  normalSpeed = 50,
  scrollSpeed = 150,
}: ScrollMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"left" | "right">(
    "left",
  );
  const [phase, setPhase] = useState(0);
  const [cycleWidth, setCycleWidth] = useState(0);
  const [currentSpeed, setCurrentSpeed] = useState(normalSpeed);
  const lastScrollYRef = useRef(0);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const textGap = Math.max(32, Math.round(fontSize * 0.25));
  const containerHeight = Math.ceil(fontSize * 1.45);

  useEffect(() => {
    const updateCycleWidth = () => {
      const width = measureRef.current?.offsetWidth ?? 0;
      if (width > 0) {
        setCycleWidth(width);
      }
    };

    updateCycleWidth();
    const resizeObserver = new ResizeObserver(updateCycleWidth);
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    if (measureRef.current) resizeObserver.observe(measureRef.current);
    window.addEventListener("resize", updateCycleWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateCycleWidth);
    };
  }, [text, fontSize, textGap]);

  useEffect(() => {
    if (cycleWidth <= 0) return;
    let lastTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const deltaTime = (now - lastTime) / 1000; // Convert to seconds
      lastTime = now;

      setPhase((prev) => {
        const directionMultiplier = scrollDirection === "left" ? 1 : -1;
        const next = prev + directionMultiplier * currentSpeed * deltaTime;
        return ((next % cycleWidth) + cycleWidth) % cycleWidth;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [currentSpeed, scrollDirection, cycleWidth]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect scroll direction
      if (currentScrollY > lastScrollYRef.current) {
        // Scrolling DOWN
        setScrollDirection("right");
      } else if (currentScrollY < lastScrollYRef.current) {
        // Scrolling UP
        setScrollDirection("left");
      }

      lastScrollYRef.current = currentScrollY;

      // Update speed based on scroll activity
      setCurrentSpeed(scrollSpeed);

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Reset to normal speed after 1 second of no scrolling
      scrollTimeoutRef.current = setTimeout(() => {
        setCurrentSpeed(normalSpeed);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [normalSpeed, scrollSpeed]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-transparent ${className}`}
      style={{ height: `${containerHeight}px` }}
    >
      <div
        className="absolute top-0 left-0 h-full flex items-center whitespace-nowrap will-change-transform"
        style={{
          transform: `translate3d(${-Math.round(phase)}px, 0, 0)`,
          fontSize: `${fontSize}px`,
          fontWeight: "bold",
          letterSpacing: "-2px",
          lineHeight: "1.15",
        }}
      >
        <span
          ref={measureRef}
          className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent"
          style={{ paddingRight: `${textGap}px` }}
        >
          {text}
        </span>
        <span
          className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent"
          style={{ paddingRight: `${textGap}px` }}
        >
          {text}
        </span>
        <span
          className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent"
          style={{ paddingRight: `${textGap}px` }}
        >
          {text}
        </span>
      </div>
    </div>
  );
}
