import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20 '>
        <div className='w-full px-10 border-b-[1px] border-zinc-700 pb-10'>
            <h1 className='font-["Neue_Montreal"] tracking-tight  text-5xl'>Featured projects</h1>
        </div>
        <div className='cards w-full  flex gap-5 p-5'>
        <div className=' relative cardContainer w-1/2 h-[90vh]'>
        <h1 className='absolute left-full font-semibold -translate-x-1/2 top-1/2 text-[#cdea68] -translate-y-1/2 z-[9] text-6xl leading-none tracking-tighter'>{"FYDE".split('').map((item,index)=><span>{item}</span>)}</h1>
        <div className='card w-full h-full rounded-xl overflow-hidden'>
        <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
        </div>
        </div>
        <div className=' relative cardcontainer w-1/2 h-[90vh]'>
        <h1 className='absolute right-full font-semibold translate-x-1/2 top-1/2 text-[#cdea68] -translate-y-1/2 z-[9] text-6xl leading-none tracking-tighter'>
        {"VISE".split('').map((item,index)=><span>{item}</span>)}
        </h1>
        <div className='card w-full h-full rounded-xl overflow-hidden'>
        <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Featured