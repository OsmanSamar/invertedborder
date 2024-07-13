import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { GiSpookyHouse } from "react-icons/gi";
import { GiHouseKeys } from "react-icons/gi";

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
      <div className=" bg-hero-mobile py-20 md:bg-hero-pattern bg-cover bg-center md:py-32">
        {/* NavBar */}
        <div
          className="flex items-center justify-between 
        container mx-auto px-8   
        font-josefin-sans -mt-8 mb-20 md:px-20 md:-mt-20 md:mb-40  nav-bg backdrop-blur-xl  "
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
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
                className={` ${
                  isOpen ? "hidden" : "block"
                }  text-white my-3.5 `}
              />

              <AiOutlineClose
                size={26}
                className={` ${
                  isOpen ? "block" : "hidden"
                } h-6 w-6 text-white my-3.5 `}
              />
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center space-x-1">
            <GiSpookyHouse size={28} className="text-white" />
            <GiHouseKeys size={28} className="text-white" />
          </div>
          {/* Navbar links on a big screen */}

          <div className="hidden space-x-6  md:flex md:my-3.5    ">
            <a href="#home" className="text-orange-600 text-sm uppercase   ">
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
              Contact Us
            </a>
          </div>

          {/* Shopping Cart Icon */}
          <div className="text-white ">
            <GiShoppingCart size={24} className=" " />
          </div>
        </div>

        {/* Mobile Menu*/}
        <div
          className={`  ${isOpen ? "block   pt-2 px-2" : "hidden"} md:hidden`}
          id="mobile-menu"
          // data-aos={isOpen ? "fade-right" : ""}
          // data-aos-offset="200"
          // data-aos-delay="10"
          // data-aos-duration="1000"
          // data-aos-easing="ease-in-out"
          // data-aos-mirror="true"
          // data-aos-once="true"
        >
          <div
            className="absolute flex flex-col items-left self-end py-10 px-10
            mt-2 space-y-5 font-bold bg-white text-black sm:w-full left-0
            right-0  uppercase font-josefin-sans"
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
              Contact Us
            </a>
          </div>
        </div>
        {/* End Of  Mobile Menu */}

        <div
          className="mx-auto text-white px-10 py-8 w-[90vw] max-w-[600px]
             font-josefin-sans text-center  "
          data-aos="fade-down"
          data-aos-offset="200" //Adjust the trigger point of the animation relative to the viewport.
          data-aos-delay="50" //Add a delay to stagger the animations.
          data-aos-duration="1000" //animation duration for a smoother or faster effect
          data-aos-easing="ease-in-out" //Change the easing function for different animation effects.
          data-aos-mirror="true" //Repeat the animation when scrolling up.
          data-aos-once="true" //Control if the animation happens only once or every time the element is scrolled into view.
        >
          <h1 className="mt-2    ">
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
             rounded-lg text-sm px-6 py-2.5 mt-6 cursor-pointer inline-block "
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
            data-aos-once="false"
            data-aos-mirror="true"
            data-aos-offset="100"
          >
            Explore more{" "}
            <FaArrowUpRightFromSquare
              size={10}
              className="inline-block text-white ml-1 "
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
