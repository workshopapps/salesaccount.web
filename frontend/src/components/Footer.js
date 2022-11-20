import React from "react";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import logo from "../assets/logo.png";

class Footer extends React.Component {
  render() {
    const about_us = ["Our Story", "Work Environment", "Email Us"];
    const resources = ["Help Center", "Support", "FAQs"];
    const products = ["Pricing", "How it works", "Features", "Start for free"];
    return (
      <div classname="my-10 px-4 text-gray-700 bg-sky-100">
        <div className="px-2 align-center w-full bg-sky-100 text-[14px] flex flex-col md:flex-row justify-between">
          <div className="inline-flex md:flex md:flex-col align-center space-between cursor-pointer">
            <img src={logo} alt="logo" className="pt-0 mt-0 w-20 text-center" />
            <p className="text-[27px] font-semibold relative top-1 left-30">
              Account Pal
            </p>
          </div>
          <p className="pt-3 text-[20px] w-[327px] font-normal mb-12">
            This is a website that can help you balance your sales account
          </p>

          <div className="sm:mb-4 py-4">
            <b className="font-medium text-[18px] mb-2">About Us</b>
            {about_us.map((e) => (
              <div className="font-normal text-[16px] mb-2">
                <span>{e}</span>
              </div>
            ))}
          </div>

          <div className="sm:mb-4 py-4">
            <b className="font-medium text-[18px] mb-2">Resources</b>
            {resources.map((e) => (
              <div className="font-normal text-[16px] mb-2">
                <span>{e}</span>
              </div>
            ))}
          </div>

          <div className="sm:mb-4 py-4">
            <b className="font-medium text-[18px] mb-2">Products</b>
            {products.map((e) => (
              <div className="font-normal text-[16px] mb-2">
                <span>{e}</span>
              </div>
            ))}
          </div>

        </div>
          <div className="flex pb-6 bg-sky-100 w-full">
            <span className="mr-3">
              <img src={twitter} alt="twitter" className="w-5 h-5 cursor-pointer" />
            </span>
            <span className="mr-3">
              <img src={facebook} alt="facebook" className="w-5 h-5 cursor-pointer" />
            </span>
            <span className="mr-3">
              <img src={instagram} alt="instagram" className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
      </div>
    );
  }
}

export default Footer;
