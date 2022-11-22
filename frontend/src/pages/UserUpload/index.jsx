import React from 'react';
import { AiOutlineBell, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import { BsGridFill, BsMoon, BsLightbulb, BsSearch } from 'react-icons/bs';
import { RiDashboardFill } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';
import { FaGreaterThan } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import DashBoardSideBar from '../../components/DashBoardSideBar';
import DashBoardHeader from '../../components/DashBoardHeader';

const styles = {
	bgColor: '#1570EF',
	titleTextColor: '#101828',
	inputwidth: '500px',
	sideWidth: '248px',
	dasboardwidth: '150px',
};

const Userupload = () => (
	<>
		<DashBoardHeader />
		<div className="dashboard-main-cont">
			<DashBoardSideBar />
			<main>
				<div className='breadcrum text-[#667085] mb-4'>Dashboard &gt; Upload  </div>
				<div className="upload-main max-w-[900px] mx-auto border p-20">
					
					<h1 className="text-center mx-auto text-5xl mb-10">
						Upload Account Statement
					</h1>
					<div className="file-card border-dashed border-4 border-gray-200 rounded  md:w-full max-w-[900px] h-60 text-center ml-auto mr-10 p-10">
						<p className="main text-center mb-4 text-3xl mt-12 overflow-hidden">
							Drop your account Statement here
						</p>
						<br />
						<p className="info text-center overflow-hidden">
							You can upload PDF and word DOC files only
						</p>
					</div>
					<div className="file-inputs container mx">
						{/* <input type="" value={} /> */}

						<a
							href="/processingerror"
							className="flex items-center w-32 p-2 mt-10 sm:mx-auto rounded bg-[#1570EF] text-white"
						>
							Upload Now
						</a>
					</div>
				</div>
			</main>
		</div>
	</>
);

export default Userupload;
