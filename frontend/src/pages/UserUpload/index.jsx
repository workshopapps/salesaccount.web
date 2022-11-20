import React from 'react';

const styles = {
	bgColor: '#1570EF',
	titleTextColor: '#101828',
};

const Userupload = () => (
	<div className="uploadDoc">
		<div className="relative mx-auto p-6 bg-[#1570EF] flex justify-between items-center">
			<div className="flex items-center justify-between">
				<h1>
					<span className="text-white text-700 text-4xl p-20">Logo</span>
				</h1>
			</div>
			<input
				className="hidden:sm mr-auto -ml-0 rounded w-full max-w-screen-sm "
				type="text"
				value="search"
			/>
			<div className="upload-header-icons text-white flex justify-end mr-4" />
		</div>
		<div className="Details">
			<div className="mx-auto hidden md:flex flex-col space-x-6 absolute  h-full w-60 bg-deepSky  grid-cols-2">
				<ul className="mt-10 list-none">
					<li className="w-48">
						<a
							className="border-0 p-2 ml-4 bg-white mt-20 text-[#1570EF] rounded"
							href="/"
						>
							<span />
							Dashboard
						</a>
					</li>
					<li className="mt-4">
						<a href="/" className="ml-4 mt-3 text-white">
							<span />
							Import Data
						</a>
					</li>
					<li className="mt-4">
						<a href="/" className=" ml-4 pt-3 text-white mt-10">
							<span />
							History
						</a>
					</li>
					<li className="mt-4">
						<a href="/" className="ml-4 text-white">
							<span className="" />
							Settings
						</a>
					</li>
				</ul>
				<div
					className="privacy text-white mt-auto flex flex-col
                "
				>
					<a href="/" className="mb-6">
						<span> </span>
						Privacy
					</a>
					<a href="/" className="mb-6">
						<span />
						Help
					</a>
				</div>
			</div>

			<div className="upload-main mx-auto border p-20">
				<div className="dropdown p-2">
					<a href="/">Dashboard</a>
					<a href="/">Upload</a>
				</div>
				<h1 className="text-center text-5xl mb-10">Upload Account Statement</h1>
				<div className="file-card border border-dashed lg:w-3/4 h-60 text-center ml-auto mr-10 p-30 sm:w-full">
					<p className="main text-cente mb-4 mt-12">
						Drop your account Statement here
					</p>
					<br />
					<p className="info text-center">
						You can upload PDF and word DOC files only
					</p>
				</div>
				<div className="file-inputs container mx">
					<input type="file" />

					<button
						type="button"
						className="ml-80 p-3 mt-4 sm:mx-auto rounded bg-[#1570EF] text-white"
					>
						Upload Now
					</button>
				</div>
			</div>
		</div>
	</div>
);

export default Userupload;
