import { useEffect, useState, useRef } from "react";
export default function CursorRing() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const requestRef = useRef<number>();

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const isNavElement =
        target.closest("button") || // ALL buttons
        target.closest("a") || // ALL links
        target.closest('[role="button"]') || // Elements with button role
        target.closest('input[type="submit"]') || // Submit inputs
        target.closest("[data-cursor-hover]");

      setIsHovering(!!isNavElement);
    };

    const hideCursor = () => {
      setIsVisible(false);
    };

    // Add event listeners
    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mouseenter", () => setIsVisible(true));

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mouseenter", () => setIsVisible(true));
    };
  }, []);

  // Smooth following animation
  useEffect(() => {
    const animate = () => {
      setRingPosition((prev) => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;

        // Adjust this value for speed (0.1 = slower, 0.3 = faster)
        const speed = 0.15;

        return {
          x: prev.x + dx * speed,
          y: prev.y + dy * speed,
        };
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <>
      {/* Cursor Ring */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] transition-opacity duration-200"
        style={{
          transform: `translate(${ringPosition.x}px, ${ringPosition.y}px)`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gray-300 transition-all duration-300"
          style={{
            width: isHovering ? "50px" : "20px", // ✅ 2x size
            height: isHovering ? "50px" : "20px", // ✅ 2x size
          }}
        />
        {/* Inner Dot */}
      </div>
    </>
  );
}
