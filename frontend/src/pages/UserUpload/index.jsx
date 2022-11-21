import React from 'react';
import { AiOutlineBell, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import { BsGridFill, BsMoon, BsLightbulb, BsSearch } from 'react-icons/bs';
import { RiDashboardFill } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';
import { FaGreaterThan } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

const styles = {
	bgColor: '#1570EF',
	titleTextColor: '#101828',
	inputwidth: '500px',
	sideWidth: '248px',
	dasboardwidth: '150px',
};

const Userupload = () => (
	<div className="uploadDoc">
		<div className="relative mx-auto p-6 bg-[#1570EF] flex justify-between items-center">
			<div className="flex items-center justify-between">
				<h1>
					<span className="text-white text-700 text-4xl p-20">Logo</span>
				</h1>
			</div>
			<div className="input relative ">
				<input
					className="mr-auto -ml-96 rounded w-[500px] max-w-screen-lg p-2 border-0 "
					type="text"
					placeholder="search"
				/>
				<span className="absolute -left-96 ml-2 top-3">
					<BsSearch />
				</span>
			</div>
			<div className="upload-header-icons text-white flex justify-end pl-3 mr-4 p-4">
				<AiOutlineBell className="bg-white text-gray mr-2 w-6 h-6 rounded" />
				<BsMoon className="bg-white text-gray mr-2 w-6 h-6 rounded" />
				<BsGridFill className="bg-white text-gray mr-2 w-6 h-6 rounded" />
			</div>
		</div>
		<div className="Details">
			<div className="mx-auto hidden md:flex flex-col space-x-6 absolute  h-full w-44 bg-deepSky  grid-cols-2">
				<ul className="-mt-10 list-none">
					<li className="w-[150px]">
						<a
							className=" flex items-center border-0 p-2 ml-4 bg-white mt-20 text-[#1570EF] rounded"
							href="/"
						>
							<span className="mr-2">
								<RiDashboardFill />
							</span>
							Dashboard
						</a>
					</li>
					<li className="mt-4">
						<a href="/" className="flex items-center ml-4 mt-3 p-2 text-white">
							<span className="mr-2">
								<AiOutlinePlus />
							</span>
							Import Data
						</a>
					</li>
					<li className="mt-4">
						<a
							href="/"
							className="  items-center flex ml-4 p-2 text-white mt-4"
						>
							<span className="mr-2">
								<AiOutlineStar />
							</span>
							History
						</a>
					</li>
					<li className="mt-4">
						<a href="/" className=" flex items-center p-2 ml-4 text-white">
							<span className="mr-2">
								<FiSettings />
							</span>
							Settings
						</a>
					</li>
				</ul>
				<div
					className="privacy text-white mt-auto flex flex-col
                "
				>
					<a href="/" className="mb-6 flex items-center">
						<span className="mr-2">
							<CgProfile />
						</span>
						Privacy
					</a>
					<a href="/" className="mb-6 flex items-center">
						<span className="mr-2">
							<BsLightbulb />
						</span>
						Help
					</a>
				</div>
			</div>

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

					<button
						type="button"
						className="flex items-center p-2 mt-4 sm:mx-auto rounded bg-[#1570EF] text-white"
					>
						Upload Now
					</button>
				</div>
			</div>
		</div>
	</div>
);

export default Userupload;
