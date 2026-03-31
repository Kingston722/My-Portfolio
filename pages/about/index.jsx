import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaAndroid,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiSpringboot,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiPostman,
  SiVisualstudiocode,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programming Languages",
        icons: [SiCplusplus, FaPython, FaJava],
      },
      {
        title: "Frontend & Backend",
        icons: [FaReact, SiNodedotjs, SiSpringboot],
      },
      {
        title: "Mobile Development",
        icons: [FaAndroid, FaJava],
      },
      {
        title: "Databases",
        icons: [SiPostgresql, SiMysql, SiMongodb, SiFirebase, SiSupabase],
      },
      {
        title: "Developer Tools",
        icons: [SiGit, SiPostman, SiVisualstudiocode],
      },
      
    ],
  },
  {
    title: "achievements",
    info: [
      {
        title: "1st Place - Innoveda Conference (Technical Research Presentation)",
        stage: "2026",
      },
      {
        title: "2nd Place - Reverse Hackathon Praxis",
        stage: "2025",
      },
      {
        title: "1st Place - State-Level Project Competition, Vidyalankar Institute of Technology",
        stage: "2024",
      },
      {
        title: "Solved 300+ Data Structures and Algorithms problems",
        stage: "GeeksforGeeks & LeetCode",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "DRDO - Defence Research and Development Organisation, Pune",
        stage: "Intern | June 2025 - August 2025",
        description: [
          "Built a Python simulation of a 7-DOF dual-arm robotic system using PyBullet",
          "Implemented motion planning and kinematics for real-time manipulation",
          "Improved system reliability through structured testing",
          "Completed 50+ simulation runs with comprehensive technical documentation",
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
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Pimpri Chinchwad College of Engineering, Pune",
        stage: "B.Tech in Information Technology | Expected May 2027 | CGPA: 9.12",
      },
      {
        title: "Bharati Vidyapeeth Institute of Technology, Navi Mumbai",
        stage: "Diploma in Computer Engineering | May 2024 | Percentage: 93.83%",
      },
      {
        title: "Fravashi Academy, Nashik",
        stage: "Secondary School Certificate | May 2021 | Percentage: 92.5%",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 pt-28 pb-28 md:pt-32 md:pb-12 xl:py-32 text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Computer Science Student & <span className="text-accent">Developer</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[560px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Software engineering student with strong foundations in Data
            Structures, Algorithms, and Operating Systems. Experienced in
            Python and C++ with hands-on simulation, backend systems, and
            problem-solving work across real-world scenarios.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* internship */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={4} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[110px]">
                  Internship experience.
                </div>
              </div>

              {/* dsa */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={300} duration={4} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[110px]">
                  DSA problems solved.
                </div>
              </div>

              {/* academic score */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={9.12} decimals={2} duration={4} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
                  Current CGPA.
                </div>
              </div>

              {/* achievements */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={4} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
                  Competition wins.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] min-h-[420px] md:h-[480px]"
        >
          <div className="flex flex-wrap gap-4 xl:gap-x-8 mb-4 justify-start">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize text-sm sm:text-base xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-4 xl:gap-y-6 items-start w-full">
            {aboutData[index].info.map((item, itemI) => (
              <div key={itemI} className="flex-1 flex flex-col gap-y-3 w-full text-left items-start">
                {/* title and stage */}
                <div className="flex flex-col gap-y-1">
                  <div className="font-light text-white text-sm md:text-base">
                    {item.title}
                  </div>
                  <div className="text-xs md:text-sm text-white/50">
                    {item.stage}
                  </div>
                </div>

                {/* icons for skills */}
                {item.icons && item.icons.length > 0 && (
                  <div className="flex gap-x-3 justify-start">
                    {item.icons.map((Icon, iconI) => (
                      <div key={iconI} className="text-2xl text-white/80 hover:text-accent transition-colors">
                        <Icon />
                      </div>
                    ))}
                  </div>
                )}

                {/* description for experience */}
                {item.description && (
                  <ul className="list-disc list-inside text-white/60 text-left text-xs md:text-sm space-y-2 max-w-[560px]">
                    {item.description.map((desc, descI) => (
                      <li key={descI}>
                        {desc}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
