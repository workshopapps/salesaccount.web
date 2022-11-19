import React from "react";
import heroImg from "../assets/hero-img.svg";
import blueSquare from "../assets/blue-square.svg";

const Hero = () => {
  return (
    <section className="px-6 md:mb-[90px] md:px-[120px] ">
      <div className="flex flex-col gap-x-[130px]  items-center mb-[70px] md:mt-[110px] md:mb-0 md:flex-row">
        <div className="">
          <h1 className="text-[#194185] mb-3 font-semibold text-center md:font-bold md:text-5xl md:text-left  md:mb-5">
            Who we are?
          </h1>
          <p className="text-sm text-[#1D2939] text-center mb-[38px] md:text-left md:mb-0 md:h-[180px] md:w-[535px] md:text-xl">
            We are a team of professionals whose aim is to give you and amazing
            user experience. We are not only professionals but a family where
            everybody works together with each other's interest of growth and
            succeeding at heart.
          </p>
        </div>
        <div className="relative">
          <img
            src={heroImg}
            alt="Hero Image Showing a Person Working on a Macbook"
          />
          <img
            className="absolute -z-10 -right-[43px] -top-[30px]"
            src={blueSquare}
          />
          <img
            className="absolute -z-10 -left-[41px] -bottom-[49px]"
            src={blueSquare}
          />
        </div>
      </div>
      <button className="w-[118px] h-[44px] mb-12 bg-[#2E90FA] rounded-lg font-semibold text-white md:hidden">
        Try it Free
      </button>
    </section>
  );
};

export default Hero;
