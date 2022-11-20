import React from "react";
import SideBar from "../../Navbar/SideBar";
import SubNav from "../../SubNav/SubNav";
import Wrapper from "../../UI/Wrapper/Wrapper";
import Section21 from "./Section2Outlets/section21/Section21";
import Section22 from "./Section2Outlets/Section22/Section22";
import Section23 from "./Section2Outlets/Section23/Section23";

function Section2() {
  return (
    <div>
      <SubNav />
      <Wrapper>
        <div className="flex">
          <SideBar />
          <div className="md:w-[60%] md:ml-[4em]">
            <Section23 />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Section2;
