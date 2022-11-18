import React from "react";

export default function BlogPreview() {
  return (
      <div className="px-6 pt-6 pb-8 shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] bg-[#FFFFFF]">
        <div>
          <figure>
            <img className="w-full" src="../pexels1.svg" alt="" />
          </figure>
          <div className="flex flex-col gap-3 mt-8">
            <h5 className="text-[#194185] font-semibold text-sm leading-6">
              Accounting
            </h5>
            <div className=" flex justify-between items-start">
              <h4 className=" text-xl leading-snug font-semibold text-[#101828]">
                Common Accounting Terms Explained
              </h4>
              <figure className="w-6 h-6">
                <img className="w-full" src="../arrow.svg" alt="arrow" />
              </figure>
            </div>
            <p className=" text-base leading-[25px] font-normal text-[#667085]">Do you feel lost when accounting jargons are used during sales conversations? Then, this is for you.</p>
          </div>
          <div className="flex gap-3 mt-[34px]">
            <figure className=" w-10 h-10 ">
              <img className=" rounded-full w-full" src="../avatar-full.svg" alt="" />
            </figure>
            <div>
              <h5 className=" leading-[18px] text-sm font-semibold text-[#101828]">Olivia Rhye</h5>
              <p className="text-[#667085] leading-[23px] text-sm font-normal">20 Jan 2022</p>
            </div>
          </div>
        </div>
      </div>
    
  );
}
