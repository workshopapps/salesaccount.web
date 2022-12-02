import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import stepOne from '../../assets/images/documentation/stepone.png';
import stepTwo from '../../assets/images/documentation/steptwo.png';
import stepThree from '../../assets/images/documentation/stepthree.png';

const Documentation = () => (
	<div className=" bg-white text-gray-800">
		<NavigationBar />
		<header className="header bg-[#2E90FA] text-[#F9FAFB] shadow py-4 px-4">
			<div className="header-content h-40 flex items-center justify-center flex-row">
				<h1 className="text-3xl text-center">
					A step by step guide on how <br /> to use Recon
				</h1>
			</div>
		</header>
		<div className="flex flex-row min-h-screen">
			<aside className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-[#EAECF0]">
				<div className="sidebar-content px-4 py-6">
					<h1>General usage</h1>
					<ul className="flex flex-col w-full">
						<li className="my-px">
							<a
								href="/"
								className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
							>
								<span className="ml-3">Intoduction</span>
							</a>
						</li>
						<li className="my-px">
							<a
								href="/"
								className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
							>
								<span className="ml-3">Why Reacon? </span>
							</a>
						</li>
					</ul>
				</div>
			</aside>
			<main className="main flex flex-col flex-grow -ml-14 md:ml-0 transition-all duration-150 ease-in">
				<div className="main-content flex flex-col flex-grow p-4">
					<div className="flex flex-col flex-grow   rounded mt-4">
						<section className="mb-11">
							<h1 className="text-2xl font-bold mb-4  ">Introduction</h1>
              <div className=''> </div>
							<p className='mb-5'>
								Recon is a web application that compares third-party and
								independent financial statements and records with internal
								financial records and ledgers. It does this accurately with
								artificial intelligence from Open AI and machine learning models
								like GPT-3 paving the way for even smoother future matchings and
								collaboration of accounts from vendors. Recon makes the
								day-to-day balancing of accounts and sales easier, faster, and
								very reliable for Small and Medium Enterprises.
							</p>

              <h1 className="font-bold text-2xl mb-4">Who It&apos;s For?</h1>
							

							<p className='mb-5'>
								<span className='font-bold'>Freelancers: </span>  Accurate billing and lots of
								payment options get you paid faster and let clients pay how they
								like. Recurring invoices, Automated Payment Reminders, and
								Online Payments make it easy.
							</p>

							<p className='mb-5'>
                <span className='font-bold'>Self-employed Professionals: </span> 
								 Payments are all consolidated in
								one place, and everything is organized and easy to track Small
							</p>
              <p className='mb-5'><span className='font-bold'>Businesses: </span>
                 Bookkeeping and tax filing become easy by
								highlighting all transactions with discrepancies.</p>
                <p className='mb-5'><span className='font-bold'> Accountants:</span>
								Auditing accounts for Businesses become easy as invoice matching
								becomes easy with our artificial intelligence bot.</p>
						</section>
					
						<section className="mb-11">
							<h1 className="font-bold text-2xl mb-4"> How to use Recon</h1>
							<p className='mb-6'>
								Welcome, aboard! We’re glad that you’ve chosen Recon for
								your account statement matching. Let’s get you started right
								away on how to take advantage of our platform to make things
								easy.
							</p>
							<h2 className="text-[#194185] text-xl	 font-bold mb-2">Step one</h2>
							<p className='mb-5'>
								From your Dashboard upload your bank statement by clicking on
								the “Browse Files” button and choosing the
								CSV(comma-separated-document) file format of your bank
								statement.
							</p>
              <img className='mb-5' src={stepOne} alt= ' ' />

							<h2 className="text-[#194185] text-xl	 font-bold mb-2">Step Two</h2>
							<p className='mb-5'>
								From your Dashboard upload your Sales Records from Enterprise
								resource planning (ERP)
							</p>
              <img className='mb-5' src={stepTwo} alt= ' ' />
							<h2 className="text-[#194185] text-xl	 font-bold mb-2">Step Three</h2>
							<p className='mb-5'>
								On your “uploaded sale and account ready” page click on
								reconcile button.
							</p>
              <img className='mb-5' src={stepThree} alt= ' ' />
							<h2 className="text-[#194185] text-xl	 font-bold mb-2">Step four</h2>
							<p className='mb-5'>
								After the reconciliation process is complete, click Download
								Button to Download your report in PDF or Spreadsheet format.
							</p>
						</section>
						<section>
							<h1 className='font-bold  text-2xl mb-4' >Key Features.</h1>
							<h2 className='font-bold   mb-4' >Key Values Recon offers.</h2>

              <ul className='list-disc ml-4'>
							<li>
                <span className='font-bold'>Automatic Matching System: </span>
								 Recon uses an Artificial
								Intelligence bot to request detailed account statements from
								your bank at the close of business and automatically performs a
								3-way match of the documents from the different departments.
                
							</li>
              <li><span className='font-bold'>Easy Data Entry: </span>
								 Recon offers an easy and automatic
								invoice data entry for the suppliers and the client. Creating a
								close touchless invoice process.</li>
                <li>
                  <span className='font-bold'>Easy Integration into ERPs: </span>
								Easy Integration with the company’s Enterprise resource planning
								(ERP) systems like Sage Intacct, Microsoft Dynamics, SAP, and
								Oracle.
                </li>
                <li>
                  <span className='font-bold'>Vendor Habits Prediction: </span>
                  Recon Artificial
								Intelligence bot helps ensure accuracy and learn vendor
								tendencies by mapping past transactions with new ones and
								highlighting discrepancies.
                </li>

              </ul>
						</section>
					</div>
				</div>
			</main>
		</div>
	</div>
);

export default Documentation;
