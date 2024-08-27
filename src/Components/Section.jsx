
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logoimage from '../assets/logo-image.png'


const Section = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);


  return (
    <div className="px-4 md:px-8 lg:px-16 pt-28" data-aos="zoom-in-right">
      <div className="flex flex-col md:flex-row gap-8 md:gap-11 items-center md:items-start">
        <div className="left text-center md:text-left">
          <p className="text-[#5E6282] text-lg">Testimonials</p>
          <h1 className="text-[#14183E] text-2xl md:text-3xl font-bold pt-4">
            What people say about Us.
          </h1>
        </div>

        <div className="right relative flex justify-center md:justify-start">
          <div className="card w-full max-w-md bg-[#FFFFFF] p-5 shadow-2xl rounded-lg">
           <div className="relative top-7 right-5"> <img className="absolute md:-top-24 md:-left-5 w-12 h-12 md:w-12 md:h-12 hidden lg:block" src={Logoimage} alt="Logo" /></div>
            <p className="text-[#5E6282] text-base md:text-lg">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <h1 className="pt-6 font-semibold text-[#5E6282] text-lg md:text-xl">Mike Taylor</h1>
            <p className="pt-2 text-[#5E6282] text-sm md:text-base">Lahore, Pakistan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
