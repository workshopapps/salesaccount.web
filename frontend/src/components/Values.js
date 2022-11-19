import React from "react";
import blueSquare from "../assets/blue-square.svg";
import valueImg from "../assets/values.svg";
const Values = () => {
  return (
    <section className=" px-6 pt-6 md:pt-0 md:pb-[138px] md:px-[120px]">
      <h3 className="text-[#194185]  text-lg font-medium mb-[30px] text-center md:text-left md:pt-[44px] md:mb-[30px] md:font-bold md:text-[48px]">
        Our Core Values
      </h3>
      <div className="flex flex-col gap-y-5 md:gap-x-[146px] md:gap-y-0 md:mt-12 md:items-center md:flex-row md:justify-between">
        <div className="relative w-full flex justify-between bg-[#F9FAFB]  text-xs h-[104] px-[31px] py-[18px] md:block md:text-left md:w-[380px] md:text-xl md:h-[291px] md:px-[93px] md:py-[38px]">
          <ul className="list-disc">
            <li className="text-[#1D2939] font-medium text-xs md:font-normal mb-4 md:text-xl ">
              Accountability
            </li>
            <li className="text-[#1D2939] font-medium text-xs md:font-normal mb-4 md:text-xl ">
              Intergrity
            </li>
          </ul>

          <ul className="list-disc">
            <li className="text-[#1D2939] font-medium text-xs md:font-normal mb-4 md:text-xl ">
              Innovation
            </li>
            <li className="text-[#1D2939] font-medium text-xs md:font-normal md:text-xl ">
              Reliability
            </li>
          </ul>

          <img
            className="absolute -top-[1rem] -left-[15px] -z-10 md:-top-[1.7rem] md:-left-[35px]"
            src={blueSquare}
            alt=""
          />
        </div>
        <img
          className="mb-6 w-full max-h-[281px] md:mb-0 md:max-w-[458px] md:max-h-[316px]"
          src={valueImg}
          alt="A hand building up small bricks"
        />
      </div>
    </section>
  );
};

export default Values;
