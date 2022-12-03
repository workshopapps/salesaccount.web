import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

function CurrentNav() {
	return (
		<div className="flex ">
			<div className=" text-slate-500 font-semibold hover:text-black">
				<Link to="/dashboard/home">Dashboard</Link>
			</div>

			<NavigateNextIcon />

			<div className="text-black-600 font-semibold ">Imported Data</div>
		</div>
	);
}

export default CurrentNav;
