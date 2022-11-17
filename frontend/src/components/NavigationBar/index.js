import React from 'react'
import { BsSearch } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Button from "../Button";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo Main Color.png";

const index = () => {
    const navLinks = [
      { name: "Pricing", path: "/pricing" },
      { name: "About us", path: "/about" },
      { name: "Resources", path: "/resources" },
      { name: "Company", path: "/company" },
    ];
  return (
    <nav className="w-full h-[96px] px-[72px] flex items-center justify-between">
      <img src={logo} alt="Company logo" className="cursor-pointer" />
      <div className="font-l">
        {navLinks.map((item) => (
          <Link to={item.path} className="px-[30px]">
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-5">
        <div className="w-[14px] h-[14px] cursor-pointer">
          <BsSearch />
        </div>

        <div className="flex items-center h-[20px] cursor-pointer">
          <TbWorld />
          <MdOutlineKeyboardArrowDown />
        </div>
        <Button title="Sign up" path="/signup" primary />
        <Button title="Sign in" path="/signin" />
      </div>
    </nav>
  );
}

export default index