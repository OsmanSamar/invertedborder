import React from "react";

const ProcessIAction = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto py-20 lg:py-32 px-8">
          <div className="bg-white shadow-xl rounded-2xl p-8 text-center lg:text-left grid grid-cols-1 gap-8 lg:flex lg:flex-row-reverse lg:items-center">
            <div
              className="lg:flex-1"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="10"
              data-aos-once="false"
              data-aos-mirror="true"
              data-aos-offset="100"
            >
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D=rb-4.0.3&q=80&w=400"
                alt="Brand new residential area"
                className="md:w-[40vw] md:h-[50vh] border rounded-2xl"
              />
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="10"
              data-aos-once="false"
              data-aos-mirror="true"
              data-aos-offset="100"
              className="lg:flex-1"
            >
              <h2 class="font-bold text-2xl mt-5 mb-4 md:text-3xl text-gray-800">
                Brand new residential area
              </h2>
              <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <div class="mt-4 flex flex-col justify-center items-center md:flex md:flex-row md:p-2">
                <div class="mt-4 md:mr-14 md:mt-0">
                  <p class="text-statheadings uppercase mt-1 text-sm font-bold">
                    Price
                  </p>
                  <p class="text-gray-500 font-bold normal-nums text-xl text-center md:text-start">
                    €35,000
                  </p>
                </div>
                <div class="mt-4 md:mr-14 md:mt-0">
                  <p class="text-statheadings uppercase mt-1 text-sm font-bold">
                    Location
                  </p>
                  <p class="text-gray-500 font-bold normal-nums text-xl text-center md:text-start">
                    Amsterdam
                  </p>
                </div>
                <div class="mt-4 md:mr-14 md:mt-0">
                  <p class="text-statheadings uppercase mt-1 text-sm font-bold">
                    Type
                  </p>
                  <p class="text-gray-500 font-bold normal-nums text-xl text-center md:text-start">
                    Family House
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8 text-center lg:text-left grid grid-cols-1 gap-8 lg:flex lg:items-center">
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="10"
              data-aos-once="false"
              data-aos-mirror="true"
              data-aos-offset="100"
              className="lg:flex-1"
            >
              <img
                src="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGhvdXNlfGVufDB8fDB8fHww=rb-4.0.3&q=80&w=400"
                alt="A scenic view of a house with mountains in the background"
                className="md:w-[40vw] md:h-[50vh] border rounded-2xl"
              />
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="10"
              data-aos-once="false"
              data-aos-mirror="true"
              data-aos-offset="100"
              className="lg:flex-1"
            >
              <h2 className="font-bold text-2xl mt-5 mb-4 md:text-3xl text-gray-800">
                Home in the Countryside
              </h2>

              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. A
                arcu cursus vitae congue mauris rhoncus aenean vel. Adipiscing
                commodo elit at imperdiet dui accumsan sit amet. Vitae elementum
                curabitur vitae nunc sed velit.
              </p>

              <div class="mt-4 flex flex-col justify-center items-center md:flex md:flex-row md:p-2">
                <div class="mt-4 md:mr-14 md:mt-0">
                  <p class="text-statheadings uppercase mt-1 text-sm font-bold">
                    Price
                  </p>
                  <p class="text-gray-500 font-bold normal-nums text-xl text-center md:text-start">
                    €25,000
                  </p>
                </div>
                <div class="mt-4 md:mr-14 md:mt-0">
                  <p class="text-statheadings uppercase mt-1 text-sm font-bold">
                    Location
                  </p>
                  <p class="text-gray-500 font-bold normal-nums text-xl text-center md:text-start">
                    Amsterdam
                  </p>
                </div>
                <div class="mt-4 md:mr-14 md:mt-0">
                  <p class="text-statheadings uppercase mt-1 text-sm font-bold">
                    Type
                  </p>
                  <p class="text-gray-500 font-bold normal-nums text-xl text-center md:text-start">
                    Family House
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessIAction;
