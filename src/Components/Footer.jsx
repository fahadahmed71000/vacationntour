import React from 'react'
import Jadoo from '../assets/Jadoo.png'
import Foot1 from '../assets/foot1.png'
import Foot2 from '../assets/foot2.png'
import Foot3 from '../assets/foot3.png'
import Google from '../assets/google.png'
import Store from '../assets/Store.png'

const Footer = () => {
  return (
    <div className="bg-white p-32">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between lg:gap-16">

        {/* Logo Side */}
        <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <img src={Jadoo} alt="Jadoo Logo" className="mb-4" />
          <p className='text-center lg:text-left text-[#5E6282] w-full lg:w-60'>
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-8 lg:gap-16 justify-center lg:justify-start mb-6 lg:mb-0">
          <div>
            <ul className="list-none pl-0">
              <li className="mb-2 font-bold">Company</li>
              <li className="mb-2 mt-5 text-[#5E6282]">About</li>
              <li className="mb-2 text-[#5E6282]">Careers</li>
              <li className="mb-2 text-[#5E6282]">Mobile</li>
            </ul>
          </div>
          <div>
            <ul className="list-none pl-0">
              <li className="mb-2 font-bold">Contact</li>
              <li className="mb-2 mt-5 text-[#5E6282]">Help/FAQ</li>
              <li className="mb-2 text-[#5E6282]">Press</li>
              <li className="mb-2 text-[#5E6282]">Affiliates</li>
            </ul>
          </div>
          <div>
            <ul className="list-none pl-0">
              <li className="mb-2 font-bold">More</li>
              <li className="mb-2 mt-5 text-[#5E6282]">Airline Fees</li>
              <li className="mb-2 text-[#5E6282]">Low Fare Tips</li>
            </ul>
          </div>
        </div>

        {/* Footer + Logo */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex gap-3 mb-4">
            <img src={Foot1} alt="Foot 1" className="hidden sm:block" />
            <img src={Foot2} alt="Foot 2" className="hidden sm:block" />
            <img src={Foot3} alt="Foot 3" className="hidden sm:block" />
          </div>
          <p className='text-[#5E6282] font-medium mb-4'>Discover our app</p>
          <div className="flex gap-3">
            <img src={Google} alt="Google Play Store" className="w-24" />
            <img src={Store} alt="App Store" className="w-24" />
          </div>
        </div>

      </div>

      <div className="text-center text-[#5E6282] pt-6">
        <h1>© 2024 All rights reserved</h1>
      </div>
    </div>
  )
}

export default Footer
