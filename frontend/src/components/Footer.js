import React from "react";
import twitter from "../pages/images/twitter.png";
import facebook from "../pages/images/facebook.png";
import instagram from "../pages/images/instagram.png";

class Footer extends React.Component {
  render() {
    const about_us = ["Our Story", "Work Environment", "Email Us"];
    const resources = ["Help Center", "Support", "FAQs"];
    const products = ["Pricing", "How it works", "Features", "Start for free"];
    return (
      <div classname="my-10 px-4 text-gray-700 bg-sky-100">
        <div className="px-24 align-center w-full bg-sky-100 text-[14px] flex justify-between">
          <div className="mb-4 py-12">
            {/* <img src={} alt="logo" className="my-4 w-32" /> */}
            <p className="w-32 text-[40px] font-semibold">LOGO</p>
            <p className="py-3 text-[20px] w-[327px] font-normal mb-12">
              This is a website that can help you balance your sales account
            </p>
            <div className="flex justify-between w-[100px]">
              <span>
                <img src={twitter} alt="twitter" className="w-5 h-5" />
              </span>
              <span>
                <img src={facebook} alt="facebook" className="w-5 h-5" />
              </span>
              <span>
                <img src={instagram} alt="instagram" className="w-5 h-5" />
              </span>
            </div>
          </div>
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

          <div className="mb-4 py-12">
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
