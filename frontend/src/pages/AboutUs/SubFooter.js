import React from "react";
import facebook from "../../assets/images/AboutUs/facebook.svg";
import twitter from "../../assets/images/AboutUs/twitter.svg";
import insta from "../../assets/images/AboutUs/ph_instagram-logo-fill.svg";
const SubFooter = () => {
  return (
    <div className="grid gap-5  grid-cols-2 ">
      <div className="flex flex-col text-[#344054] md:mt-[111px] md:gap-6">
        <h6 className="text-[18px] font-semibold md:text-[28px] md:font-medium ">
          About Us
        </h6>
        <p className="md:text-xl">Our story</p>
        <p className="md:text-xl">Work Enviroment</p>
        <p className="md:text-xl">Email Us</p>
      </div>

      <div className="flex flex-col text-[#344054] md:mt-[111px] md:gap-6">
        <h6 className="text-[18px] font-semibold md:text-[28px] md:font-medium ">
          Resources
        </h6>
        <p className="md:text-xl">Help Center</p>
        <p className="md:text-xl">Support</p>
        <p className="md:text-xl">FAQs</p>
      </div>

      <div className="flex flex-col text-[#344054] md:mt-[111px] md:gap-6">
        <h6 className="text-[18px] font-semibold md:text-[28px] md:font-medium ">
          Product
        </h6>
        <p className="md:text-xl">Pricing</p>
        <p className="md:text-xl">How it works</p>
        <p className="md:text-xl">Features</p>
        <p className="md:text-xl">Start for free</p>
      </div>
      <div className="flex gap-x-7 items-center">
        <img src={twitter} alt="twitter" />
        <img src={facebook} alt="facebook" />
        <img src={insta} alt="insta" />
      </div>
    </div>
  );
};

export default SubFooter;
