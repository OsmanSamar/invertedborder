import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className=" bg-hero-mobile py-20 md:bg-hero-pattern  bg-cover   bg-center md:py-32 mb-8  ">
        <div
          className="  flex items-center justify-between  border-b border-slate-800
        container mx-auto px-8   
        font-josefin-sans -mt-8 mb-20 md:px-20 md:-mt-20 md:mb-40 "
        >
          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <BiMenu
                size={26}
                className={` ${isOpen ? "hidden" : "block"}  text-white mb-4 `}
              />

              <AiOutlineClose
                size={26}
                className={` ${
                  isOpen ? "block" : "hidden"
                } h-6 w-6 text-white mb-4 `}
              />
            </button>
          </div>

          {/* The ReactComponent import syntax is a special syntax used by Create
          React App for importing SVG files as React components. */}
          {/* Logo */}
          <div className="hidden space-x-6 md:mb-6   md:flex">
            <a href="#home" className="text-orange-600 text-sm uppercase  ">
              home
            </a>

            <a
              href="#headphones"
              className=" text-white text-sm uppercase hover:text-orange-600 "
            >
              Categories
            </a>
            <a
              href="#speakers"
              className="text-white text-sm  uppercase hover:text-orange-600  "
            >
              Blog
            </a>
            <a
              href="#earphones"
              className="text-white text-sm uppercase hover:text-orange-600 "
            >
              Contact
            </a>
          </div>
          <GiShoppingCart size={24} className="text-white mb-6" />
        </div>

        {/* Mobile Menu*/}
        <div
          className={`  ${isOpen ? "block pt-4 px-4" : "hidden"} md:hidden`}
          id="mobile-menu"
          //   data-aos={isOpen ? "fade-down" : ""}
          //   data-aos-duration="1000"
          //   data-aos-easing="ease-in-out"
          //   data-aos-delay="10"
          //   data-aos-once="false"
          //   data-aos-mirror="true"
          //   data-aos-offset="100"
        >
          <div
            className="absolute flex flex-col items-left self-end py-10 px-10
            mt-2 space-y-6 font-bold bg-black text-white sm:w-full left-0
            right-0 drop-shadow-lg uppercase font-josefin-sans"
          >
            <a href="home" onClick={toggleMenu} className="cursor-pointer ">
              home
            </a>
            <a
              href="headphones"
              onClick={toggleMenu}
              className="cursor-pointer "
            >
              Categories
            </a>
            <a href="speakers" onClick={toggleMenu} className="cursor-pointer ">
              Blog
            </a>
            <a
              href=" earphones"
              onClick={toggleMenu}
              className="cursor-pointer "
            >
              Contact
            </a>
          </div>
        </div>
        {/* End Of  Mobile Menu */}

        <div
          className="mx-auto text-white px-10 py-10 w-[90vw] max-w-[300px]
             font-josefin-sans text-center md:w-[415px]  md:h-[300px]
             lg:text-left lg:ml-24 md:ml-auto md:mr-auto  "
          // lg:ml-24 md:ml-auto md:mr-auto
        >
          <h1
            data-aos="flip-right"
            data-aos-duration="1000" //animation duration for a smoother or faster effect
            data-aos-easing="ease-in-out" //Change the easing function for different animation effects.
            data-aos-delay="20" //Add a delay to stagger the animations.
            data-aos-once="false" //Control if the animation happens only once or every time the element is scrolled into view.
            data-aos-mirror="true" //Repeat the animation when scrolling up.
            data-aos-offset="100" //Adjust the trigger point of the animation relative to the viewport.
            className="mt-2    "
          >
            <span className="text-orange-600 font-bold text-3xl  md:text-4xl ">
              Discover{" "}
              <span className="text-gray-100 font-bold text-xl  md:text-3xl">
                the perfect blend of{" "}
              </span>
              <span className="text-orange-600 font-semibold  text-xl  md:text-3xl">
                luxury
              </span>{" "}
              <span className="text-gray-100 font-bold  text-xl  md:text-3xl">
                {" "}
                and{" "}
              </span>
              <span className="text-orange-600 font-semibold  text-xl  md:text-3xl">
                comfort
              </span>
              <span className="text-gray-100 font-bold  text-xl  md:text-3xl">
                {" "}
                in your new home.{" "}
              </span>
            </span>
          </h1>

          <button
            className="text-white  bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium
             rounded-lg text-sm px-6 py-2.5 mt-6 cursor-pointer"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
            data-aos-once="false"
            data-aos-mirror="true"
            data-aos-offset="100"
          >
            See more
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
