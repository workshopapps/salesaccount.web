import React from "react";
import Adeleke from "../../assets/images/AboutUs/adeleke.svg";
import Dolapo from "../../assets/images/AboutUs/dolapo.svg";
import Michael from "../../assets/images/AboutUs/michael.svg";
import Olanike from "../../assets/images/AboutUs/olanike.svg";

const Team = () => {
  return (
    <section className="flex flex-col mt-[30px] pb-[30px] px-6 md:pb-[50px] md: md:px-[120px]">
      <div className="text-center my-0 mx-auto mb-6 md:max-w-[600px] md:mb-12">
        <h3 className="text-[#194185] text-xl font-semibold mb-3 md:text-5xl md:font-bold md:mb-[20px]">
          Meet our Team
        </h3>
        <p className="text-[#1D2939] text-sm md:text-xl">
          We are made up of energetic and passionate members who are creative
          and willing to improve our skills every day.
        </p>
      </div>
      <div className="flex flex-col gap-y-7 mb-6 md:mb-[60px] md:gap-y-0 md:flex-row md:justify-between md:gap-x-[104px]">
        <div className="flex gap-x-16 md:gap-x-[104px]">
          <div className="flex flex-col items-center ">
            <img className="mb-4" src={Adeleke} alt="Adeleke" />
            <h5 className="font-semibold text-sm text-[#101828]">
              Adeleke Mauteen
            </h5>
            <h6 className="text-[#2E90FA] text-xs font-medium">
              PRODUCT DESIGNER
            </h6>
          </div>
          <div className="flex flex-col items-center ">
            <img className="mb-4" src={Dolapo} alt="Dolapo" />
            <h5 className="font-semibold text-sm text-[#101828]">
              Adedolapo Opawale
            </h5>
            <h6 className="text-[#2E90FA] text-xs font-medium">
              PRODUCT DESIGNER
            </h6>
          </div>
        </div>
        <div className="flex gap-x-16 md:gap-x-[104px]">
          <div className="flex flex-col items-center ">
            <img className="mb-4" src={Michael} alt="Micheal Babajide" />
            <h5 className="font-semibold text-sm text-[#101828]">
              Micheal Babajide
            </h5>
            <h6 className="text-[#2E90FA] text-xs font-medium">
              PRODUCT DESIGNER
            </h6>
          </div>
          <div className="flex flex-col items-center ">
            <img className="mb-4" src={Olanike} alt="Olanike Margaret" />
            <h5 className="font-semibold text-sm text-[#101828]">
              Olanike Margaret
            </h5>
            <h6 className="text-[#2E90FA] text-xs font-medium">
              PRODUCT DESIGNER
            </h6>
          </div>
        </div>
      </div>
      <button className="bg-[#2E90FA] mx-auto shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg px-[18px] py-[10px] text-white whitespace-nowrap w-[121px] h-[44px] md:w-[128px] md:h-[60px] md:px-7 md:py-4 md:text-lg">
        View more
      </button>
    </section>
  );
};

export default Team;
