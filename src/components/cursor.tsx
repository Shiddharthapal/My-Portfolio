import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
export default function CursorRing() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
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

  return (
    <>
      {/* Cursor Ring */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] transition-opacity duration-200"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gray-200 transition-all duration-300"
          style={{
            width: isHovering ? "40px" : "20px", // ✅ 2x size
            height: isHovering ? "40px" : "20px", // ✅ 2x size
          }}
        />
        {/* Inner Dot */}
      </div>
    </>
  );
}
