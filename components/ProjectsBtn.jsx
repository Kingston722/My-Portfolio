import Link from "next/link";

import { FileText } from "lucide-react";
import CircularText from "./CircularText";

const ProjectsBtn = () => {
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
