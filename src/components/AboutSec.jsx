import React from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/about.jpg'

const AboutSec = () => {
  return (
    <div className='flex flex-col items-center relative top-20 sm:top-28 md:top-36 px-4 sm:px-8 md:px-40 text-clip gap-4 sm:gap-6 md:gap-10'>
      <motion.h1
        className='text-2xl sm:text-3xl md:text-5xl font-extrabold font-[Caveat] mt-5 mb-5 text-center'
      >
        Who Am I? Let My Work Speak for Me.
      </motion.h1>
      <motion.img 
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
        drag
        dragConstraints={{
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
        className='w-full max-w-[1000px] h-auto aspect-video object-cover rounded-lg shadow-xl hover:cursor-grab active:cursor-grabbing' 
        src={logo} 
        alt="About Me" 
      />
    </div>
  )
}

export default AboutSec