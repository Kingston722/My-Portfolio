import * as React from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";

const CursorContext = React.createContext(undefined);

const useCursor = () => {
  const context = React.useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};

const isTouchDevice = () => {
  if (typeof window === "undefined") return false;
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      (navigator.userAgent || "").toLowerCase()
    )
  );
};

function CursorProvider({ children, className, hideDefaultCursor = true }) {
  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = React.useState(false);
  const containerRef = React.useRef(null);
  const cursorRef = React.useRef(null);

  React.useEffect(() => {
    if (isTouchDevice()) return undefined;

    const handleMouseMove = (event) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
      setIsActive(true);
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };
    const handleBlur = () => {
      setIsActive(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  React.useEffect(() => {
    if (!hideDefaultCursor) return undefined;

    document.documentElement.classList.add("hp-custom-cursor-hidden");
    document.body.style.cursor = "none";

    let styleEl = document.getElementById("hp-custom-cursor-style");
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = "hp-custom-cursor-style";
      styleEl.textContent = ".hp-custom-cursor-hidden, .hp-custom-cursor-hidden * { cursor: none !important; }";
      document.head.appendChild(styleEl);
    }

    return () => {
      document.body.style.cursor = "";
      document.documentElement.classList.remove("hp-custom-cursor-hidden");
      const existing = document.getElementById("hp-custom-cursor-style");
      if (existing) {
        existing.remove();
      }
    };
  }, [hideDefaultCursor]);

  return (
    <CursorContext.Provider value={{ cursorPos, isActive, containerRef, cursorRef }}>
      <div ref={containerRef} data-slot="cursor-provider" className={className}>
        {children}
      </div>
    </CursorContext.Provider>
  );
}

function Cursor({ children, className = "", style, ...props }) {
  const { cursorPos, isActive, cursorRef } = useCursor();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  React.useEffect(() => {
    x.set(cursorPos.x);
    y.set(cursorPos.y);
  }, [cursorPos, x, y]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          ref={cursorRef}
          data-slot="cursor"
          className={`pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 ${className}`}
          style={{ x, y, ...style }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const TargetCursor = ({ hideDefaultCursor = true }) => {
  if (isTouchDevice()) return null;

  const PointerShape = () => (
    <svg width="26" height="34" viewBox="0 0 26 34" fill="none" aria-hidden>
      <path
        d="M3 3L23 14.5L14.2 17.2L10.8 30L3 3Z"
        fill="#3B82F6"
        stroke="#60A5FA"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <CursorProvider hideDefaultCursor={hideDefaultCursor} className="pointer-events-none fixed inset-0 z-[9998]">
      <Cursor className="rotate-[-14deg] drop-shadow-[0_8px_12px_rgba(59,130,246,0.35)]">
        <PointerShape />
      </Cursor>
    </CursorProvider>
  );
};

export default TargetCursor;
