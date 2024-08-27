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
    <div className="main flex flex-col lg:flex-row gap-12 items-center pt-36">
      <div ref={contentRef} className="left flex flex-col items-center lg:items-start">
        <h2 className='text-[#5E6282]'>Easy And Fast</h2>
        <h1 className='text-3xl font-bold text-[#14183E] pt-4 text-center lg:text-left'>
          Book your next trip in 3 easy steps
        </h1>

        <div className="cards flex flex-col gap-6 pt-12">
          {/* Card 1 */}
          <div className="card flex items-center gap-5">
            <img src={Content1} alt="Content 1" />
            <div className="content text-center lg:text-left">
              <h1 className='font-bold'>Choose Destination</h1>
              <p className='w-72'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card flex items-center gap-5">
            <img src={Content2} alt="Content 2" />
            <div className="content text-center lg:text-left">
              <h1 className='font-bold'>Make Payment</h1>
              <p className='w-72'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card flex items-center gap-5">
            <img src={Content3} alt="Content 3" />
            <div className="content text-center lg:text-left">
              <h1 className='font-bold'>Reach Airport on Selected Date</h1>
              <p className='w-72'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
            </div>
          </div>
        </div>
      </div>

      <div ref={cardRef} className="right pt-16 lg:pt-0">
        <div className="card p-5 rounded-3xl bg-[#FFFFFF] shadow-2xl flex flex-col items-center">
          <img className='rounded-2xl' src={Greece} alt="Greece" />
          <h1 className='pt-3'>Trip To Greece</h1>
          <p className='pt-3'>14-29 June by Robbin Joseph</p>
          <div className="logos flex gap-3 pt-3">
            <img src={L1} alt="Logo 1" />
            <img src={L2} alt="Logo 2" />
            <img src={L3} alt="Logo 3" />
          </div>
          <div className='flex justify-between w-full pt-3'>
            <div className='flex gap-3'>
              <img src={Log1} alt="People Icon" />
              <p>24 people going</p>
            </div>
            <div>
              <img src={Log2} alt="Heart Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Easy;
