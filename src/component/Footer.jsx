import React from "react";
import { GiSpookyHouse } from "react-icons/gi";
import { GiHouseKeys } from "react-icons/gi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <>
      <div>
        <div className="max-w-7xl mx-auto pt-8 pb-20 px-8">
          {/* Logo */}
          <div className="flex items-center space-x-1  ml-3 mb-8">
            <GiSpookyHouse size={28} className="text-white" />
            <GiHouseKeys size={28} className="text-white" />
          </div>

          <div className="md:grid grid-cols-2 gap-10 lg:grid-cols-4">
            <div>
              <div>
                <p className="flex items-start gap-3 text-white">
                  <img
                    src="./images/icon-location.svg"
                    alt=""
                    className="mt-2"
                  />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>

              <ul className="mt-5 mb-8">
                <li className="text-white flex items-center gap-3">
                  <img src="./images/icon-phone.svg" alt="" />
                  +1-543-123-4567
                </li>
                <li className="mt-5 text-white flex items-center gap-3">
                  <img src="./images/icon-email.svg" alt="" />
                  example@dreamhouse.com
                </li>
              </ul>
            </div>

            <ul className="mb-8 ml-2 flex flex-col gap-4 text-white">
              <li>About Us</li>
              <li>What We Do</li>
              <li>DREAM HOUSE</li>
            </ul>

            <ul className="mb-8 ml-2 flex flex-col gap-4 text-white">
              <li>Career</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>

            <div>
              <p className="items-start ml-2 text-white text-sm lg:text-left ">
                Subscribe to our newsletter The latest news, articles, and
                resources, sent to your inbox weekly.
              </p>

              <Newsletter />
            </div>
          </div>
        </div>

        <hr className="w-[90vw] h-px mx-auto my-2 bg-gray-700 border-0 "></hr>
        <div className=" lg:flex lg:flex-row-reverse  lg:justify-between gap-10 px-8  py-6  text-white text-2xl">
          <div className=" flex items-center justify-center gap-5 py-6  lg:justify-end ">
            <BsYoutube className="hover:scale-125" />
            <BsFacebook className="hover:scale-125" />
            <BsInstagram className="hover:scale-125" />
            <BsLinkedin className="hover:scale-110" />
            <AiFillTwitterCircle className="hover:scale-125" />
          </div>
          <p className="text-center text-white text-sm py-6 lg:text-left">
            &copy; Copyright 2024 Dream House. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
