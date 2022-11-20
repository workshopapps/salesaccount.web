import React from "react";

const CTA = () => {
  return (
    <section className="w-full bg-[#EFF8FF] text-center flex flex-col items-center justify-evenly md:text-left md:justify-between  h-[192px] px-6 pt-4 pb-[22px] gap-x-6 md:gap-x-[104px] md:px-[120px] md:h-[251px] md:flex-row">
      <div className="">
        <h5 className="text-[#194185] font-semibold text-xl md:mb-[20px] md:text-5xl">
          Begin that journey with us!!!
        </h5>
        <p className="text-[#1D2939] text-sm md:text-xl">
          Join us today so as to make a difference in your own career.
        </p>
      </div>
      <div className=" flex gap-x-[52px]">
        <button className="bg-[#2E90FA] text-center rounded-lg px-[18px] py-[10px] font-semibold">
          Join us now
        </button>
        <button className="bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] text-[#344054] rounded-lg px-[18px] py-[10px]">
          Find out more
        </button>
      </div>
    </section>
  );
};

export default CTA;
