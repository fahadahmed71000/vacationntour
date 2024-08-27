import React from 'react';
import Slide1 from '../assets/slide1.png';
import Slide2 from '../assets/slide2.png';
import Slide3 from '../assets/slide3.png';
import Slide4 from '../assets/slide4.png';
import Slide5 from '../assets/slide5.png';

const Slider = () => {
  return (
    <div className="flex justify-center pt-16 px-8">
      <div className="flex justify-around items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 animate-loop-scroll">
        <div><img src={Slide1} alt="Slide 1" className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-cover" /></div>
        <div><img src={Slide2} alt="Slide 2" className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-cover" /></div>
        <div><img src={Slide3} alt="Slide 3" className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-cover" /></div>
        <div><img src={Slide4} alt="Slide 4" className="h-8 w-32 sm:h-10 sm:w-40 md:h-12 md:w-48 lg:h-10 lg:w-40 object-cover" /></div>
        <div><img src={Slide5} alt="Slide 5" className="h-8 w-32 sm:h-5 sm:w-10 md:h-12 md:w-48 lg:h-10 lg:w-40 object-cover" /></div>
      </div>
    </div>
  );
}

export default Slider;
