import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Content1 from '../assets/content1.png';
import Content2 from '../assets/content2.png';
import Content3 from '../assets/content3.png';
import Greece from '../assets/greece.jpg';
import L1 from '../assets/l1.png';
import L2 from '../assets/l2.png';
import L3 from '../assets/l3.png';
import Log1 from '../assets/log1.png';
import Log2 from '../assets/log2.png';

gsap.registerPlugin(ScrollTrigger);

const Easy = () => {
  const contentRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: -150 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      cardRef.current,
      { opacity: -1, x: 150 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="main flex flex-col lg:flex-row gap-8 items-center pt-16 lg:pt-36 px-4 lg:px-12">
      <div ref={contentRef} className="left flex flex-col items-center lg:items-start">
        <h2 className='text-[#5E6282] text-lg lg:text-xl'>Easy And Fast</h2>
        <h1 className='text-2xl lg:text-3xl font-bold text-[#14183E] pt-4 text-center lg:text-left'>
          Book your next trip in 3 easy steps
        </h1>

        <div className="cards flex flex-col gap-6 pt-8 lg:pt-12">
          {/* Card 1 */}
          <div className="card flex items-center gap-4 lg:gap-5">
            <img src={Content1} alt="Content 1" className="w-12 lg:w-16" />
            <div className="content text-center lg:text-left">
              <h1 className='font-bold text-base lg:text-lg'>Choose Destination</h1>
              <p className='w-64 lg:w-72 text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card flex items-center gap-4 lg:gap-5">
            <img src={Content2} alt="Content 2" className="w-12 lg:w-16" />
            <div className="content text-center lg:text-left">
              <h1 className='font-bold text-base lg:text-lg'>Make Payment</h1>
              <p className='w-64 lg:w-72 text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card flex items-center gap-4 lg:gap-5">
            <img src={Content3} alt="Content 3" className="w-12 lg:w-16" />
            <div className="content text-center lg:text-left">
              <h1 className='font-bold text-base lg:text-lg'>Reach Airport on Selected Date</h1>
              <p className='w-64 lg:w-72 text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
            </div>
          </div>
        </div>
      </div>

      <div ref={cardRef} className="right pt-12 lg:pt-0">
        <div className="card p-4 lg:p-5 rounded-2xl bg-[#FFFFFF] shadow-xl lg:shadow-2xl flex flex-col items-center">
          <img className='rounded-xl lg:rounded-2xl w-64 lg:w-full' src={Greece} alt="Greece" />
          <h1 className='pt-3 text-lg lg:text-xl'>Trip To Greece</h1>
          <p className='pt-2 text-sm lg:text-base'>14-29 June by Robbin Joseph</p>
          <div className="logos flex gap-2 lg:gap-3 pt-3">
            <img src={L1} alt="Logo 1" className="w-8 lg:w-10" />
            <img src={L2} alt="Logo 2" className="w-8 lg:w-10" />
            <img src={L3} alt="Logo 3" className="w-8 lg:w-10" />
          </div>
          <div className='flex justify-between w-full pt-3'>
            <div className='flex gap-2 lg:gap-3'>
              <img src={Log1} alt="People Icon" className="w-4 lg:w-5" />
              <p className='text-sm lg:text-base'>24 people going</p>
            </div>
            <div>
              <img src={Log2} alt="Heart Icon" className="w-4 lg:w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Easy;
