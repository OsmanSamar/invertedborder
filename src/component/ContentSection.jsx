import React from "react";

const ContentSection = () => {
  return (
    <>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-delay="10"
        data-aos-once="false"
        data-aos-mirror="true"
        data-aos-offset="100"
      >
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 gap-10 pt-20 pb-24 px-8 lg:grid-cols-2 lg:gap-20 lg:place-items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-100 uppercase">
              enjoy quality life in perumnas housing
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

          <div className="text-gray-100 ">
            {/* -mt-26 */}
            <p>
              Discover a community that's more than just houses. At Perumnas
              Housing, we redefine living with homes designed for comfort,
              style, and sustainability. Whether you're looking for a serene
              retreat or a vibrant neighborhood, our properties offer the
              perfect blend of modern amenities and natural surroundings.
            </p>
            <div class="mt-4 flex flex-col justify-center items-center md:flex md:flex-row md:p-2">
              <div class="mt-4 md:mr-14 md:mt-0">
                <p class="text-white font-bold normal-nums text-xl text-center md:text-start">
                  25
                </p>
                <p class="text-statheadings uppercase mt-1 text-xs">
                  years of experience
                </p>
              </div>
              <div class="mt-4 md:mr-14 md:mt-0">
                <p class="text-white font-bold normal-nums text-xl text-center md:text-start">
                  60 M
                </p>
                <p class="text-statheadings uppercase mt-1 text-xs">
                  Templates Available
                </p>
              </div>
              <div class="mt-4 md:mr-14 md:mt-0">
                <p class="text-white font-bold normal-nums text-xl text-center md:text-start">
                  70 K +
                </p>
                <p class="text-statheadings uppercase mt-1 text-xs">
                  Satisfied Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSection;
