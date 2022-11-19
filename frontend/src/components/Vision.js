import React from "react";
import vision from "../assets/vision.svg";
import blueSquare from "../assets/blue-square.svg";

const Vision = () => {
  return (
    <section className=" px-6 pt-6 md:pt-0 md:pb-[138px] md:px-[120px]">
      <h3 className="text-[#194185]  text-lg font-medium mb-[30px] text-center md:text-left md:pt-[44px] md:mb-[20px] md:font-bold md:text-[48px]">
        Our Vision
      </h3>
      <div className="flex flex-col gap-y-5 md:gap-x-[146px] md:gap-y-0 md:items-center md:flex-row md:justify-between">
        <div className="relative w-full md:w-auto">
          <p className="bg-[#F9FAFB] text-center text-xs h-[82px] px-[31px] py-[18px] md:text-left md:w-[507px] md:text-xl md:h-[197px] md:px-[52px] md:py-[58px]">
            To make easy sales and accounting reconciliation across all business
            types.
          </p>
          <img
            className="absolute -top-[1rem] -left-[15px] -z-10 md:-top-[1.7rem] md:-left-[35px]"
            src={blueSquare}
            alt=""
          />
        </div>
        <img
          className="mb-6 md:mb-0 md:max-w-[458px]"
          src={vision}
          alt="People holding hands in agreement"
        />
      </div>
    </section>
  );
};

export default Vision;
