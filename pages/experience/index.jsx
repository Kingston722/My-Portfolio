import { motion } from "framer-motion";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

const experiences = [
  {
    title: "DRDO - Defence Research and Development Organisation, Pune",
    stage: "Intern | June 2025 - August 2025",
    description: [
      "Built a Python simulation of a 7-DOF dual-arm robotic system using PyBullet",
      "Implemented motion planning and kinematics for real-time manipulation",
      "Improved system reliability through structured testing",
    ],
  },
  {
    title: "GDGC PCCOE, Pune",
    stage: "Android Executive | September 2024 - May 2025",
    description: [
      "Contributed Android features using Firebase to improve app performance by ~15%",
      "Delivered 5+ technical sessions for the team on mobile development workflows",
      "Collaborated on feature planning and release readiness across squads",
    ],
  },
  {
    title: "Lotus Educare Academy",
    stage: "Web Development Intern | June 2023 - July 2023",
    description: [
      "Built full-stack features with HTML, CSS, JavaScript, and MySQL",
      "Integrated backend data flows to support internal dashboards",
      "Improved UI responsiveness by ~20% through layout and performance fixes",
    ],
  },
];

const Experience = () => {
  return (
    <div className="h-full bg-transparent pt-28 pb-[calc(11rem+env(safe-area-inset-bottom))] md:pt-32 md:pb-12 xl:py-32">
      <Circles />
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-left"
        >
          Experience <span className="text-accent">.</span>
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.35)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-[640px] text-white/60 mb-12"
        >
          A snapshot of roles and responsibilities across research, community leadership,
          and product development.
        </motion.p>

        <div className="relative">
          <div
            className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-[2px] bg-white/5"
            aria-hidden
          />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                variants={fadeIn(index % 2 === 0 ? "right" : "left", 0.2 + index * 0.1)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className={`relative md:flex md:items-start ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div
                  className={`absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-6 h-3.5 w-3.5 rounded-full border border-accent/60 bg-accent/80 shadow-[0_0_0_6px_rgba(91,192,190,0.12)]`}
                  aria-hidden
                />
                <div
                  className={`ml-8 md:ml-0 md:w-[46%] rounded-2xl border border-white/10 bg-white/4 p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/8 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-white">
                      {experience.title}
                    </h3>
                    <p className="text-sm text-accent font-medium">
                      {experience.stage}
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc list-inside">
                    {experience.description.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
