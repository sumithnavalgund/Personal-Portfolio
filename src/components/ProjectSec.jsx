import React from 'react'
import LaborLoom from '../assets/LaborLoom.png'
import Lona from '../assets/Lona.png'
import { ArrowRight } from "lucide-react"
import { motion } from 'framer-motion'

const ProjectSec = () => {
  return (
    <div className='bg-zinc-800 text-3xl sm:text-5xl md:text-7xl flex flex-col font-extrabold p-4 sm:p-8 md:p-20 leading-normal sm:leading-relaxed gap-8 sm:gap-10 md:gap-15'>
      <div>
        <h1>A reflection of <span className='text-amber-300'>creativity.</span></h1>
        <h3 className='text-xl sm:text-2xl md:text-4xl mt-4'>these are a glimpse into my recent work</h3>
      </div>

      <div className='bg-gray-300 flex flex-col sm:flex-row flex-wrap p-4 sm:p-8 md:p-20 rounded-xl items-center justify-around gap-8'>
        <motion.img 
          whileHover={{ scale: 1.05 }}
          className='w-full sm:w-[400px] md:w-[530px] h-auto aspect-video object-cover rounded-lg shadow-lg' 
          src={LaborLoom} 
          alt="LaborLoom Project" 
        />
        <motion.img 
          whileHover={{ scale: 1.05 }}
          className='w-full sm:w-[400px] md:w-[530px] h-auto aspect-video object-cover rounded-lg shadow-lg' 
          src={Lona} 
          alt="Lona Project" 
        />
      </div>

      <div className="flex items-center justify-end text-xl sm:text-2xl md:text-4xl relative">
        <a className="mr-2 hover:cursor-pointer active:scale-95" href='https://github.com/md-rosh02' target='blank'>
          <span className='text-pink-700'>skills,</span> all my <br /> work right here!
        </a>
        <motion.div
          className="flex items-center"
          initial={{ x: 0 }}
          animate={{ x: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1,
          }}
        >
          <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-900 hover:cursor-pointer active:scale-95" />
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectSec