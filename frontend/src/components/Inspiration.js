import React from "react";
import slack from "../assets/Slack logo.svg";
import github from "../assets/Github logo.svg";
import webflow from "../assets/Webflow logo.svg";

const Inspiration = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-[#D1E9FF] h-[130px] md:h-[194px]">
      <h3 className="text-lg text-[#1D2939] mb-3 font-semibold text-center  md:text-[28px]">
        Inspired by
      </h3>
      <div className="flex items-center justify-between w-full gap-x-[36px] px-6 md:px-[120px] md:gap-x-[360px]">
        <img
          className="max-w-[78px] md:max-w-[140px]"
          src={slack}
          alt="slack"
        />
        <img
          className="max-w-[78px] md:max-w-[140px]"
          src={github}
          alt="github"
        />
        <img
          className="max-w-[78px] md:max-w-[140px]"
          src={webflow}
          alt="webflow"
        />
      </div>
    </section>
  );
};

export default Inspiration;
