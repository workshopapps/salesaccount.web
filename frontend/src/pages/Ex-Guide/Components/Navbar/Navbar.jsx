import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/Img/Logo Main Color.png";

function Navbar() {
  const [isClicked, setIsClicked] = useState(true);
  const clickHandler = () => {
    isClicked === false ? setIsClicked(true) : setIsClicked(false);
  };
  return (
    <div>
      {/* mobile */}
      <div className="mobile-nav flex justify-between items-center p-4 lg:hidden">
        {/* logo */}
        <div className="logo flex items-center">
          <img src={logo} alt="Main Logo" />
          <h2 className="font-bold text-lg md:text-xl">Account Pal</h2>
        </div>
        {/* logo ends here */}

        {/* hambuger */}
        <div className="ham" onClick={clickHandler}>
          {isClicked ? <MenuIcon /> : <CloseIcon />}
        </div>
        {!isClicked && (
          <div className="nav-items absolute bg-white top-[3.5em] left-0 z-10 text-center w-full ">
            <ul className="flex flex-col items-center space-y-[1em] text-lg font-semibold ">
              <li>PRICING</li>
              <li>ABOUT</li>
              <Link to="/">
                <li onClick={() => setIsClicked(true)}>GUIDE</li>
              </Link>
              <li>RESOURCES</li>
              <li>COMPANY</li>
              <li>THIS IS NOT THE NAV</li>
            </ul>
            <div className="Nav-button mt-[2em]">
              <button className="button1 px-[1em] py-[0.5em] rounded-lg">
                Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
      {/* desktop */}
      <div className="desktop-nav hidden lg:flex justify-between items-center py-4 px-[4em] lg:px-[6em] ">
        {/* logo */}
        <div className="logo flex items-center">
          <img src={logo} alt="Main Logo" />
          <h2 className="font-bold text-xl">Account Pal</h2>
        </div>
        {/* logo ends here */}

        <div className="">
          <ul className="desktop-nav flex space-x-[1em] lg:space-x-[2em] marker: text-sm lg:text-xs">
            <li>PRICING</li>
            <li>ABOUT</li>
            <Link to="/">
              <li onClick={() => setIsClicked(true)}>GUIDE</li>
            </Link>
            <li>RESOURCES</li>
            <li>THIS IS NOT THE NAV</li>
            <li>COMPANY</li>
          </ul>
        </div>
        <div className="Nav-button ">
          <button className="button1 px-[1em] py-[0.5em] rounded-lg">
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
