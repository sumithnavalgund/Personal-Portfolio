import React from 'react';
import { motion } from 'framer-motion';

const ProjectRow = ({ year, title, description }) => {
  return (
    <motion.div
      className="group relative border-b-2 py-3 sm:py-4 md:py-5 px-2"
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className="absolute top-0 left-0 h-full w-full bg-white origin-left"
        initial={{ scaleX: 0 }}
        variants={{
          hover: {
            scaleX: 1,
          }
        }}
        style={{ originX: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <div className="grid grid-cols-[1fr_2fr_2fr] gap-2 sm:gap-3 md:gap-4 items-center text-base sm:text-xl md:text-3xl relative z-10">
        <motion.h1
          className="text-left"
          variants={{
            hover: { color: '#000000' }
          }}
          transition={{ duration: 0.15 }}
        >
          {year}
        </motion.h1>
        <motion.h1
          className="text-center"
          variants={{
            hover: { color: '#000000' }
          }}
          transition={{ duration: 0.15 }}
        >
          {title}
        </motion.h1>
        <motion.h1
          className="text-right text-sm sm:text-base md:text-xl"
          variants={{
            hover: { color: '#000000' }
          }}
          transition={{ duration: 0.15 }}
        >
          {description}
        </motion.h1>
      </div>
    </motion.div>
  );
};

const ProjSec = () => {
  const projects = [
    { year: '2025', title: 'LaborLoom', description: 'Bridge b/w labor & contractor' },
    { year: '2024', title: 'ExplorerAura', description: 'Travel Web.' },
    { year: '2023', title: 'Food-Rest', description: 'Food Restaurant Web.' },

  ];

  return (
    <div className="bg-zinc-900 text-white text-5xl sm:text-4xl md:text-7xl font-extrabold p-8 sm:p-8 md:p-20 leading-normal">
      <h1>
        watch my more <span className="text-yellow-500">artworld</span>
      </h1>

      <div className="flex flex-col mt-6 sm:mt-8 md:mt-10 mb-15">
        {projects.map((project, index) => (
          <ProjectRow
            key={index}
            year={project.year}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjSec;