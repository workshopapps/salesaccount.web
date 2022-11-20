import React from "react";

function Section1() {
  return (
    <div>
      <div className="bg-[#2E90FA] p-4  mb-[2em] text-lg text-white  w-full ">
        <h1 className="text-center lg">
          A step by step guide on the successful use of Accountpal
        </h1>
      </div>
      <div className="hero flex flex-col gap-5 p-[1em] mb-[5em] mx-auto md:w-[70%]">
        <div className="flex flex-col bg-[#D1E9FF] p-[1em] text-center ">
          <h1 className="font-bold">Introduction</h1>
          <p className="font-light">Get indept idea of Accountpal</p>
        </div>
        <div className="flex flex-col bg-[#D1E9FF] p-[1em] text-center ">
          <h1 className="font-bold">How to use Accountpal</h1>
          <p className="font-light">A step gulde</p>
        </div>
        <div className="flex flex-col bg-[#D1E9FF] p-[1em] text-center ">
          <h1 className="font-bold">Key Feature of Accountpal</h1>
          <p className="font-light">
            Get an idea why you should use Accountpal
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
