import React from "react";
import { FaRegBookmark } from "react-icons/fa";
// FaBookmark,

const Testimonils = () => {
  return (
    <>
      <div className="max-w-6xl px-5 mx-auto md:mt-10 mb-16  mt-60">
        {/* Testimonials Container */}

        <div className="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-x-2.5 lg:grid-cols-3 lg:gap-x-8">
          {/*1 */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000" //animation duration for a smoother or faster effect
            data-aos-easing="ease-in-out" //Change the easing function for different animation effects.
            data-aos-delay="10" //Add a delay to stagger the animations.
            data-aos-once="false" //Control if the animation happens only once or every time the element is scrolled into view.
            data-aos-mirror="true" //Repeat the animation when scrolling up.
            // data-aos-offset="100" //Adjust the trigger point of the animation relative to the viewport.
            className=" flex flex-col justify-between p-6 space-y-6 rounded-lg bg-gradient-to-tr from-[#8cb1d5]  to-[#eaaa64] to-[#d0852d] "
          >
            {/* to-[#350a25]  from-[#FF6F48]  to-[#24161f] */}
            <h1 className="text-xl md:text-2xl lg:text-3xl text-gray-100 font-bold">
              Step into elegance and make unforgettable memories in your dream
              home!
            </h1>
          </div>

          {/*2 */}
          <div
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
            data-aos-once="false"
            data-aos-mirror="true"
            className=" flex-col  p-2 space-y-4 h-60
                         rounded-lg bg-white md:flex "
          >
            <div className=" relative   flex flex-col justify-between ">
              <div
                className="image relative w-full h-60 rounded-2xl  rounded-tl-none bg-cover bg-center overflow-hidden "
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE3NTgzNDU&ixlib=rb-4.0.3&q=80&w=400')",
                }}
              >
                {/* Display bookmark icon */}
                <div>
                  <FaRegBookmark className="absolute top-3 right-4 text-gray-100" />
                </div>
                {/* Text on top left */}
                <div className="absolute top-0 left-0 p-4 text-black bg-white rounded-br-2xl  w-24 h-12">
                  <h2 className="text-lg font-semibold">2023</h2>
                  {/* <p className="text-sm">Built in 1632</p> */}
                </div>
              </div>

              <div className="content relative w-full h-36 bg-opacity-10 rounded-b-2xl rounded-tr-none">
                <div className="name absolute h-17 w-1/2 bg-white top-[-70px] right-0 border-t-10 border-l-10 border-black rounded-tl-2xl ">
                  <span className="text-black px-4 py-2 my-1 block rounded-md text-xs font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*3  */}

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
            data-aos-once="false"
            data-aos-mirror="true"
            className=" flex-col  p-2 space-y-4 h-60
                        rounded-lg bg-white md:flex "
          >
            <div className=" relative   flex flex-col justify-between ">
              <div
                className="image relative w-full h-60 rounded-2xl  rounded-tl-none bg-cover bg-center overflow-hidden "
                style={{
                  backgroundImage:
                    "url('https://plus.unsplash.com/premium_photo-1680100256112-2e1231d9d0df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8fDA%3D=rb-4.0.3&q=80&w=400')",
                }}
              >
                {/* Display bookmark icon */}
                <div>
                  <FaRegBookmark className="absolute top-3 right-4 text-gray-100" />
                </div>
                {/* Text on top left */}
                <div className="absolute top-0 left-0 p-4 text-black bg-white rounded-br-2xl  w-24 h-12">
                  <h2 className="text-lg font-semibold">2023</h2>
                  {/* <p className="text-sm">Built in 1632</p> */}
                </div>
              </div>

              <div className="content relative w-full h-36 bg-opacity-10 rounded-b-2xl rounded-tr-none">
                <div className="name absolute h-17 w-1/2 bg-white top-[-70px] right-0 border-t-10 border-l-10 border-black rounded-tl-2xl ">
                  <span className="text-black px-4 py-2 my-1 block rounded-md text-xs font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*4  */}

          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
            data-aos-once="false"
            data-aos-mirror="true"
            className=" flex-col  p-2 space-y-4 h-60
                        rounded-lg bg-white md:flex "
          >
            <div className=" relative   flex flex-col justify-between ">
              <div
                className="image relative w-full h-60 rounded-2xl  rounded-tl-none bg-cover bg-center overflow-hidden "
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdXNlfGVufDB8fDB8fHww=rb-4.0.3&q=80&w=400')",
                }}
              >
                {/* Display bookmark icon */}
                <div>
                  <FaRegBookmark className="absolute top-3 right-4 text-gray-100" />
                </div>
                {/* Text on top left */}
                <div className="absolute top-0 left-0 p-4 text-black bg-white rounded-br-2xl  w-24 h-12">
                  <h2 className="text-lg font-semibold">2024</h2>
                  {/* <p className="text-sm">Built in 1632</p> */}
                </div>
              </div>

              <div className="content relative w-full h-36 bg-opacity-10 rounded-b-2xl rounded-tr-none">
                <div className="name absolute h-17 w-1/2 bg-white top-[-70px] right-0 border-t-10 border-l-10 border-black rounded-tl-2xl ">
                  <span className="text-black px-4 py-2 my-1 block rounded-md text-xs font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*5  */}

          <div
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
            data-aos-once="false"
            data-aos-mirror="true"
            className=" flex-col  p-2 space-y-4 h-60
                        rounded-lg bg-white md:flex "
          >
            <div className=" relative   flex flex-col justify-between ">
              <div
                className="image relative w-full h-60 rounded-2xl  rounded-tl-none bg-cover bg-center overflow-hidden "
                style={{
                  backgroundImage:
                    "url('https://plus.unsplash.com/premium_photo-1661964475795-f0cb85767a88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGhvdXNlfGVufDB8fDB8fHww=rb-4.0.3&q=80&w=400')",
                }}
              >
                {/* Display bookmark icon */}
                <div>
                  <FaRegBookmark className="absolute top-3 right-4 text-gray-100" />
                </div>
                {/* Text on top left */}
                <div className="absolute top-0 left-0 p-4 text-black bg-white rounded-br-2xl  w-24 h-12">
                  <h2 className="text-lg font-semibold">2024</h2>
                  {/* <p className="text-sm">Built in 1632</p> */}
                </div>
              </div>

              <div className="content relative w-full h-36 bg-opacity-10 rounded-b-2xl rounded-tr-none">
                <div className="name absolute h-17 w-1/2 bg-white top-[-70px] right-0 border-t-10 border-l-10 border-black rounded-tl-2xl ">
                  <span className="text-black px-4 py-2 my-1 block rounded-md text-xs font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*6  */}

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
            data-aos-once="false"
            data-aos-mirror="true"
            className="flex-col  p-2 space-y-4 h-60
                      rounded-lg bg-white md:flex "
          >
            <div className=" relative   flex flex-col justify-between ">
              <div
                className="image relative w-full h-60 rounded-2xl  rounded-tl-none bg-cover bg-center overflow-hidden "
                style={{
                  backgroundImage:
                    "url(' https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=rb-4.0.3&q=80&w=400')",
                }}
              >
                {/* Display bookmark icon */}
                <div>
                  <FaRegBookmark className="absolute top-3 right-4 text-gray-100" />
                </div>
                {/* Text on top left */}
                <div className="absolute top-0 left-0 p-4 text-black bg-white rounded-br-2xl  w-24 h-12">
                  <h2 className="text-lg font-semibold  proportional-nums ">
                    2024
                  </h2>
                  {/* <p className="text-sm">Built in 1632</p> */}
                </div>
              </div>

              <div className="content relative w-full h-36 bg-opacity-10 rounded-b-2xl rounded-tr-none">
                <div className="name absolute h-17 w-1/2 bg-white top-[-70px] right-0 border-t-10 border-l-10 border-black rounded-tl-2xl ">
                  <span className="text-black px-4 py-2 my-1 block rounded-md text-xs font-normal ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonils;
