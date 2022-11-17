import React from "react";
import NavigationBar from "./components/NavigationBar";

function App() {
  const planData = [
  {title: 'free'},
  
  ]
  return (
    <>
      <NavigationBar />
      <div className="bg-[#F5F5F5] w-full px-[178px] items-center leading-[100px] top-[193px]">
        <h1 className="text-[#000000] text-[72px] font-semibold text-center">
          An easy <span className="text-[#1570EF]">Sales and Accounting</span>
          system made for you
        </h1>
        <p className="text-[#101828] font-normal text-[20px] text-center leading-[35px]">
          Run your business effectively with a simplified solution to reconcile
          your accounts & sales on a day - to - day basis
        </p>
      </div>
    </>
  );
}

export default App;
