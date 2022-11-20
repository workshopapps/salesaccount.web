import React from "react";
import { Link } from "react-router-dom";

function HomeNav() {
  return (
    <div className="md:hidden">
      {/* <div className="bg-[#2E90FA] p-4  mb-[2em] text-lg text-white  w-full ">
        <h1 className="text-center lg">
          A step by step guide on the successful use of Accountpal
        </h1>
      </div> */}
      <div className="hero flex flex-col gap-5 p-[1em] mb-[5em] mx-auto md:w-[70%]">
        <Link to="/intro">
          <div className="flex flex-col bg-[#D1E9FF] p-[1em] text-center ">
            <h1 className="font-bold">Introduction</h1>
            <p className="font-light">Get indept idea of Accountpal</p>
          </div>
        </Link>
        <Link to="/guide">
          <div className="flex flex-col bg-[#D1E9FF] p-[1em] text-center ">
            <h1 className="font-bold">How to use Accountpal</h1>
            <p className="font-light">A step gulde</p>
          </div>
        </Link>
        <Link to="/features">
          <div className="flex flex-col bg-[#D1E9FF] p-[1em] text-center ">
            <h1 className="font-bold">Key Feature of Accountpal</h1>
            <p className="font-light">
              Get an idea why you should use Accountpal
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomeNav;
