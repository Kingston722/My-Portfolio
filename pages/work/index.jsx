import { motion } from "framer-motion";

// import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import CircularGallery from "../../components/CircularGallery";
import { fadeIn } from "../../variants";

const projects = [
  {
    title: "C.F.T.C (Charge For The Charged)",
    image: "/thumb1.jpg",
    description:
      "Android-based IoT app that rewards sustainable energy generation during transportation. Features real-time tracking, QR rewards, and an AI helper for guidance and navigation.",
    stack: [
      "Android (Java)",
      "Firebase Auth",
      "Firebase Realtime DB",
      "ESP32",
      "ThingSpeak",
      "Dialogflow",
    ],
    liveLink: "https://cftc.netlify.app/",
  },
  {
    title: "Saksham - AI Student Wellness",
    image: "/thumb2.jpg",
    description:
      "Full-stack counselling and wellness platform with secure booking, RBAC, AI-assisted guidance, and a peer support forum for student wellbeing.",
    stack: [
      "Spring Boot",
      "PostgreSQL",
      "React",
      "Redux Toolkit",
      "JWT",
      "OpenRouter",
    ],
    liveLink: "",
  },
  {
    title: "Janmanch - Civic Engagement",
    image: "/thumb3.jpg",
    description:
      "Civic grievance platform with complaint tracking, ward updates, voting, and citizen dashboards to improve transparency and local participation.",
    stack: [
      "React",
      "Tailwind",
      "Node/Express",
      "MongoDB",
      "REST APIs",
      "JWT",
    ],
    liveLink: "",
  },
];

const Work = () => {
  return (
    <div className="min-h-full bg-primary/30 pt-28 pb-28 md:py-24 xl:py-36">
      <Circles />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            My Projects <span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-10 max-w-[560px] mx-auto px-1"
          >
            A curated list of my projects with concise descriptions, architecture
            highlights, and outcomes. Swipe or drag the gallery to explore.
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="relative h-[520px] md:h-[600px]"
        >
          <CircularGallery
            items={projects.map((project) => ({
              image: project.image,
              text: project.title,
            }))}
            textColor="#ffffff"
            borderRadius={0.05}
            bend={0}
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </motion.div>

        <div className="mt-10 overflow-x-auto pb-4">
          <div className="flex gap-6 w-max pr-4">
            {projects.map((project) => (
              <article
                key={project.title}
                className="w-[320px] sm:w-[360px] rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <div className="relative w-full h-[190px] rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 space-y-3">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{project.description}</p>
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-accent mb-2">Tech stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] leading-tight px-2 py-1 rounded-full bg-white/10 text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 text-sm tracking-[0.15em] text-accent hover:text-white transition-colors duration-300"
                    >
                      VIEW LIVE
                    </a>
                  ) : (
                    <p className="text-xs tracking-[0.12em] text-white/50">LIVE LINK NOT PROVIDED</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      {/* <Bulb /> */}
    </div>
  );
};

export default Work;
