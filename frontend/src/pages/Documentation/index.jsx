import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import stepOne from '../../assets/images/documentation/stepone.png';
import stepTwo from '../../assets/images/documentation/steptwo.png';
import stepThree from '../../assets/images/documentation/stepthree.png';
import Footer from '../../components/Footer';

const Documentation = () => (
	<div className="text-gray-800 bg-white ">
		<NavigationBar />
		<header className="header bg-[#2E90FA] text-[#F9FAFB] shadow py-4 px-4">
			<div className="flex flex-row items-center justify-center h-40 header-content">
				<h1 className="text-3xl text-center">
					A step by step guide on how <br /> to use reconcile.AI
				</h1>
			</div>
		</header>
		<div className="relative flex-row min-h-screen md:flex">
			<aside className="sidebar absolute md:relative inset-y-0 left-0 w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-[#EAECF0]">
				<div className="px-4 py-6 sidebar-content">
					<h1>General usage</h1>
					<ul className="flex flex-col w-full">
						<li className="my-px">
							<a
								href="/"
								className="flex flex-row items-center h-10 px-3 text-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
							>
								<span className="ml-3">Intoduction</span>
							</a>
						</li>
						<li className="my-px">
							<a
								href="/"
								className="flex flex-row items-center h-10 px-3 text-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
							>
								<span className="ml-3">Why Reacon? </span>
							</a>
						</li>
					</ul>
				</div>
			</aside>
			<main className="flex flex-col flex-grow mx-auto transition-all duration-150 ease-in main md:ml-0">
				<div className="flex flex-col flex-grow p-4 main-content">
					<div className="flex flex-col flex-grow mt-4 rounded">
						<section className="mb-11">
							<h1 className="mb-4 text-2xl font-bold ">Introduction</h1>
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

              <h1 className="mb-4 text-2xl font-bold">Who It&apos;s For?</h1>
							

							<p className='mb-5 text-[#667085]'>
								<span className='font-bold'>Freelancers: </span>  Accurate billing and lots of
								payment options get you paid faster and let clients pay how they
								like. Recurring invoices, Automated Payment Reminders, and
								Online Payments make it easy.
							</p>

							<p className='mb-5 text-[#667085]'>
                <span className='font-bold'>Self-employed Professionals: </span> 
								 Payments are all consolidated in
								one place, and everything is organized and easy to track Small
							</p>
              <p className='mb-5 text-[#667085]'><span className='font-bold'>Small Businesses: </span>
                 Bookkeeping and tax filing become easy by
								highlighting all transactions with discrepancies.</p>
                <p className='mb-5 text-[#667085]'><span className='font-bold'> Accountants:</span>
								Auditing accounts for Businesses become easy as invoice matching
								becomes easy with our artificial intelligence bot.</p>
						</section>
					
						<section className="mb-11 text-center text-[#101828]">
							<h1 className="mb-4 text-2xl font-bold"> How to use recon.<span className='text-blue-500 '>AI</span></h1>
							<p className='mb-6'>
								Welcome, aboard! We’re glad that you’ve chosen reconcile.<span className='text-blue-500 '>AI</span> for
								your account statement matching. Let’s get you started right
								away on how to take advantage of our platform to make things
								easy.
							</p>
							<h2 className="text-[#194185] text-xl  font-bold mb-2">Step One</h2>
							<p className='mb-5 '>
								From your Dashboard upload your bank statement by clicking on
								the “Browse Files” button and choosing the
								CSV(comma-separated-document) file format of your bank
								statement.
							</p>
              <img className='object-center mb-5 ' src={stepOne} alt= ' ' />

							<h2 className="text-[#194185] text-xl  font-bold mb-2">Step Two</h2>
							<p className='mb-5 '>
								From your Dashboard upload your Sales Records from Enterprise
								resource planning (ERP)
							</p>
              <img className='mb-5' src={stepTwo} alt= ' ' />
							<h2 className="text-[#194185] text-xl  font-bold mb-2">Step Three</h2>
							<p className='mb-5 '>
								On your “uploaded sale and account ready” page click on
								reconcile button.
							</p>
              <img className='mb-5' src={stepThree} alt= ' ' />
							<h2 className="text-[#194185] text-xl  font-bold mb-2">Step Four</h2>
							<p className='mb-5 '>
								After the reconciliation process is complete, click Download
								Button to Download your report in PDF or Spreadsheet format.
							</p>
						</section>
						<section>
							<h1 className='mb-4 text-2xl font-bold' >Key Features.</h1>
							<h2 className='mb-4 font-bold' >Key Values reconcile.<span className='text-blue-500 '>AI</span> offers.</h2>

              <ul className='ml-4 list-disc'>
							<li>
                <span className='font-bold'>Automatic Matching System: </span>
								 reconcile.<span className='text-blue-500 '>AI</span> uses an Artificial
								Intelligence bot to request detailed account statements from
								your bank at the close of business and automatically performs a
								3-way match of the documents from the different departments.
                
							</li>
              <li><span className='font-bold'>Easy Data Entry: </span>
								 reconcile.<span className='text-blue-500 '>AI</span> offers an easy and automatic
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
                  reconcile.<span className='text-blue-500 '>AI</span> Artificial
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
    <Footer />
	</div>
);

export default Documentation;
