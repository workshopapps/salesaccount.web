import React from 'react'
import logo from "../assets/Logo Main Color.svg";
import search from "../assets/search-lg.svg";
import globe from "../assets/globe-02.svg";
import downIcon from "../assets/chevron-down.svg";
import hamburger from "../assets/hamburger.svg";


const Header = () => {
  return (
    <header className="relative flex w-full cursor-pointer h-[110px] px-6 justify-between items-center md:border-b md:border-[#D1E9FF] md:px-[120px] md:gap-x-[139px]">
      <img className="w-[39px] md:w-[100px]" src={logo} alt="Logo" />
      <nav className="hidden items-center whitespace-nowrap md:flex md:gap-x-20">
        <p className="text-[#101828] text-xl">Home</p>
        <p className="text-[#1570EF]">About Us</p>
        <p className="text-[#101828] text-xl">FAQs</p>
        <p className="text-[#101828] text-xl">Pricing</p>
      </nav>
      <div className="hidden items-center md:flex md:gap-x-[57px]">
        <div className="flex items-center gap-x-[44px]">
          <img src={search} alt="Search icon" />
          <div className="flex items-center">
            <img src={globe} alt="globe icon" />
            <img src={downIcon} alt="down arrow Icon" />
          </div>
        </div>
        <button className="w-[118px] h-[44px] bg-[#2E90FA] rounded-lg font-semibold text-white">
          Try it Free
        </button>
      </div>
      <img className=" md:hidden" src={hamburger} alt="hamburger menu" />
      {/* Mobile Nav */}
      <nav className="hidden flex-col gap-y-[26px] pt-8 w-[150px] h-[240px] rounded absolute top-[70px] z-10 bg-white right-1 items-center border border-[#98A2B3] md:hidden md:gap-x-20">
        <p className="text-[#101828] text-xs font-semibold">Pricing</p>
        <p className="text-[#101828] text-xs font-semibold">Blog</p>
        <p className="text-[#101828] text-xs font-semibold">FAQs</p>
        <p className="bg-[#2E90FA] flex justify-center items-center w-[142px] h-[32px] text-white py-[10px] px-[18px] rounded-lg">
          About Us
        </p>
      </nav>

      {/* Mobile Nav */}
    </header>
  );
}

export default Header