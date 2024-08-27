import React from 'react'
import Arow from '../assets/Arow.png'
import Sta from '../assets/sta.png'

const Last = () => {
  return (
    <div className="relative">

      <div className="flex flex-col items-center pt-24 px-4 md:px-8">
        <div className="relative w-full max-w-screen-lg">
          <div className="card h-72 w-full bg-[#f5f7f8] shadow-md rounded-tl-[130px] rounded-md ">
            <div className='relative top-6 hidden sm:block'><img className="absolute bottom-[20%] right-[-10%] h-12 w-12 md:bottom-[30%] md:right-[-20px]" src={Arow} alt="Arrow" /></div>

            <p className="text-[#5E6282] pt-10 mx-auto w-5/6 text-2xl md:text-3xl font-bold text-center">
              Subscribe to get information, latest news and other interesting offers about Jadoo
            </p>
            <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center pt-8'>
              <input className='w-full md:w-80 h-14 rounded-lg bg-white text-[#39425D] p-5' placeholder={`✉️ Your email`} />
              <button className='bg-[#FF7D68] text-white rounded-md px-8 py-4'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4 md:translate-x-20 md:translate-y-16 z-20 hidden sm:block">
        <img className="h-32 w-32 md:h-48 md:w-48" src={Sta} alt="Star" />
      </div>

    </div>
  )
}

export default Last
