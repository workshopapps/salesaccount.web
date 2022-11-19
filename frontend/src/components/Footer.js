import React from "react";
import SubFooter from "./SubFooter";
import Logo from "../assets/Logo Main Color.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import insta from "../assets/ph_instagram-logo-fill.svg";

const Footer = () => {
  return (
    <footer className="bg-[#D1E9FF] flex justify-between flex-col px-6 md:flex-row md:pb-20 md:px-[120px] md:h-[510px]">
      <div className="md:flex md:flex-col md:justify-between md:max-w-[330px]">
        <div className="flex items-start flex-col md:items-start">
          <div className="flex items-center md:flex-col">
            <img className="w-[70px] md:w-auto" src={Logo} alt="" />
            <h1 className="text-[#344054] text-[28px] font-semibold md:text-[40px]">
              Account Pal
            </h1>
          </div>
          <p className="text-[#344054] max-w-[250px] mb-7 md:mb-0 md:text-xl md:mt-[20px]">
            This is a website that can help you balance your sales account
          </p>
        </div>
        <div className="hidden md:flex md:gap-x-9">
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebook" />
          <img src={insta} alt="insta" />
        </div>
      </div>

      <div className="hidden flex-col text-[#344054] md:flex md:mt-[111px] md:gap-6">
        <h6 className="text-[18px] font-semibold md:text-[28px] md:font-medium ">
          About Us
        </h6>
        <p className="md:text-xl">Our story</p>
        <p className="md:text-xl">Work Enviroment</p>
        <p className="md:text-xl">Email Us</p>
      </div>

      <div className="hidden flex-col text-[#344054] md:flex md:mt-[111px] md:gap-6">
        <h6 className="text-[18px] font-semibold md:text-[28px] md:font-medium ">
          Resources
        </h6>
        <p className="md:text-xl">Help Center</p>
        <p className="md:text-xl">Support</p>
        <p className="md:text-xl">FAQs</p>
      </div>

      <div className="hidden flex-col text-[#344054] md:flex md:mt-[111px] md:gap-6">
        <h6 className="text-[18px] font-semibold md:text-[28px] md:font-medium ">
          Product
        </h6>
        <p className="md:text-xl">Pricing</p>
        <p className="md:text-xl">How it works</p>
        <p className="md:text-xl">Features</p>
        <p className="md:text-xl">Start for free</p>
      </div>
      <div className="md:hidden">
        <SubFooter />
      </div>
    </footer>
  );
};

export default Footer;
