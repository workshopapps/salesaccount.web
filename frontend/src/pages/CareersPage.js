import React from "react";
import { Button } from "../stories/Button";
import hero from "./images/hero.png";
import user_check from "./images/user-check.png";
import code from "./images/code.png";
import headset_mic from "./images/headset-mic.png";
import dollar_coin from "./images/dollarCoin.png";
import clock from "./images/alarm.png";
import earth from "./images/earth.png";
import suitcase from "./images/suitcase.png";
import gift from "./images/Gift.png";
import send from "./images/send.png";
import brief_case from "./images/Suitcase 1.png";
import location from "./images/location.png";
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

    const openings = [
      {
        short: "AM",
        title: "ACCOUNT MANAGER",
        type: "Full-time",
        location: "Remote",
      },
      {
        short: "A",
        title: "ACCOUNT",
        type: "Part-Time",
        location: "Remote",
      },
      {
        short: "PD",
        title: "PRODUCT DESIGNER",
        type: "Full-time",
        location: "Remote",
      },
      {
        short: "DO",
        title: "DEVOPS",
        type: "Full-time",
        location: "Remote",
      },
      {
        short: "FD",
        title: "FRONT-END DEVELOPER",
        type: "Full-time",
        location: "Lagos",
      },
      {
        short: "FM",
        title: "FINANCE MANAGER",
        type: "Full-time",
        location: "Remote",
      },
      {
        short: "MS",
        title: "MARKETING SPECIALIST",
        type: "Full-time",
        location: "Remote",
      },
      {
        short: "HA",
        title: "HEAD ACCOUNTANT ",
        type: "Full-time",
        location: "Lagos",
      },
      {
        short: "AM",
        title: "ACCOUNT MANAGER",
        type: "Full-time",
        location: "Lagos",
      },
      {
        short: "DA",
        title: "DATA ANALIST",
        type: "Part-time",
        location: "Remote",
      },
      {
        short: "PD",
        title: "PRODUCT DESIGNER",
        type: "Internship",
        location: "Remote",
      },
      {
        short: "SE",
        title: "SALES EXECUTIVE",
        type: "Full-time",
        location: "Remote",
      },
    ];

    return (
      <div>
        <div className="text-center">
          <img src={hero} alt="hero" className="lg:block md:block sm:hidden " />
          <img src={heroMobile} alt="heroMobile" className="sm-block md:hidden lg:hidden xl-hidden " />{" "}
          <div className="relative bg-black bottom-0 opacity-50 w-full h-inherit">
            <h1 className="text-5xl text-white top-1/2 my-auto">Careers</h1>
          </div>
        </div>
        <div>
          <div className="mx-16 py-8 sm:w-full sm:px-10">
            <h1 className="text-center text-5xl font-bold text-[#1849A9] font-normal">
              JOIN US
            </h1>
            <p className="text-center text-[40px] leading-[50px] w-50">
              Want to join an exciting work environment operating at the
              forefront of AI technology development for accounting software?
            </p>
          </div>
        </div>

        <div classname="w-full px-12 pt-10 bg-gray-100 sm:px-6">
          <h1 className="text-center bg-gray-100 pb-7 mx-auto lg:text-8xl md:text-5xl sm:text-2xl font-normal lg:pt-12 md:pt-8 sm:pt-6 text-[#1849A9] leading-6">
            OUR TEAMS
          </h1>
          <div className="bg-gray-100 pt-5 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-2">
            {teams.map((team) => (
              <div className="flex flex-col my-7 max-w-7xl sm:w-full">
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
            <p className="text-center mx-auto text-[40px] font-normal pb-6 leading-[50px] max-w-7xl">
              We are a global company with root spread worldwide, and our team
              reflects that. The Account Pal team is building the future of AI
              technology to help improve efficiency and boost productivity.
            </p>
          </div>
        </div>

        <div className="py-10 pt-7">
          <h1 className="text-8xl font-normal text-center text-[#1849A9] mx-20">
            BENEFITS
          </h1>
          <div className="lg:pl-60 pt-7 md:pl-30 sm:pl:10">
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

        <div className="bg-gray-100 px-5 py-4">
          <h1 className="lg:text-8xl md:text-5xl sm:text-3xl text-[#1849A9] text-center">
            CURRENT OPENINGS
          </h1>
          <div className="px-14 pt-14 grid grid-cols-2">
            {openings.map((opening) => (
              <div className="flex flex-row gap-4 p-4">
                <div className="basis-1/6 mx-4 text-[32px] border-4 border-solid pt-2 h-20 align-middle text-center border-sky-600 rounded-full">
                  {opening.short}
                </div>
                <div className="basis-3/4">
                  <h3 className="items-start text-3xl ml-1 mb-2 font-normal">
                    {opening.title}
                  </h3>
                  <div className="grid grid-cols-2">
                    <div className="flex align-middle">
                      <img src={brief_case} alt="case" className="" />
                      <span className="text-lg pt-1 pl-2">{opening.type}</span>
                    </div>
                    <div className="flex align-center">
                      <img src={location} alt="location" className="" />
                      <span className="text-lg pt-1 pl-2">
                        {opening.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="basis-1/5">
                  <img src={send} alt="send" className="" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mx-12 my-4 py-2 border border-solid border-slate-400">
            <h1 className="font-semibold text-5xl">Join Our Newsletter</h1>
          </div>
          <div className="flex flex-row mx-auto mb-7 max-w-[600px] items-center self-center">
            <input
              className="text-center text-2xl  w-full mx-3 px-10 py-1 border border-solid border-slate-400"
              placeholder="Enter email"
            />
            <Button primary size="large" label="Subscribe" />
          </div>
        </div>
      </div>
    );
  }
}

export default CareersPage;
