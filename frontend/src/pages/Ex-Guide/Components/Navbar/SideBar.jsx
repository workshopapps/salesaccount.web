import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function SideBar() {
  return (
    <div className="side-bar hidden md:flex w-[25%] p-[1em] px-[2em] text-base bg-[#F2F4F7]">
      <ul className="font-bold w-[80%]">
        <Link to="/intro">
          <li>Introduction</li>
        </Link>
        <Link to="/guide">
          <li>How to use Accountpal</li>
        </Link>
        <Link to="/features">
          <li>Key Features</li>
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
