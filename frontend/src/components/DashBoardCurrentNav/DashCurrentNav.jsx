import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function CurrentNav() {
	return (
		<div className=" flex ">
			<div className=" text-slate-500 font-semibold">Dashboard</div>
			<NavigateNextIcon />
			<div className=" text-black-600 font-semibold ">Imported Data</div>
		</div>
	);
}

export default CurrentNav;
