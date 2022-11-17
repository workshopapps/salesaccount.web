import React from 'react'
import { Link } from "react-router-dom";

const index = ({title, path, primary}) => {
  return (
    <Link
      to={path}
      className={`rounded-md py-[10px] px-[18px] cursor-pointer ${
        primary === true
          ? "bg-[#FFFFFF}] text-[#1570EF] border border-[#1570EF]"
          : "bg-[#2E90FA] text-white"
      }  `}
    >
      {title}
    </Link>
  );
}

export default index