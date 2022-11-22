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
		<DashBoardHeader/>
			<div className='dashboard-main-cont'>
				<DashBoardSideBar/>
				<main>
					<div className="upload-main mx-auto border p-20">
				<div className="dropdown flex items-left p-2 ml-96">
					<a href="/" className="flex items-center mr-4">
						Dashboard
						<span className="ml-4">
							{' '}
							<i>
								<FaGreaterThan />
							</i>
						</span>
					</a>
					<a href="/" className="font-bold">
						Upload
					</a>
				</div>
				<h1 className="text-center mx-auto text-5xl mb-10">
					Upload Account Statement
				</h1>
				<div className="file-card border-dashed border-4 border-gray-200 rounded lg:w-3/4 md:w-full h-60 text-center ml-auto mr-10 p-30 sm:w-full">
					<p className="main text-center mb-4 text-3xl mt-12">
						Drop your account Statement here
					</p>
					<br />
					<p className="info text-center">
						You can upload PDF and word DOC files only
					</p>
				</div>
				<div className="file-inputs container mx">
					{/* <input type="" value={} /> */}

					<a
						href='/processingerror'
						className="flex items-center w-32 p-2 mt-10 sm:mx-auto rounded bg-[#1570EF] text-white"
					>
						Upload Now
					</a>
				</div>
			</div>
		
				</main>
				
			</div>

			
	</>);

export default Userupload;
