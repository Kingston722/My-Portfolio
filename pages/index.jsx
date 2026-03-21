import { motion } from "framer-motion";

import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
import TextType from "../components/TextType";
import ProjectsBtn from "../components/ProjectsBtn";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="h-full container mx-auto px-4 xl:px-0">
          <div className="h-full flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-10 xl:gap-16 pt-24 md:pt-28 xl:pt-32 pb-20 md:pb-0">
            <div className="text-center xl:text-left max-w-2xl">
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
                className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
              >
                I design and build reliable software experiences, blending strong
                CS fundamentals with practical development to turn ideas into
                meaningful digital products.
              </motion.p>

              {/* btn */}
              <div className="flex justify-center xl:hidden relative">
                <ProjectsBtn />
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
              className="hidden md:flex flex-col items-center justify-center w-[280px] xl:w-[330px] md:-mt-6 xl:-mt-10 xl:-translate-x-10"
            >
              <div className="relative rounded-[2.25rem] p-[3px] bg-gradient-to-b from-accent/90 via-pink-500/40 to-cyan-300/70 shadow-[0_0_50px_rgba(241,48,36,0.25)]">
                <div className="relative w-[280px] h-[380px] xl:w-[330px] xl:h-[450px] rounded-[2rem] overflow-hidden bg-[#111326]/70 backdrop-blur-sm border border-white/15">
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
