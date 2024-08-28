import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/Logo.png";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Playbutton from "../assets/play-button.png";
import Cart from "./Cart";
import Top from "./Top";
import Easy from "./Easy";
import Section from "./Section";
import Slider from "./Slider";
import Last from "./Last";
import Footer from "./Footer";
import { gsap } from "gsap";

const Page = () => {
  const boxRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 2 }
    );
  }, []);

  const mainRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      mainRef.current,
      { opacity: 0, x: -150 },
      { opacity: 1, x: 0, duration: 2 }
    );
  }, []);

  const imgRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, x: 150 },
      { opacity: 1, x: 0, duration: 2 }
    );
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full max-w-screen overflow-x-hidden flex flex-col items-center justify-center z-10">
      {/* Navbar */}
      <div
        ref={boxRef}
        className="navbar flex justify-between lg:justify-around w-full px-4 lg:px-10 pt-5 lg:pt-10 relative z-0"
      >
        <div className="logo">
          <img src={Logo} alt="Logo" className="w-24 lg:w-auto" />
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden z-10">
          <button onClick={toggleSidebar}>
            <svg
              className="w-8 h-8 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <div className="hidden lg:flex space-x-6 lg:space-x-16 z-10 font-semibold">
          <div>Destinations</div>
          <div>Hotels</div>
          <div>Flights</div>
          <div>Bookings</div>
          <div>Login</div>
          <button className="outline outline-1 rounded-sm p-1 pr-2 px-2">
            Sign Up
          </button>
          <select
            name="language"
            id="language"
            className="outline-none bg-transparent"
          >
            <option className="bg-[#FFF1DA]" value="en">
              EN
            </option>
            <option className="bg-[#FFF1DA]" value="fr">
              FR
            </option>
            <option className="bg-[#FFF1DA]" value="it">
              IT
            </option>
          </select>
        </div>

        {/* Image on the Right */}
        <div className="absolute right-0 top-0 hidden lg:block z-0">
          <img src={Img1} alt="Decoration" className="w-auto" />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-64 h-full text-white bg-gray-700 shadow-lg z-20 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button className="absolute top-4 right-4" onClick={toggleSidebar}>
          <svg
            className="w-8 h-8 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="mt-16 flex flex-col items-center space-y-8 font-semibold">
          <div>Destinations</div>
          <div>Hotels</div>
          <div>Flights</div>
          <div>Bookings</div>
          <div>Login</div>
          <button className="outline outline-1 rounded-sm p-1 pr-2 px-2">
            Sign Up
          </button>
          <select className="bg-transparent" name="language" id="language">
            <option className="bg-gray-700" value="en">
              EN
            </option>
            <option className="bg-gray-700" value="fr">
              FR
            </option>
            <option className="bg-gray-700" value="it">
              IT
            </option>
          </select>
        </div>
      </div>

      {/* Main section */}
      <div className="w-full flex flex-col lg:flex-row mt-10 lg:mt-20 px-4 md:px-8 lg:px-20 xl:px-40">
        <div ref={mainRef} className="w-full lg:w-1/2">
          <div className="mt-10 lg:mt-20">
            <h2 className="text-[#DF6951] text-xl lg:text-2xl">
              Best Destinations around the world
            </h2>
            <h1 className="text-[#181E4B] font-bold text-3xl lg:text-5xl pt-5">
              Travel, <span className="border-b-4 border-red-400">enjoy</span>{" "}
              and live a new and full life
            </h1>
            <p className="text-base lg:text-xl pt-5 text-[#5e6282]">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div className="pt-5 flex items-center space-x-4">
              <button className="bg-[#f1a501] text-white p-2 lg:p-3 rounded-md">
                Find out more
              </button>
              <div className="pt-6">
                <img
                  src={Playbutton}
                  alt="Play Demo"
                  className="h-14 lg:h-28"
                />
              </div>
              <p className="text-[#686d77] font-semibold">Play Demo</p>
            </div>
          </div>
        </div>

        <div ref={imgRef} className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <div className="relative w-full">
            <img src={Img2} alt="Main Visual" className="w-full object-cover" />
            <div className="absolute top-2 left-16 lg:left-28 h-12 lg:h-14 hidden lg:block">
              <img src={Img3} alt="Decorative" />
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <Cart />
      <Top />
      <Easy />
      <Section />
      <Slider />
      <Last />
      <Footer />
    </div>
  );
};

export default Page;
