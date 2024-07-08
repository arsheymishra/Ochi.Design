import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";
import { motion } from "framer-motion"

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-scree pt-1 bg-zinc-900'>
        <div className='textStructure mt-40 px-20'>
            {["we create","eye opening","presentations"].map((item,index)=>{
                return <div className='maske'>
                <div className='w-fit flex items-end overflow-hidden'>
                    {index === 1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className='overflow-hidden rounded-md mr-[1vw] w-[8vw] h-[5.7vw] -top-[1.2vw] relative'>
                        <img className='h-full' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                    </motion.div>)}
                <h1 className="pt-[2vw] -mb-[1vw] uppercase leading-[.75] text-[9vw] font-['Founders_Grotesk_X_Condensed'] font-medium">{item}</h1>
                </div>
            </div>
            })}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-10 flex justify-between items-center px-20 py-3'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
                <p className='text-md font-light tracking-tight leading-none '>{item}</p>
            ))}
            <div className="start flex items-center gap-5">
            <div className='px-5 py-2 rounded-full border-[2px] text-light text-md border-zinc-500 uppercase'>start the project</div>
            <div className='w-10 h-10 rounded-full  border-zinc-400 border-[1px] flex items-center justify-center'>
                <motion.span whileHover={{ scale: 1.2, rotate: 45 }} whileTap={{scale: 0.8, rotate: -90,borderRadius: "100%"}} className=''><FaLongArrowAltUp /></motion.span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage