import React from "react";

const Benefits = () => {
  return (
    <section className=" w-full px-6 md:pt-[42px] md:px-[120px] ">
      <h2 className="text-[#194185] text-xl font-semibold mb-3 text-center my-0 mx-auto md:text-5xl md:font-bold md:mb-12">
        Benefits of Working at Account Pal
      </h2>
      <div className="flex flex-col md:flex-col">
        <div className=" flex flex-col justify-between md:mb-[52px] md:flex-row">
          <div className="flex justify-between mb-4 gap-x-4 md:mb-0">
            <h2 className="text-[#84CAFF] font-semibold text-xl md:text-[56px] ">
              01
            </h2>
            <div className="">
              <h3 className="text-[#1D2939] text-sm font-semibold md:text-xl">
                Professional environment
              </h3>
              <p className="text-[#2E90FA] text-xs font-medium  md:text-xl md:max-w-[350px]">
                Collaboration with experienced professionals who are passionate
                about what they do.
              </p>
            </div>
          </div>
          <div className="flex justify-between mb-4 gap-x-4 md:mb-0">
            <h2 className="text-[#84CAFF] font-semibold text-xl md:text-[56px] ">
              02
            </h2>
            <div className="">
              <h3 className="text-[#1D2939] text-sm font-semibold md:text-xl">
                Team Bonding
              </h3>
              <p className="text-[#2E90FA] text-xs font-medium  md:text-xl md:max-w-[350px]">
                We are about the welfare and mental health of our team members;
                hence extra curricular activities are organized from time to
                time for team bonding.
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-between md:mb-[52px] md:flex-row">
          <div className="flex justify-between mb-4 gap-x-4 md:mb-0">
            <h2 className="text-[#84CAFF] font-semibold text-xl md:text-[56px] ">
              03
            </h2>
            <div className="">
              <h3 className="text-[#1D2939] text-sm font-semibold md:text-xl">
                Equality
              </h3>
              <p className="text-[#2E90FA] text-xs font-medium  md:text-xl md:max-w-[350px]">
                There is a free and fair workspace where all meaningful ideas
                are welcomed on how to grow and do better.
              </p>
            </div>
          </div>
          <div className="flex justify-between mb-4 gap-x-4 md:mb-0">
            <h2 className="text-[#84CAFF] font-semibold text-xl md:text-[56px] ">
              04
            </h2>
            <div className="">
              <h3 className="text-[#1D2939] text-sm font-semibold md:text-xl">
                Paycheck and Allowance{" "}
              </h3>
              <p className="text-[#2E90FA] text-xs font-medium  md:text-xl md:max-w-[350px]">
                We encourage our team by giving generous and mouth watering
                allowances and salary for jobs well done.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
