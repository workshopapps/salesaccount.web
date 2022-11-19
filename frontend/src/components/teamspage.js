import React from "react";
import ourteam from "../assets/ourteam.png"; 
import leader from "../assets/leader.png";
import designer from "../assets/designer.png";
import developer from "../assets/developer.png";
import marketer from "../assets/marketer.png";
import twitterlogo from "../assets/twitterlogo.png";
import facebooklogo from "../assets/facebooklogo.png";
import linkedinlogo from "../assets/linkedinlogo.png";


const teamspage = () => {
  return (
    <div>
      <div class="flex lg:flex-row md:flex-row  flex-col" >
        <div>
        <button class="rounded border  text-white bg-blue-700 font-normal px-4 py-2" >Meet the team</button>
            <h2 class=" sm:hidden lg:block " >Meet our team of creators,<br/> designers, and world class <br/> problem solvers</h2>
            <h2 class=" lg:hidden">Meet our team of <br/> creators, designers, <br/>and world class <br/>problem solvers</h2>
            <p class="" >We are the company our customers want us to be, it takes an eclectic group <br/> of passionate operators. Get to know the people leading the way at <span>Account Pal</span></p>
        </div>
        <div>
            <img src={ourteam} class="" />
        </div>
      </div>
      <div>
      <div>
        <button class="rounded border  text-black bg-white font-normal px-4 py-2" >LEADERS</button>
        <div class="mt-2">
        <img src={leader} class="w-40 h-40"/>
        <h3 class="">Adeleke Mauteen</h3>
        <h4 class="text-blue-400">CEO AND FOUNDER</h4>
        <div class="flex flex-row gap-4">
            <img src={twitterlogo} />
            <img src={linkedinlogo} />
            <img src={facebooklogo} />
        </div>
        </div>
      </div>
      <div class="mt-2">
      <button class="rounded border  text-black bg-white font-normal px-4 py-2" >DESIGNERS</button>
        <div class="mt-2">
        <img src={designer} class="w-40 h-40"/>
        <h3 class="">Adeleke Mauteen</h3>
        <h4 class="text-blue-400">CEO AND FOUNDER</h4>
        <div class="flex flex-row gap-4">
            <img src={twitterlogo} />
            <img src={linkedinlogo} />
            <img src={facebooklogo} />
        </div>
        </div>
      </div>
      <div></div>
      <div></div>
      </div>
    </div>
  );
};

export default teamspage;
