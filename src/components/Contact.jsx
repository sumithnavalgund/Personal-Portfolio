import React from 'react'

const Contact = () => {
  return (
    <div className='text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold p-4 sm:p-8 md:p-20 leading-normal sm:leading-14 md:leading-33 vs'>
      <h1>
        You can always drop me a message on{' '}
        <a 
          target='blank' 
          href='https://www.instagram.com/_i_wren_lix/' 
          className='text-pink-900 hover:cursor-pointer hover:line-through'
        >
          Instagram
        </a>{' '}
        or{' '}
        <a 
          href='https://www.linkedin.com/in/mohammed-roshan02/' 
          className='text-blue-400 hover:cursor-pointer hover:line-through' 
          target='blank'
        >
          LinkedIn
        </a>
        , or send me an{' '}
        <a 
          target='blank' 
          href="mailto:mohammedajeez2004@gmail.com?subject=Hi%20Bilal!" 
          className='text-emerald-500 hover:line-through hover:cursor-pointer'
        >
          mail
        </a>
        .
      </h1>
    </div>
  )
}

export default Contact