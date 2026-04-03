import Link from "next/link";
import { motion } from "framer-motion";

import { FileText } from "lucide-react";
import CircularText from "./CircularText";

const ProjectsBtn = ({ mobile = false }) => {
  if (mobile) {
    return (
      <div className="flex w-full justify-center">
        <Link
          href="/Harsh.pdf"
          target="_blank"
          rel="noreferrer noopener"
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl border border-accent/70 bg-accent/10 px-6 py-3 font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent/20 hover:shadow-[0_12px_28px_rgba(91,192,190,0.35)] active:translate-y-0"
          aria-label="Open resume"
        >
          <span
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent/35 to-transparent transition-transform duration-500 group-hover:translate-x-full"
            aria-hidden
          />
          <span className="relative">View Resume</span>
          <motion.span
            className="relative text-accent transition-colors duration-300 group-hover:text-white"
            animate={{ y: [0, -1.5, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <FileText size={18} strokeWidth={2.3} aria-hidden />
          </motion.span>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/Harsh.pdf"
        target="_blank"
        rel="noreferrer noopener"
        className="group relative flex items-center justify-center w-[200px] h-[200px] transition-transform duration-300 hover:scale-[1.03]"
        aria-label="Open resume"
      >
        <CircularText
          text="MY RESUME * MY RESUME * "
          onHover="speedUp"
          spinDuration={42}
          className="text-white/90"
        />
        <span className="absolute inset-0 flex items-center justify-center text-accent transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
          <FileText size={40} strokeWidth={2.2} aria-hidden />
        </span>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
