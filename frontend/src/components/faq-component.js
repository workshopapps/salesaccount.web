import React, { useState } from "react";

const Accordion = ({ question, answer, id }) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("max-h-0 overflow-hidden");
  const [rotate, setRotate] = useState("fa-chevron-down");

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "text-blue underline" : "");
    setHeightState(
      setActive === ""
        ? "max-h-96 transition-all overflow-visible"
        : "max-h-0 overflow-hidden transition-all"
    );
    setRotate(
      setActive === ""
        ? "rotate-180 transition-all text-blue"
        : "transition-all"
    );

    return;
  };
  return (
    <>
      <div className="w-[1000px]">
        <div className="flex items-center relative" key={id}>
          <h3 className={`text-lg ${setActive} leading-9 font-normal`}>
            {question}
          </h3>
          <i
            onClick={toggleAccordion}
            className={`${rotate} absolute right-0 fa-solid fa-chevron-down cursor-pointer`}
          ></i>
        </div>
        <p
          className={`overflow-hidden text-lg text-gray 
           w-[1000px] break-normal ${setHeight}`}
        >
          {answer}
        </p>
      </div>
    </>
  );
};

export default Accordion;
