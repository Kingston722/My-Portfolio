import { motion } from "framer-motion";

import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
import TextType from "../components/TextType";
import ProjectsBtn from "../components/ProjectsBtn";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-transparent min-h-[calc(100dvh-72px)] md:h-full">
      {/* text */}
      <div className="w-full min-h-[calc(100dvh-72px)] md:h-full bg-gradient-to-r from-black/20 via-black/40 to-black/20">
        <div className="min-h-[calc(100dvh-72px)] md:h-full container mx-auto px-4 xl:px-0">
          <div className="min-h-[calc(100dvh-72px)] md:h-full flex flex-col xl:flex-row items-start xl:items-center justify-start md:justify-center xl:justify-between gap-8 xl:gap-16 pt-20 md:pt-28 xl:pt-32 pb-16 md:pb-0">
            <div className="w-full max-w-2xl text-left">
              {/* title */}
              <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h1"
              >
                Transforming Ideas <br /> Into{" "}
                <span className="text-accent">Digital Reality</span>
              </motion.h1>

              {/* subtitle */}
              <motion.p
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="max-w-sm xl:max-w-xl mb-10 xl:mb-16"
              >
                I design and build reliable software experiences, blending strong
                CS fundamentals with practical development to turn ideas into
                meaningful digital products.
              </motion.p>

              {/* btn */}
              <div className="relative flex justify-start xl:hidden">
                <ProjectsBtn mobile />
              </div>
              <motion.div
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="hidden xl:flex"
              >
                <ProjectsBtn />
              </motion.div>
            </div>

            <motion.div
              variants={fadeIn("left", 0.35)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-2 flex self-center xl:self-auto flex-col items-center justify-center w-[220px] sm:w-[250px] md:w-[280px] xl:w-[330px] md:-mt-14 xl:-mt-20 md:-translate-x-16 xl:-translate-x-32"
            >
              <div className="relative rounded-[2.25rem] p-[3px] bg-gradient-to-b from-accent/90 via-cyan-400/35 to-cyan-300/70 shadow-[0_0_50px_rgba(91,192,190,0.3)]">
                <div className="relative w-[220px] h-[300px] sm:w-[250px] sm:h-[340px] md:w-[280px] md:h-[380px] xl:w-[330px] xl:h-[450px] rounded-[2rem] overflow-hidden bg-[#111326]/70 backdrop-blur-sm border border-white/15">
                  <img
                    src="/my-photo.png"
                    alt="Harshvardhan Poredi"
                    className="h-full w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.src = "/avatar.png";
                    }}
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0c1028]/50 via-transparent to-transparent"
                    aria-hidden
                  />

                  <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-accent/80 rounded-tl-xl" />
                  <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-cyan-300/80 rounded-br-xl" />
                </div>
              </div>

              <div className="mt-4 h-[52px] xl:h-[62px] w-full flex items-start justify-center text-center">
                <TextType
                  text="Hello I am Harshvardhan Poredi!!"
                  as="p"
                  className="mt-1 text-xl xl:text-3xl font-medium text-white/90 whitespace-nowrap text-center"
                  typingSpeed={55}
                  deletingSpeed={28}
                  pauseDuration={1800}
                  loop
                  showCursor
                  hideCursorWhileTyping
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <GravityStarsBackground className="absolute inset-0 rounded-xl pointer-events-none" />
    </div>
  );
};

export default Home;
