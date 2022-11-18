import React from "react";
import hero from "./images/hero.png";
import user_check from "./images/user-check.png";
import code from "./images/code.png";
import headset_mic from "./images/headset-mic.png";
import dollar_coin from "./images/dollarCoin.png";
import heroMobile from "./images/heroMobile.png";

class CareersPage extends React.Component {
  render() {
    const teams = [
      {
        name: "Product",
        logo: user_check,
      },
      {
        name: "Engineering",
        logo: code,
      },
      {
        name: "Marketing",
        logo: headset_mic,
      },
      {
        name: "Finance",
        logo: dollar - coin,
      },
    ];

    return (
      <div>
        <div className="relative text-center bg-opacity-50 hero">
          <img src={hero} alt="hero" className="sm-hidden " />
          {/* <img src={heroMobile} alt="heroMobile" className="sm-block md-hidden lg-hidden xl-hidden " /> */}{" "}
          <h1 className="absolute text-5xl top-1/2 my-auto">Careers</h1>
        </div>
        <div className="">
          <h1 className="text-center text-5xl text-[#1849A9] pt-100 font-bold">
            JOIN US
          </h1>
          <p className="text-center w-50 text-2xl">
            Want to join an exciting work environment operating at the forefront
            of AI technology development for accounting software?
          </p>
        </div>
        <div classname="bg-gray-100 pt-3">
          <h1 className="text-center text-[96px] text-[#1849A9] leading-6">
            OUR TEAMS
          </h1>
          <div className="flex">
            {teams.map((el)=>{
                <div className="flex space-around">
                    <h2 className="text-center text-[48px] leading-[60px">{el.name}</h2>
                    <img src={el.logo} alt="team_logo" />
                </div>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CareersPage;
