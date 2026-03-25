import * as React from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

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

    const handleMouseLeave = () => setIsActive(false);
    const handleBlur = () => setIsActive(false);

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

    document.body.style.cursor = isActive ? "none" : "";
    return () => {
      document.body.style.cursor = "";
    };
  }, [hideDefaultCursor, isActive]);

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

function getOffsetForAlign(align, sideOffset, width, height) {
  switch (align) {
    case "center":
      return { x: -width / 2, y: -height / 2 };
    case "top":
      return { x: -width / 2, y: -(height + sideOffset) };
    case "top-left":
      return { x: -(width + sideOffset), y: -(height + sideOffset) };
    case "top-right":
      return { x: sideOffset, y: -(height + sideOffset) };
    case "bottom":
      return { x: -width / 2, y: sideOffset };
    case "bottom-left":
      return { x: -(width + sideOffset), y: sideOffset };
    case "left":
      return { x: -(width + sideOffset), y: -height / 2 };
    case "right":
      return { x: sideOffset, y: -height / 2 };
    case "bottom-right":
    default:
      return { x: sideOffset, y: sideOffset };
  }
}

function CursorFollow({
  sideOffset = 15,
  align = "bottom-right",
  transition = { stiffness: 500, damping: 50, bounce: 0 },
  children,
  className = "",
  style,
  ...props
}) {
  const { cursorPos, isActive } = useCursor();
  const cursorFollowRef = React.useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, transition);
  const springY = useSpring(y, transition);

  React.useEffect(() => {
    const rect = cursorFollowRef.current?.getBoundingClientRect();
    const width = rect?.width || 0;
    const height = rect?.height || 0;
    const offset = getOffsetForAlign(align, sideOffset, width, height);

    x.set(cursorPos.x + offset.x);
    y.set(cursorPos.y + offset.y);
  }, [align, sideOffset, cursorPos, x, y]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          ref={cursorFollowRef}
          data-slot="cursor-follow"
          className={`pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2 ${className}`}
          style={{ x: springX, y: springY, ...style }}
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

const TargetCursor = ({ hideDefaultCursor = true, sideOffset = 16, align = "bottom-right" }) => {
  if (isTouchDevice()) return null;

  return (
    <CursorProvider hideDefaultCursor={hideDefaultCursor} className="pointer-events-none fixed inset-0 z-[9998]">
      <Cursor className="h-7 w-7 rounded-full border border-white/60 bg-white/5 backdrop-blur-[1px]">
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      </Cursor>

      <CursorFollow
        align={align}
        sideOffset={sideOffset}
        className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_14px_rgba(241,48,36,0.75)]"
      />
    </CursorProvider>
  );
};

export default TargetCursor;
