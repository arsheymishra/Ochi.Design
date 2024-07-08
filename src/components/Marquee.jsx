import React from 'react'
import { motion } from "framer-motion"

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed =".2" className='w-full rounded-tl-3xl rounded-tr-3xl py-20 bg-[#004d43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden ">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}}  className='text-[17vw] leading-none font-["Founders_GRotesk_X_Condensed"] uppercase font-semibold pt-5 -mb-12 pr-10 '>we are ochi </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}}  className='text-[17vw] leading-none font-["Founders_GRotesk_X_Condensed"] uppercase font-semibold pt-5 -mb-12 pr-10 '>we are ochi </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}}  className='text-[17vw] leading-none font-["Founders_GRotesk_X_Condensed"] uppercase font-semibold pt-5 -mb-12 pr-10 '>we are ochi </motion.h1>
            
        </div>
    </div>
   
  )
}
export default Marquee