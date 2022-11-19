import React from 'react';
import resourcesheaderimg from '../../assets/resources-header-img.png';
// import hexagonfill from '../../assets/hexagon-fill.svg';
// import hexagonoutline from '../../assets/hexagon-outline.svg';

function ResourcesHeader() {
	return (
		<div className=" px-4 bg-blue-300">
			<div className="  py-5 flex justify-center items-center flex-col ">
				<h1 className=" text-2xl font-semibold pb-4">Videos</h1>

				<div className="flex items-center gap-4">
					<img className=" max-h-20" src={resourcesheaderimg} alt="" />

					<div>
						<p className=" text-blue-500">Account PAL Videos</p>
						<h1 className=" font-semibold py-2">Virtual Hands-on Lab</h1>
						<button
							type="button"
							className=" text-white bg-blue-500 px-4 py-2 rounded-lg"
						>
							Watch Now
						</button>
					</div>
				</div>

				<div className="relative">
					{/* <div>
						<img className="absolute" src={hexagonfill} alt="" />
						<img
							className="absolute bottom-0 left-0 z-50"
							src={hexagonoutline}
							alt=""
						/>
					</div> */}
					<p className=" text-xs text-center px-5 py-4">
						Find out about all our events below. Click on the resources you’d
						like to explore.
					</p>
				</div>
			</div>
		</div>
	);
}

export default ResourcesHeader;
