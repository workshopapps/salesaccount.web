import React, { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function SalesReport() {
	const [isClicked, setIsClicked] = useState(false);
	const clickHandler = () =>
		isClicked === false ? setIsClicked(true) : setIsClicked(false);

	return (
		<div className="report_main  ">
			<div className="text-sm font-md flex items-center my-[1em] px-[0.4em]">
				<p>Swiss Carpets</p>
				<div onClick={clickHandler} role="presentation">
					{isClicked ? <AddIcon /> : <RemoveIcon />}
				</div>
			</div>
			{!isClicked && (
				<>
					<div className="sale-report flex justify-between items-center text-[0.8em] bg-[#F2F4F7] ">
						<p className="report-detail w-[30%]">Sale price</p>
						<p className="report-detail w-[20%]">30,300</p>
					</div>
					<div className="sale-report flex justify-between items-center text-[0.8em] bg-[#F2F4F7]">
						<p className="report-detail w-[30%]">VAT</p>
						<p className="report-detail w-[20%]">300</p>
					</div>
				</>
			)}
		</div>
	);
}

export default SalesReport;
