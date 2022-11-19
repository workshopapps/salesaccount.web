import React from "react";
import { Link } from "react-router-dom";
import logo from "../pages/images/logo.png";
import harmbuger from "../pages/images/harmbuger.png";
import globe from "../pages/images/globe.png";
import arrow_down from "../pages/images/arrow-down.png";
import user from "../pages/images/user.png";
import search from "../pages/images/search.png";
import {Button} from "../stories/Button"


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
      <div className="py-1 px-6 sm:pl-1 flex flex-row stretch">
        <div className="w-1/4">
          <img
            src={harmbuger}
            alt=""
            className="sm:block md:hidden lg:hidden"
          />
          <img src={logo} alt="logo" classname="" />
        </div>
        <div className="flex flex-row gap-2">
          {links.map((link) => (
            <Link to={link.href}>{link.name}</Link>
          ))}
        </div>
        <div className="flex flex-row float-right">
          <img src={globe} alt="globe" className="w-[20px]" />
          <img src={search} alt="search" className="w-[20px]" />
          <img src={arrow_down} alt="arrow_down" className="w-[20px]" />
          <Button secondary size="small" labe="Sign up" />
          <Button primary size="small" labe="Login" />
          <img
            src={user}
            alt="user"
            className="sm:inline sm:align-right md:hidden lg:hidden"
          />
        </div>
      </div>
    );
  }
}

export default Header;
