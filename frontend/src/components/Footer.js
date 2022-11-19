import React from "react";
import twitter from "../pages/images/twitter.png";
import facebook from "../pages/images/facebook.png";
import instagram from "../pages/images/instagram.png";
import logo from "../pages/images/logo.png";

class Footer extends React.Component {
  render() {
    const about_us = ["Our Story", "Work Environment", "Email Us"];
    const resources = ["Help Center", "Support", "FAQs"];
    const products = ["Pricing", "How it works", "Features", "Start for free"];
    return (
      <div classname="my-10 px-4 text-gray-700 bg-sky-100">
        <div className="px-24 align-center w-full bg-sky-100 text-[14px] flex justify-between sm:flex-column">
          <div className="mb-4 ">
            <img src={logo} alt="logo" className="pt-0 mt-0 w-32 text-center" />
            <p className="text-[40px] font-bold">Account Pal</p>
            <p className="pt-3 text-[20px] w-[327px] font-normal mb-12">
              This is a website that can help you balance your sales account
            </p>
            <div className="flex justify-between w-[100px] sm:flex sm:justify-between sm:absolute sm:bottom-3 sm:right-3">
              <span>
                <img src={twitter} alt="twitter" className="w-5 h-5" />
              </span>
              <span>
                <img src={facebook} alt="facebook" className="w-5 h-5" />
              </span>
              <span>
                <img src={instagram} alt="instagram" className="w-6 h-6" />
              </span>
            </div>
          </div>
          <div classname="sm:flex">
            <div className="mb-4 py-12">
              <b className="font-medium text-[28px] mb-2">About Us</b>
              {about_us.map((e) => (
                <div className="font-normal text-[20px] mb-2">
                  <span>{e}</span>
                </div>
              ))}
            </div>

            <div className="mb-4 py-12">
              <b className="font-medium text-[28px] mb-2">Resources</b>
              {resources.map((e) => (
                <div className="font-normal text-[20px] mb-2">
                  <span>{e}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4 py-12 sm:py-1 sm:absolute sm:bottom-2 sm:left-2">
            <b className="font-medium text-[28px] mb-2">Products</b>
            {products.map((e) => (
              <div className="font-normal text-[20px] mb-2">
                <span>{e}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
