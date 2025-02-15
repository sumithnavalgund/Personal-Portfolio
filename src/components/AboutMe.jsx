import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const AboutMe = () => {
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <motion.div className="relative">
      {/* Progress Bar */}
      <motion.div
        style={{ scaleX: smoothScroll }}
        className="fixed top-0 left-0 right-0 h-2 bg-blue-500 origin-left z-50"
      />

      {/* Main Content */}
      <motion.div
        className="flex px-4 sm:px-8 md:px-40 items-center justify-center flex-col text-xl sm:text-3xl md:text-7xl font-extrabold gap-4 mt-20 sm:mt-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Greetings */}
        <motion.h1 className="font-[Caveat]" variants={itemVariants}>
          Hii!
        </motion.h1>

        {/* About Text */}
        <motion.h1
          variants={itemVariants}
          className="tracking-wider text-center leading-normal md:leading-relaxed font-[Caveat]"
        >
          I'm Sumith, a full Stack <br /> Web-Dev. & Software-Dev.
        </motion.h1>

        <motion.h1
          variants={itemVariants}
          className="tracking-wider text-center leading-normal md:leading-relaxed font-[Caveat]"
        >
          I thrive on solving complex{" "}
          <motion.span
            className="text-red-400 hover:line-through hover:cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            problems
          </motion.span>{" "}
          and turning{" "}
          <motion.span
            className="text-amber-200 hover:line-through hover:cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            ideas
          </motion.span>{" "}
          into reality through code.
        </motion.h1>

        {/* Recent Project */}
        <motion.h1
          variants={itemVariants}
          className="tracking-wider text-center leading-normal md:leading-relaxed font-[Caveat]"
        >
          My recent project,{" "}
          <motion.span
            className="drop-shadow-[0_2px_4px_rgba(56,189,248,0.8)] hover:cursor-pointer hover:line-through"
            whileHover={{ scale: 1.1 }}
          >
            LaborLoom
          </motion.span>
          , connects laborers with contractors, showcasing my ability to create
          user-focused platforms.
        </motion.h1>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 text-base sm:text-lg md:text-4xl mt-8 mb-10"
          variants={itemVariants}
        >
          <motion.button
            className="bg-emerald-600 px-3 sm:px-4 py-2 rounded-lg text-white hover:bg-emerald-500 active:scale-90 text-lg sm:text-xl md:text-2xl hover:cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hi 👋
          </motion.button>

          <motion.button
            onClick={() => {
              window.open('https://github.com/md-rosh02')
            }}
            className="bg-blue-600 px-3 sm:px-4 py-2 rounded-lg text-lg sm:text-xl md:text-2xl flex items-center gap-2 text-white hover:bg-blue-500 active:scale-90 hover:cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.091.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.152-1.11-1.46-1.11-1.46-.908-.621.069-.608.069-.608 1.004.07 1.531 1.032 1.531 1.032.892 1.528 2.341 1.087 2.911.831.091-.647.35-1.086.636-1.337-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.853.004 1.711.115 2.515.337 1.908-1.295 2.747-1.026 2.747-1.026.546 1.378.203 2.395.1 2.647.641.7 1.029 1.591 1.029 2.682 0 3.841-2.339 4.687-4.566 4.934.36.31.678.923.678 1.859 0 1.342-.012 2.425-.012 2.753 0 .267.18.577.688.479C19.136 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
            Watch my Gitty
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;