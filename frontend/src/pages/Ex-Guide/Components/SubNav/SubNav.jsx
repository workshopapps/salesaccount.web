import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

function SubNav() {
  const navigate = useNavigate();
  return (
    <div className="flex  justify-between bg-[#2E90FA] p-[1em] md:p-[1.5em]  text-lg text-white w-full ">
      <div onClick={() => navigate("/")} className="w-[10%] md:hidden">
        <ArrowBackIosIcon />
      </div>

      <h1 className="text-center  text-sm w-[90%] md:text-xl lg:text-2xl">
        A step by step guide on the successful use of Accountpal
      </h1>
    </div>
  );
}

export default SubNav;
