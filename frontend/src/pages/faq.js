import React from "react";
import faqArray from "../faqArray";

const Faq = () => {
  return (
    <>
      <div className="bg-likewhite h-[1600px]">
        <div className="h-[1055px] min-w-[1228px] justify-center flex font-body">
          <div className="flex-col space-y-[72px]">
            <h2 className="text-5xl text-blue leading-[60px]">
              Frequently Asked Questions
            </h2>

            {faqArray.map((qna) => (
              <div className="w-[1000px]">
                <div className="flex items-center relative ">
                  <h3 className="text-gray text-lg  leading-9 font-normal">
                    {qna.question}
                  </h3>
                  <i className="text-blue absolute right-0 fa-solid fa-chevron-down cursor-pointer"></i>
                </div>
                <p className="text-lg text-gray w-[1000px] break-normal">
                  {qna.answer}
                </p>
              </div>
            ))}

            <div className="flex w-[1000px] space-x-96">
              <div className="flex space-x-1">
                <button className="text-blue  w-[73.27px] h-[73.27px] rounded-full bg-slate-300">
                  1
                </button>
                <button className="text-gray w-[73.27px] h-[73.27px] rounded-full bg-white">
                  2
                </button>
              </div>
              <button className="border-slate-800 w-[161px] h-[66px] border-2 rounded-2xl bg-white">
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
