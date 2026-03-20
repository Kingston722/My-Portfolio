import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/Harsh.pdf"
        target="_blank"
        rel="noreferrer noopener"
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <svg
          viewBox="0 0 160 160"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] pointer-events-none select-none"
          aria-hidden
        >
          <defs>
            <path
              id="resume-ring-path"
              d="M 80,80 m -52,0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
            />
          </defs>
          <text
            fill="rgba(255, 255, 255, 0.92)"
            fontSize="15"
            fontWeight="700"
            letterSpacing="2"
          >
            <textPath
              href="#resume-ring-path"
              startOffset="0%"
              lengthAdjust="spacing"
              textLength="327"
            >
              {"MY RESUME"}
              {" \u2022 \u00A0\u00A0"}
              {"MY RESUME"}
              {" \u2022 \u00A0\u00A0"}
            </textPath>
          </text>
        </svg>
        <HiArrowRight
          className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"
          aria-hidden
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
