import Link from "next/link";

import { FaReact } from "react-icons/fa";
import CircularText from "./CircularText";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/Harsh.pdf"
        target="_blank"
        rel="noreferrer noopener"
        className="relative flex items-center justify-center w-[200px] h-[200px]"
        aria-label="Open resume"
      >
        <CircularText
          text="MY RESUME * MY RESUME * "
          onHover="speedUp"
          spinDuration={42}
          className="text-white/90"
        />
        <span className="absolute inset-0 flex items-center justify-center text-4xl text-accent">
          <FaReact aria-hidden />
        </span>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
