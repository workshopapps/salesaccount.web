import React from 'react';
import resourcesheaderimg from '../../assets/Capa 1.png';
// import hexagonfill from '../../assets/hexagon-fill.svg';
// import hexagonoutline from '../../assets/hexagon-outline.svg';

function ResourcesHeader() {
	return (
		<div className=" px-4 bg-blue-200">
			<div className="  pt-5 flex justify-center items-center flex-col ">
				<h1 className=" text-2xl md:text-4xl font-semibold pt-9">Resources</h1>

				<p className=" text-sm text-center px-5 py-7">
					Get everything done with all our resources. Click on the resources
					you’d like to explore.
				</p>

				<div className=" text-center">
					<img
						className=" mx-auto max-h-20 md:max-h-32"
						src={resourcesheaderimg}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default ResourcesHeader;
