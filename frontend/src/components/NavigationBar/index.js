import React, {useState} from 'react'
import { BsSearch } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Button from "../Button";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo Main Color.png";
import { FcMenu } from 'react-icons/fc'
import { AiOutlineClose } from 'react-icons/ai';

const index = () => {
    const navLinks = [
      { name: "Pricing", path: "/pricing" },
      { name: "About us", path: "/about" },
      { name: "Resources", path: "/resources" },
      { name: "Company", path: "/company" },
    ];
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const [nav, setNav] = useState(false);

     const toggle = () => {
       setNav(!nav);
     };
  return (
    <nav className="w-full h-[96px] px-[72px] flex items-center justify-between">
      <img src={logo} alt="Company logo" className="cursor-pointer" />
      <div className="text-[20px] hidden lg:flex">
        {navLinks.map((item) => (
          <Link to={item.path} className="px-[30px]">
            {item.name}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex items-center space-x-4 cursor-pointer">
        <BsSearch size={24} />

        <div className="flex items-center">
          <BsGlobe2 size={24} />
          <MdOutlineKeyboardArrowDown size={24} />
        </div>
        <Button title="Sign up" path="/signup" primary />
        <Button title="Sign in" path="/signin" />
      </div>

      {/* Hamburger */}
      <div className=" block lg:hidden" onClick={toggle}>
        {nav ? <AiOutlineClose size={28} /> : <FcMenu size={28} />}
      </div>
      {/* mobile menu */}
      <div
        className={
          nav
            ? "lg:hidden w-full absolute top-[96px] left-0 p-2 flex justify-center relative  z-40  h-screen bg-gray-100 "
            : "absolute left-[-100%]"
        }
      >
        <div className="text-[20px] hidden lg:flex">
          {navLinks.map((item) => (
            <Link to={item.path} className="px-[30px]">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex items-center space-x-4 cursor-pointer">
          <BsSearch size={24} />

          <div className="flex items-center">
            <BsGlobe2 size={24} />
            <MdOutlineKeyboardArrowDown size={24} />
          </div>
          <Button title="Sign up" path="/signup" primary />
          <Button title="Sign in" path="/signin" />
        </div>
      </div>
    </nav>
  );
}

export default index