import React from "react";

function Wrapper({ children }) {
  return (
    <div className="flex flex-col p-[1em] mb-[2em] font-light gap-5 md:w-[90%] lg:w-[70%] md:mx-auto md:my-[2em] h-auto ">
      {children}
    </div>
  );
}

export default Wrapper;
