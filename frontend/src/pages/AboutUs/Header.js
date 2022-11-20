import React, { useState } from "react";
import logo from "../../assets/images/AboutUs/accountPal.svg";
import search from "../../assets/images/AboutUs/search-lg.svg";
import globe from "../../assets/images/AboutUs/globe-02.svg";
import downIcon from "../../assets/images/AboutUs/chevron-down.svg";
import hamburger from "../../assets/images/AboutUs/hamburger.svg";
import cancel from "../../assets/images/AboutUs/iconoir_cancel.png";

const Header = () => {
  // Handle mobile menu
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header className="relative flex w-full border-b border-[#194185]cursor-pointer mb-[51px] bg-[#F9FAFB] h-[50px] px-6 justify-between items-center md:border-b md:border-[#D1E9FF] md:h-[100px] md:px-[120px] md:gap-x-[139px]">
      <img className=" md:w-[339px]" src={logo} alt="Logo" />
      <nav className="hidden items-center whitespace-nowrap md:flex md:gap-x-[28px]">
        <p className="text-[#101828]">Pricing</p>
        <p className="text-[#101828]">About</p>
        <p className="text-[#101828]">Guides</p>
        <p className="text-[#101828]">Resources</p>
        <p className="text-[#101828]">Company</p>
      </nav>
      <div className="hidden items-center md:flex md:gap-x-[57px]">
        <div className="flex items-center gap-x-[44px]">
          <img className="min-w-[24px]" src={search} alt="Search icon" />
          <div className="flex gap-x-1 items-center">
            <img className="min-w-[24px]" src={globe} alt="globe icon" />
            <img
              className="min-w-[24px]"
              src={downIcon}
              alt="down arrow Icon"
            />
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          <button className="w-[90px] h-[44px] bg-white border text-sm border-[#2E90FA] rounded-lg font-semibold text-[#1570EF] ">
            Sign up
          </button>
          <button className="w-[90px] h-[44px] bg-[#2E90FA] text-sm rounded-lg font-semibold text-white ">
            Login
          </button>
        </div>
      </div>
      <img
        className=" md:hidden"
        onClick={handleMobileMenu}
        src={hamburger}
        alt="hamburger menu"
      />
      {/* Mobile Nav */}
      {mobileMenu && (
        <nav className="bg-[#F9FAFB] uppercase flex flex-col gap-y-8 px-[36px] py-[52px] items-center justify-center w-[240px] h-[460px]  rounded absolute top-[50px] z-10 right-1">
          <p className="text-[#101828] text-sm font-semibold">About Us</p>
          <p className="text-[#101828] text-sm font-semibold">FAQs</p>
          <p className="text-[#101828] text-sm font-semibold">Resources</p>
          <p className="text-[#101828] text-sm font-semibold">Guides</p>
          <p className="text-[#101828] text-sm font-semibold">Pricing</p>
          <p className="bg-[#2E90FA] flex justify-center items-center w-[142px] h-[32px] text-white py-[10px] px-[18px] rounded-lg">
            About Us
          </p>
          <img
            onClick={handleMobileMenu}
            className="absolute top-[78px] left-2"
            src={cancel}
            alt="Cancel Menu icon"
          />
        </nav>
      )}

      {/* Mobile Nav */}
    </header>
  );
};

export default Header;
