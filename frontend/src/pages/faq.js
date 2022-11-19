import React, { useState, useRef } from "react";
import faqArray from "../faqArray";

const Faq = () => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("max-h-0 overflow-hidden");
  const [rotate, setRotate] = useState("fa-chevron-down");

  const content = useRef(null);

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "text-blue underline" : "");
    setHeightState(
      setActive === "" ? "max-h-96 transition-all" : "max-h-0 overflow-hidden"
    );
    setRotate(
      setActive === "" ? "rotate-180 transition-all" : "transition-all"
    );
  };

  return (
    <>
      <div className="bg-likewhite h-[1600px]">
        <div className="h-[1055px] min-w-[1228px] justify-center flex font-body">
          <div className="flex-col space-y-[72px]">
            <h2 className="text-5xl text-blue leading-[60px]">
              Frequently Asked Questions
            </h2>

            {faqArray.map((qna, key) => (
              <div className="w-[1000px]">
                <div className="flex items-center relative" key={qna.id}>
                  <h3
                    className={`text-lg ${() =>
                      key === "0"
                        ? "text-blue underline"
                        : ""} leading-9 font-normal`}
                  >
                    {qna.question}
                  </h3>
                  <i
                    onClick={toggleAccordion}
                    className={`text-blue ${rotate} absolute right-0 fa-solid fa-chevron-down cursor-pointer`}
                  ></i>
                </div>
                <p
                  ref={content}
                  className={`text-lg text-gray ${setHeight} w-[1000px] break-normal`}
                >
                  {qna.answer}
                </p>
              </div>
            ))}

            <div className="relative flex w-[1000px] space-x-96">
              <div className="flex space-x-1">
                <button className="text-blue  w-[73.27px] h-[73.27px] rounded-full bg-slate-300">
                  1
                </button>
                <button className="text-gray w-[73.27px] h-[73.27px] rounded-full bg-white">
                  2
                </button>
              </div>
              <button className="absolute right-0 border-slate-800 w-[161px] h-[66px] border-2 rounded-2xl bg-white">
                Next<i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
