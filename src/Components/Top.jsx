import React, { useEffect } from 'react';
import Card1 from '../assets/card1.jpg';
import Card2 from '../assets/card2.png';
import Card3 from '../assets/card3.png';
import V1 from '../assets/v1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Top = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000, 
    });
  }, []);

  return (
    <div>
      {/* Heading */}
      <div className="text-center pt-32" data-aos="fade-up">
        <div>
          <p className="font-bold text-[#5E6282]">Top Selling</p>
        </div>
        <h1 className="text-3xl font-bold text-[#14183E]">Top Destinations</h1>
      </div>

      {/* Cards */}
      <div className="container mx-auto px-4 py-16" data-aos="fade-right">
        <div className="flex flex-col md:flex-row gap-9 justify-center">
          {/* Card 1 */}
          <div className="w-full sm:w-64 md:w-72 lg:w-80 xl:w-80 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={Card1} alt="Card 1" className="w-full rounded-t-2xl h-80 object-cover"/>
            <div className="p-4">
              <div className="flex flex-col md:flex-row md:justify-between text-[#5E6282] mb-4">
                <h4 className="text-xl font-bold mb-2">London, UK</h4>
                <h1 className="font-bold">$5,42k</h1>
              </div>
              <div className="flex items-center text-[#5E6282]">
                <img src={V1} alt="Icon" className="mr-2"/>
                <p className="text-gray-700">10 Days Trip</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-64 md:w-72 lg:w-80 xl:w-80 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={Card2} alt="Card 2" className="w-full rounded-t-2xl h-80 object-cover"/>
            <div className="p-4">
              <div className="flex flex-col md:flex-row md:justify-between text-[#5E6282] mb-4">
                <h4 className="text-xl font-bold mb-2">Rome, Italy</h4>
                <h1 className="font-bold">$5,42k</h1>
              </div>
              <div className="flex items-center text-[#5E6282]">
                <img src={V1} alt="Icon" className="mr-2"/>
                <p className="text-gray-700">10 Days Trip</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-64 md:w-72 lg:w-80 xl:w-80 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={Card3} alt="Card 3" className="w-full rounded-t-2xl h-80 object-cover"/>
            <div className="p-4">
              <div className="flex flex-col md:flex-row md:justify-between text-[#5E6282] mb-4">
                <h4 className="text-xl font-bold mb-2">Rome, Italy</h4>
                <h1 className="font-bold">$5,42k</h1>
              </div>
              <div className="flex items-center text-[#5E6282]">
                <img src={V1} alt="Icon" className="mr-2"/>
                <p className="text-gray-700">10 Days Trip</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
