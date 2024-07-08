import React from 'react'
import { motion } from "framer-motion"

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4" className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-growng tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className=' pt-6 w-full border-t-[1px] mt-20 border-[#9fb359] flex justify-center '>
            <div className='w-1/2'>
            <h1 className='text-6xl pb-5 font-["Neue_Montreal"]'>Our approach:</h1>
            <motion.button whileHover={{ scale: 1.2 }} onHoverStart={e => {}} onHoverEnd={e => {}} className='px-10 py-6 bg-zinc-900 rounded-full uppercase text-white flex items-center gap-5'>Read More
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </motion.button>
            </div>
            <div className='w-1/2 h-[80vh] bg-[#9fb359] rounded-3xl'></div>
        </div>
    </div>
  )
}

export default About