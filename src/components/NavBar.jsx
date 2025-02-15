import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const NavBar = ({ onClick }) => {
  const { scrollYProgress } = useScroll();
  const rotateValue = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleResumeDownload = (e) => {
    e.preventDefault();
    setIsDownloading(true);

    setTimeout(() => {
      setIsDownloading(false);
      const link = document.createElement("a");
      link.href = "../assets/Mohammed_Roshan_Resume.pdf";
      link.download = "Mohammed_Roshan_Resume.pdf";
      link.click();
    }, 1000);
  };

  const handleArrowClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center flex-wrap font-extrabold justify-between px-4 sm:px-8 md:px-20 py-4 sm:py-8 fixed w-full z-40">
      {/* Heading */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-3xl sm:text-4xl md:text-6xl"
      >
        <span className="text-blue-400">JR.</span>Sumith
      </motion.h1>

        <motion.a
          onClick={handleArrowClick}
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 hover:bg-cyan-500 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
          href="#"
        >
          <motion.svg
            style={{ rotate: rotateValue }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-white"
          >
            <circle cx="12" cy="12" r="11" fill="none" stroke="white" strokeWidth="2" />
            <path
              d="M12 8v8m0 0l-4-4m4 4l4-4"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.a>
      <div className="flex items-center gap-4 justify-around">
        {/* Rotating Arrow Button */}

        {/* Resume Button */}
        <motion.button
          onClick={handleResumeDownload}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          whileDrag={{ scale: 0.9 }}
          drag
          dragConstraints={{
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
          }}
          className={`text-base sm:text-xl md:text-2xl font-bold rounded-4xl px-3 sm:px-4 md:px-5 py-1 sm:py-2 hover:cursor-pointer active:scale-90 shadow-blue-500/50 
            transition duration-300 ease-in-out shadow-[0_0_10px_5px_rgba(59,130,246,0.8)] ${
              isDownloading ? "bg-gray-500" : "bg-blue-700"
            }`}
        >
          {isDownloading ? "Getting..." : "Get Resume"}
        </motion.button>
      </div>
    </div>
  );
};

export default NavBar;