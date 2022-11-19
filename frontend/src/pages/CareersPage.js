import React from "react";
import hero from "./images/hero.png";
import user_check from "./images/user-check.png";
import code from "./images/code.png";
import headset_mic from "./images/headset-mic.png";
import dollar_coin from "./images/dollarCoin.png";
import clock from "./images/alarm.png";
import earth from "./images/earth.png";
import suitcase from "./images/suitcase.png";
import gift from "./images/Gift.png";
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
        logo: dollar_coin,
      },
    ];

    const openings=[{
      title:"ACCOUNT MANAGER",
      
    }];

    return (
      <div>
        <div className="relative text-center bg-opacity-50 hero">
          <img src={hero} alt="hero" className="sm-hidden " />
          {/* <img src={heroMobile} alt="heroMobile" className="sm-block md-hidden lg-hidden xl-hidden " /> */}{" "}
          <h1 className="absolute text-5xl top-1/2 my-auto">Careers</h1>
        </div>
        <div className="px-6 py-7">
          <div>
            <h1 className="text-center text-5xl font-bold text-[#1849A9] font-normal">
              JOIN US
            </h1>
            <p className="text-center text-[40px] leading-[50px] w-50">
              Want to join an exciting work environment operating at the
              forefront of AI technology development for accounting software?
            </p>
          </div>
        </div>

        <div classname="w-full px-12 pt-7 bg-gray-100 ">
          <h1 className="text-center bg-gray-100 pb-7 mx-auto text-8xl font-normal pt-10 text-[#1849A9] leading-6">
            OUR TEAMS
          </h1>
          <div className="bg-gray-100 pt-5 grid grid-cols-4">
            {teams.map((team) => (
              <div className="flex flex-col my-7 max-w-7xl">
                <h2 className="text-center text-[48px] leading-[60px]">
                  {team.name}
                </h2>

                <img
                  src={team.logo}
                  alt="team_logo"
                  className="text-center w-[120px] self-center"
                />
              </div>
            ))}
          </div>
          <div className="px-15 bg-gray-100 text-center py-4">
            <p className="text-center mx-auto text-[40px] font-normal leading-[50px] max-w-7xl">
              We are a global company with root spread worldwide, and our team
              reflects that. The Account Pal team is building the future of AI
              technology to help improve efficiency and boost productivity.
            </p>
          </div>
        </div>

        <div className="py-5 pt-7">
          <h1 className="text-8xl font-normal text-center text-[#1849A9] mx-20">
            BENEFITS
          </h1>
          <div className="pl-60 pt-7">
            <span className="inline-flex items-center my-2">
              <img src={clock} alt="clock" className="self-center m-2" />{" "}
              <span className="text-[40px] text-[#101828]">
                Flexi-time and remote working
              </span>
            </span>
            <span className="inline-flex items-center my-2">
              <img src={earth} alt="earth" className="self-center m-2" />{" "}
              <span className="text-[40px] text-[#101828]">
                Opportunity to be part of a world-class team
              </span>
            </span>
            <span className="inline-flex items-center my-2">
              <img src={suitcase} alt="suitcase" className="self-center m-2" />{" "}
              <span className="text-[40px] text-[#101828]">
                Fantastic work culture
              </span>
            </span>
            <span className="inline-flex items-center my-2">
              <img src={gift} alt="gift" className="self-center m-2" />{" "}
              <span className="text-[40px] text-[#101828]">
                Competitive compensation package and benefits
              </span>
            </span>
          </div>
        </div>

        <div className="bg-gray-100">
            <h1 className="text-8xl text-[#1849A9] text-center">CURRENT ONPENINGS</h1>
          <div className="grid grid-cols-2">
            {}
          
          </div>
        </div>
      </div>
    );
  }
}

export default CareersPage;
