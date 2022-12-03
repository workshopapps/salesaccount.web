import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import heroImage from '../../assets/images/HelpCenter/hero.png';

function Help() {
	return (
		<div>
			<NavigationBar />
			<div className="w-full text-[#101828]">
				{/* Hero Section  */}
				<div className="w-full px-4 md:20 lg:px-36 xl:px-40 2xl:px-0 py-20 bg-[#F2F4F7]">
					<div className="md:w-full md:mx-auto md:grid md:grid-cols-2 2xl:max-w-screen-xl 2xl:mx-auto 2xl:grid 2xl:grid-cols-2">
						<div className="py-auto">
							<h1 className="text-xl md:3xl font-semibold mb-2 lg:text-[40px] lg:leading-[50px] lg:mb-6">
								Help Desk Software
							</h1>
							<p className="text-justify md:text-lg lg:text-xl lg:leading-[200%]">
								We live in a consumer-centric age, companies have to be ready to
								handle customer support cases and complaints quickly while
								keeping service teams working smoothly.{' '}
								<span className="font-semibold text-sky-500">
									Help desk software
								</span>{' '}
								can become the cornerstone of your customer support strategy.
							</p>
						</div>
						<div className="hidden md:flex md:pl-8">
							<img
								src={heroImage}
								alt="helpImage"
								className="lg:w-full lg:h-full md:align-right"
							/>
						</div>
					</div>
				</div>

				{/* hero body */}
				<div className="p-4 sm:px-10 md:px-20 lg:p-36 xl:p-20 2xl:px-0 text-sm md:text-md my-[2em] ">
					<div className="2xl:max-w-screen-xl 2xl:mx-auto space-y-[2em] md:space-y-[4em]">
						<div className="">
							<h1 className="text-xl md:text-3xl lg:text-4xl mb-4 font-semibold lg:mb-6">
								Support customers across channels.
							</h1>
							<p className="text-justify md:text-lg lg:text-xl leading-[200%]">
								Consumers can @mention a company on Twitter to ask questions.
								They can pick up the phone to voice complaints. They can even
								send emails or strike up a live chat with a customer service
								representative &#40;or in many cases, an AI-enabled
								chatbot&#41;. That means customer service teams need to have a
								way to manage requests across all communications channels and
								keep them organized. A help desk can provide multichannel
								support, so agents can work more efficiently, resolve issues
								faster, and offer amazing service. Manage cases quickly.
							</p>
						</div>
						<div className="">
							<h1 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-6">
								Manage cases quickly
							</h1>
							<p className="text-justify md:text-lg lg:text-xl leading-[200%] ">
								Many people have had the frustrating experience of filling out a
								form on a company &#38;s website to ask a question only to have
								multiple customer support representatives follow up at different
								times. Sometimes, no one follows up at all. Regardless of the
								channel the request came thryough, a good customer service
								platform ensures that every inquiry routes to the right agent
								and gets organized &#40;or categorized&#41; accordingly. One
								person or team might handle Facebook and Twitter cases, for
								instance, while another team responds to phone calls. This
								enables every customer service team member to focus on priority
								cases, without leaving requests unanswered.{' '}
								<span className="font-semibold text-sky-500">
									Smooth case management
								</span>{' '}
								also keeps internal teams efficient. Reporting data can improve
								the customer experience, reduce ticket volume, and preempt small
								issues before they become big ones. Automate support and
								workflows.
							</p>
						</div>
						<div className="pt-[30px] sm:pt-[45px] md:pt-[60px] lg:pt-[72px]">
							<h1 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-6">
								Help customers help themselves
							</h1>
							<p className="text-justify md:text-lg lg:text-xl leading-[200%]">
								Sometimes, people just want to solve their own issues, like
								finding a quick, accurate answer to a product-related question.
								One crucial — and often overlooked — aspect of great customer
								service is{' '}
								<span className="font-semibold text-sky-500">
									enabling customers to help themselves.
								</span>{' '}
								To do this, companies need to have the right resources in place
								and make them easy to access. One way to make sure customers can
								help themselves is by creating an easy-to-nhavigate support
								portal. A support portal can house key information like FAQs.
								You could even create a public Q&A forum to help consumers
								connect with each other and share information. As customers
								continue to demand seamless experiences throughout their
								journeys with brands, customer service teams need to be ready to
								handle their inquiries. Help desk software allows companies to{' '}
								<span className="font-semibold text-sky-500">
									adapt and keep customers happy
								</span>{' '}
								no matter how the consumer-brand relationship evolves.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Help;
