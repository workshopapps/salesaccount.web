import React from "react";
import logo from "../../assets/Logo Main Color.png";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";


const aboutUsData = [
  {
    name: "Our story",
    path: "/",
  },
  {
    name: "Work Enviroment",
    path: "/",
  },
  {
    name: "Email Us",
    path: "/",
  },
];
const resourcesData = [
  {
    name: "Help Center",
    path: "/",
  },
  {
    name: "Support",
    path: "/",
  },
  {
    name: "FAQs",
    path: "/",
  },
];
const ProductData = [
  {
    name: "Pricing",
    path: "/",
  },
  {
    name: "How it works",
    path: "/",
  },
  {
    name: "Features",
    path: "/",
  },
  {
    name: "Start for free",
    path: "/",
  },
];


const index = () => {
  return (
    <footer className="bg-[#D1E9FF] w-full flex justify-between py-[100px] pl-[110px] pr-[307px]">
      <div>
        <img src={logo} alt="Company logo" />
        <div className="pt-[4px] mb-[18px] w-[230px]">
          <p className="text-[#344054] font-normal text-[20px]">
            This is a website that can help you balance your sales account
          </p>
        </div>
        <div className="text-[#98A2B3] flex space-x-[20px]">
          <BsTwitter size={32} />
          <BsFacebook size={32} />
          <BsInstagram size={32} />
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="font-medium text-[#344054] text-[28px]">About Us</h3>
        {aboutUsData.map((item) => (
          <Link
            to={item.path}
            className="text-[#344054] font-normal text-[20px] py-[4px]"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col">
        <h3 className="font-medium text-[#344054] text-[28px]">Resources</h3>
        {resourcesData.map((item) => (
          <Link
            to={item.path}
            className="text-[#344054] font-normal text-[20px] py-[4px]"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col">
        <h3 className="font-medium text-[#344054] text-[28px]">Product</h3>
        {ProductData.map((item) => (
          <Link
            to={item.path}
            className="text-[#344054] font-normal text-[20px] py-[4px]"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default index;
