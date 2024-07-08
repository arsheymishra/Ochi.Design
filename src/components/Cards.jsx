import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex items-center px-32 gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className='relative card w-full h-full bg-[#004d43] rounded-xl flex justify-center items-center'>
                <img className='' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-4 bottom-4 px-5 py-1 border-2 rounded-full text-[#CDEA68] border-[#CDEA68]'>&copy;2019-2022</button>
            </div>
        </div>
        <div className='cardcontainer h-[50vh] w-1/2 flex gap-5'>
            <div className='relative card w-1/2 h-full bg-[#112321] rounded-xl flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute left-4 bottom-4 px-5 py-1 border-2 rounded-full text-[#CDEA68] border-[#CDEA68]'>&copy;2019-2022</button>
            </div>
            <div className='relative card w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center'>
                <img className='h-20 w-20' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute left-4 bottom-4 px-5 py-1 border-2 rounded-full text-[#CDEA68] border-[#CDEA68]'>&copy;2019-2022</button>
            </div>
        </div>
    </div>
  )
}

export default Cards 