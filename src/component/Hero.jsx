import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-hero-mobile md:bg-hero-pattern bg-cover bg-center w-screen h-96 flex items-center justify-center text-white mb-6">
      <Navbar />
      <h2 className="text-3xl md:text-5xl  font-sans text-center">
        Find your next <br></br>
        <span className="text-4xl md:text-7xl font-sans text-center">
          dream home.
        </span>
      </h2>
    </div>
  );
};

export default Hero;
