import React from "react";
import blueSquare from "../../assets/images/AboutUs/blue-square.svg";
import mission from "../../assets/images/AboutUs/mission.svg";

const Mission = () => {
  return (
    <section className=" px-6 pt-6 md:pt-0 relative md:pb-[138px] md:px-[120px]">
      <h3 className="text-[rgb(25,65,133)]  text-lg font-medium mb-[30px] text-center md:text-left md:absolute md:right-[120px] md:-top-24 md:pt-[44px] md:mb-[30px] md:font-bold md:text-[48px]">
        Our Mission
      </h3>
      <div className="flex flex-col gap-y-5 md:gap-x-[146px] md:gap-y-0 md:mt-6 md:items-center md:flex-row-reverse md:justify-between">
        <div className="relative w-full md:w-auto">
          <p className="bg-[#F9FAFB] text-center text-xs h-[114px] px-[31px] py-[18px] md:text-left md:w-[547px] md:text-xl md:h-[294px] md:px-[52px] md:py-[58px]">
            To continually create ease in business accounting processes through
            the use of technology enabled solutions and making them easily
            accessible for businesses.
          </p>
          <img
            className="absolute -top-[1rem] -left-[15px] -z-10 md:-top-[1.7rem] md:-left-[35px]"
            src={blueSquare}
            alt=""
          />
        </div>
        <img
          className="mb-6 w-full max-h-[281px] md:mb-0 md:max-w-[458px] md:max-h-[316px]"
          src={mission}
          alt="Person working and writing on a notebook"
        />
      </div>
    </section>
  );
};

export default Mission;
