import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({ title, path, primary }) => 
	(
		<Link
			to={path}
			className={`rounded-md py-[10px] px-[18px] cursor-pointer text-[16px] ${
				primary === true
					? 'bg-[#FFFFFF}] text-[#1570EF] border border-[#1570EF]'
					: 'bg-[#2E90FA] text-white'
			}  `}
		>
			{title}
		</Link>
	);


export default Button