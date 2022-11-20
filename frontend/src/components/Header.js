import React from "react";
import { Link } from "react-router-dom";
import logo from "../pages/images/logo.png";
import harmbuger from "../pages/images/harmbuger.png";
import globe from "../pages/images/globe.png";
import logo_mobile from "../pages/images/logoMobile.png";
import arrow_down from "../pages/images/arrow-down.png";
import search from "../pages/images/search.png";
import { Button } from "../stories/Button";

class Header extends React.Component {
  render() {
    const links = [
      { name: "Pricing", href: "pricing" },
      { name: "About", href: "about" },
      { name: "Guides", href: "guides" },
      { name: "Resources", href: "resources" },
      { name: "Company", href: "company" },
    ];
    return (
      <div>
        <div className="hidden p-1 flex flex-row gap-2 w-screen sm:block">
          <div className="w-20 m-0">
            <img src={logo} alt="logo" className="" />
          </div>
          <div className="flex flex-row gap-2">
            {links.map((link) => (
              <Link to={link.href}>{link.name}</Link>
            ))}
          </div>
          <div className="flex flex-row">
            <img src={globe} alt="globe" className="w-[20px]" />
            <img src={search} alt="search" className="w-[20px]" />
            <img src={arrow_down} alt="arrow_down" className="w-[20px]" />
            <Button secondary size="small" labe="Sign up" />
            <Button primary size="small" labe="Login" />
          </div>
        </div>

        <div className="sm:hidden flex flex-center p-2 h-14">
          <img src={logo_mobile} alt="logo" className="w-[25vw] h-10" />
          <img
            src={harmbuger}
            alt="hambuger"
            className="h-8 w-8 absolute left-[75%]"
          />
          {/* <div className="collapse navbar-collapse flex-grow flex flex-row gap-2">
            {links.map((link) => (
              <Link to={link.href}>{link.name}</Link>
            ))}
          </div> */}
        </div>
      </div>
    );
  }
}

export default Header;
