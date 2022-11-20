import React from "react";
import { BsSearch } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {MdMenu} from "react-icons/md";
import Button from "./Button";
import { Link } from "react-router-dom";
import logo_mobile from "../assets/logoMobile.png";
import logo from "../assets/logo.png"

const Navbar = () => {
  const navLinks = [
    { name: "Pricing", path: "/pricing" },
    { name: "About us", path: "/about" },
    { name: "Resources", path: "/resources" },
    { name: "Company", path: "/company" },
  ];
  return (
    <>
      <nav className="hidden w-full h-[70px] px-[20px] md:px-[10px] md:flex items-center justify-between">
        <img src={logo} alt="Company logo" className="cursor-pointer" />
        <div className="text-[20px] sm:text-[15px] md:text-[16px]">
          {navLinks.map((item) => (
            <Link to={item.path} className="px-[30px] sm:px-[10px]">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4 sm:space-x-1 cursor-pointer">
          <BsSearch size={24} />
          <div className="flex items-center">
            <BsGlobe2 size={24} />
            <MdOutlineKeyboardArrowDown size={24} />
          </div>
          <Button title="Sign up" path="/signup" primary />
          <Button title="Sign in" path="/signin" />
        </div>
      </nav>
      <nav className="w-full h-[70px] px-2 md:hidden md:px-[30px] flex items-center justify-between">
        <img src={logo_mobile} alt="Company logo" className="cursor-pointer" />
            <MdMenu size={42} color="#2E90FA"/>
        {/* 
        <div className="text-[20px] sm:text-[15px] md:text-[18px]">
          {navLinks.map((item) => (
            <Link to={item.path} className="px-[30px] sm:px-[10px]">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4 sm:space-x-1 cursor-pointer">
          <BsSearch size={24} />
          <div className="flex items-center">
            <BsGlobe2 size={24} />
            <MdOutlineKeyboardArrowDown size={24} />
          </div>
          <Button title="Sign up" path="/signup" primary />
          <Button title="Sign in" path="/signin" />
        </div>
         */}
      </nav>
    </>
  );
};

export default Navbar;
