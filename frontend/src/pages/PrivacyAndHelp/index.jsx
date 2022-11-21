import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import twitter from '../../assets/images/HelpCenter/ri_twitter-fill.png';
import facebook from '../../assets/images/HelpCenter/Vector.png';
import instagram from '../../assets/images/HelpCenter/ph_instagram-logo-fill.png';
import heroImage from '../../assets/images/HelpCenter/Frame 1000004522.png';

function PrivacyAndHelp() {
	return (
		<div>
			<NavigationBar />
			<div className="w-full md:text-sm my-[3em] px-[1em] md:px-[3em] lg:px-[5em] space-y-[2em] text-[#101828]">
				{/* help center header */}
				<div className="help header space-y-[1em] md:w-[40%] ">
					<h1 className="font-bold text-xl">
						Help Desk Software: The Corner Stone of Customer Support
					</h1>
					<div className="flex w-[40%] space-x-[1em]">
						<img
							src={twitter}
							alt="icon"
							className="w-[25px] h-[25px] object-contain"
						/>
						<img
							src={facebook}
							alt="icon"
							className="w-[25px] h-[25px] object-contain"
						/>
						<img
							src={instagram}
							alt="icon"
							className="w-[25px] h-[25px] object-contain"
						/>
					</div>
				</div>

				{/* Hero Image  */}
				<div>
					<img
						src={heroImage}
						alt="helpImage"
						className="w-full h-[400px] object-cover"
					/>
				</div>

				{/* hero body */}
				<div className="hero-body space-y-[2em] md:space-y-[5em]">
					<p>
						A company &#38;s products could be top-notch. Its software could be
						cutting edge, intuitive, and powerful. It could even provide
						industry-leading service offerings. Many businesspeople know that
						strong customer support is a must to stay competitive. In fact,
						<span className="font-semibold text-[#1570EF]">
							80% of executives
						</span>
						with service oversight &#40;for example, CEOs, service VPs, and so
						on&#41; say customer service is the primary vehicle for improving
						the customer experience. Consumers have the power to rate products,
						request answers, review companies, and rave about experiences across
						almost any channel — instantly. Because we live in a
						consumer-centric age, companies have to be ready to handle customer
						support cases and complaints quickly while keeping service teams
						working smoothly.
						<span className="font-semibold text-[#1570EF]">
							Help desk software
						</span>
						can become the cornerstone of your customer support strategy.
					</p>
					{/* support with headings */}
					<div className="hero-body2 space-y-[2em]">
						<div className="space-y-[0.5em]">
							<h1 className="text-2xl font-bold text-[#1570EF]">
								Support customers across channels.
							</h1>
							<p>
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
						<div className="space-y-[0.5em]">
							<h1 className="text-2xl font-bold text-[#1570EF]">
								Manage cases quickly
							</h1>
							<p>
								Many people have had the frustrating experience of filling out a
								form on a company &#38;s website to ask a question only to have
								multiple customer support representatives follow up at different
								times. Sometimes, no one follows up at all. Regardless of the
								channel the request came through, a good customer service
								platform ensures that every inquiry routes to the right agent
								and gets organized &#40;or categorized&#41; accordingly. One
								person or team might handle Facebook and Twitter cases, for
								instance, while another team responds to phone calls. This
								enables every customer service team member to focus on priority
								cases, without leaving requests unanswered.
								<span className="font-semibold text-[#1570EF]">
									Smooth case management
								</span>
								also keeps internal teams efficient. Reporting data can improve
								the customer experience, reduce ticket volume, and preempt small
								issues before they become big ones. Automate support and
								workflows.
							</p>
						</div>
						<div className="space-y-[0.5em]">
							<h1 className="text-2xl font-bold text-[#1570EF]">
								Help customers help themselves
							</h1>
							<p>
								Sometimes, people just want to solve their own issues, like
								finding a quick, accurate answer to a product-related question.
								One crucial — and often overlooked — aspect of great customer
								service is
								<span className="font-semibold text-[#1570EF]">
									enabling customers to help themselves.
								</span>
								To do this, companies need to have the right resources in place
								and make them easy to access. One way to make sure customers can
								help themselves is by creating an easy-to-nhavigate support
								portal. A support portal can house key information like FAQs.
								You could even create a public Q&A forum to help consumers
								connect with each other and share information. As customers
								continue to demand seamless experiences throughout their
								journeys with brands, customer service teams need to be ready to
								handle their inquiries. Help desk software allows companies to
								<span className="font-semibold text-[#1570EF]">
									adapt and keep customers happy
								</span>
								no matter how the consumer-brand relationship evolves.
							</p>
						</div>
					</div>
				</div>
				{/* ///////////////// */}
			</div>
			<Footer />
		</div>
	);
}

export default PrivacyAndHelp;
