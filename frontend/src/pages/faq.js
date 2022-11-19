import React, { useState, useRef } from "react";
import faqArray from "../faqArray";
import Accordion from "../components/faq-component";

const Faq = () => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("max-h-0 overflow-hidden");
  const [rotate, setRotate] = useState("fa-chevron-down");

  const content = useRef(null);

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "text-blue underline" : "");
    setHeightState(
      setActive === ""
        ? "max-h-96 transition-all overflow-visible"
        : "max-h-0 overflow-hidden"
    );
    setRotate(
      setActive === "" ? "rotate-180 transition-all" : "transition-all"
    );
    return;
  };

  return (
    <>
      <div className="bg-likewhite sm:h-[1600px] h-[800px]">
        <div className="sm:h-[1055px] h-[500px] min-w-[375px] sm:w-[1228px] justify-center flex font-body sm">
          <div className="flex-col space-y-[25px] sm:space-y-[72px]">
            <h2 className="sm:text-5xl text-sm text-blue sm:leading-[60px] leading-[25px] w-[279px] sm:w-[1000px] font-semibold pr-[25px] pl-[25px] sm:p-0">
              Frequently Asked Questions
            </h2>

            {faqArray.map((qna) => (
              <div className="w-[375px] sm:w-[1000px]">
                <Accordion question={qna.question} answer={qna.answer} />
              </div>
            ))}

            <div className="relative flex w-[375px] sm:w-[1000px] text-sm space-x-96">
              <div className="flex space-x-1">
                <button className="text-blue  w-[73.27px] h-[73.27px] rounded-full bg-slate-300">
                  1
                </button>
                <button className="text-gray w-[73.27px] h-[73.27px] rounded-full bg-white">
                  2
                </button>
              </div>
              <button className="absolute right-0 border-slate-800 w-[95px] h-[43px] sm:w-[161px] sm:h-[66px] border-2 border-gray-800 rounded-2xl bg-white">
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