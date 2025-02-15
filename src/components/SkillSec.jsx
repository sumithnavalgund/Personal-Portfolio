import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillSec = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const icons = [
    'react',
    'tailwind',
    'cpp',
    'js',
    'java',
    'html',
    'css',
    'c',
    'express',
    'mongodb',
    'mysql',
    'nextjs',
    'nodejs',
    'npm',
    'py',
    'vscode',
    'windows',
    'linux',
    'kali',
    'git',
  ];

  return (
    <div className="bg-zinc-900 text-3xl sm:text-5xl md:text-7xl font-extrabold p-4 sm:p-8 md:p-20 leading-normal">
      <h1>
        Things I'm <span className="text-blue-700">good</span> at
      </h1>
      <h2 className="text-xl sm:text-3xl md:text-5xl mt-4">skills, interests, passion and hobbies</h2>

      <button className="text-xl sm:text-2xl md:text-4xl border-2 px-3 sm:px-4 py-1 sm:py-2 mt-8 sm:mt-12 md:mt-20 rounded-md">
        development
      </button>
      
      <div className="mt-6 sm:mt-8 md:mt-10">
        <motion.div
          ref={ref}
          className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-10 gap-3 sm:gap-6 md:gap-10"
        >
          {icons.map((icon, index) => (
            <motion.img
              key={icon}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={iconVariants}
              whileHover={{ scale: 1.2 }}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={icon}
            />
          ))}
        </motion.div>
      </div>

      <button className="text-xl sm:text-2xl md:text-4xl border-2 px-3 sm:px-4 py-1 sm:py-2 mt-8 sm:mt-12 md:mt-20 rounded-md">
        designing
      </button>
      
      <div className="mt-6 sm:mt-8 md:mt-10">
      <motion.div
  ref={ref}
  className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
>
  {['ps', 'figma', 'wordpress'].map((icon, index) => (
    <motion.img
      key={icon}
      custom={index}
      initial="hidden"
      animate={controls}
      variants={iconVariants}
      whileHover={{ scale: 1.2 }}
      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
      src={`https://skillicons.dev/icons?i=${icon}`}
      alt={icon}
    />
  ))}
</motion.div>

      </div>
    </div>
  );
};

export default SkillSec;