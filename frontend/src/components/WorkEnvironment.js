import React from "react";

const WorkEnvironment = () => {
  return (
    <section className=" w-full pb-7 flex flex-col justify-center items-center px-6 text-center md:bg-[#D1E9FF] md:pt-8 md:pb-7">
      <h2 className="text-[#194185] text-xl font-semibold mb-3 md:font-black md:mb-[20px] md:text-5xl">
        Our Work Environment
      </h2>
      <p className="text-[#1D2939] mb-6 text-sm md:mb-3 md:w-[700px] md:text-xl ">
        Our IT network and computer systems have shortened the time needed by
        accountants to prepare and present their financial information to
        management.
      </p>
      <button className="bg-white rounded-lg border border-[#D0D5DD] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] text-[#344054] w-[96px] h-[44px] flex  items-center justify-center md:text-lg md:w-[164px] md:h-[60px]">
        Join us now
      </button>
    </section>
  );
};

export default WorkEnvironment;
