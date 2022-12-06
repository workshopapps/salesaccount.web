import React from 'react';
import { AiOutlineBell, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import { BsGridFill, BsMoon, BsLightbulb, BsSearch } from 'react-icons/bs';
import { RiDashboardFill } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';
import { FaGreaterThan } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import DashBoardSideBar from '../../components/DashBoardSideBar';
import DashBoardHeader from '../../components/DashBoardHeader';
import ScrollToTop from '../../components/ScrollToTop';

const styles = {
	bgColor: '#1570EF',
	titleTextColor: '#101828',
	inputwidth: '500px',
	sideWidth: '248px',
	dasboardwidth: '150px',
};

const processData = {
	status: 'Upload Account Statement',
	statusHeader: '',
	statusMessage: '',
	numberOfimbalance: 0,
	stateParagraph: 'Drop your account Statement here ',
};

const Userupload = () => (
	<>
		<ScrollToTop />
		<DashBoardHeader />
		<div className="dashboard-main-cont">
			<DashBoardSideBar />
			<main>
				<div className="breadcrum text-[#667085] mb-4">
					Dashboard &gt; Upload{' '}
				</div>
				<div className="upload-main max-w-[900px] mx-auto border p-20">
					<h1 className="font-bold text-2xl">{processData.status}</h1>
					<p className="text-[#667085] pb-2">{processData.processData} </p>
					<div className="center">
						<div className="process-card p-10 mt-2">
							<h1 className="font-bold text-base">
								{processData.statusHeader}
							</h1>
							<p className="">
								<span className="numberOfErrors">
									{processData.numberOfimbalance}
								</span>
								{processData.statusMessage}
							</p>

							<div className="w-full bg-gray-200 rounded-full h-5 mt-2 dark:bg-gray-700">
								<div className="bg-blue-600 h-5 rounded-full w-10"> </div>
							</div>
						</div>
					</div>
					<div className="file-inputs container mx">
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
