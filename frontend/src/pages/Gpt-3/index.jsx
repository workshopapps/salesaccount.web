import React from 'react';
import drops from '../../assets/images/gpt3/section1.png';
import Footer from '../../components/Footer';
import NavigationBar from '../../components/NavigationBar';
import Banner from '../../assets/images/gpt3/banner.png';
import LapTop from '../../assets/images/gpt3/laptop.png';

function Gpt3() {
	return (
		<div>
			<NavigationBar />
			<img src={Banner} className="w-[100vw]" alt="banner" />
			<div className="py-20 mt-20">
				<div className="w-[80%] flex items-center md:flex-row flex-col gap-10 mx-auto">
					<div className="">
						<h4 className="md:text-[48px] text-[30px] font-[700] leading-[59.95px] text-[#194185]">
							What is GPT-3
						</h4>
						<p className="text-[16px] leading-[35px]">
							Generative Pre-trained Transformer 3 (GPT-3; stylized GPT·3) is an
							autoregressive language model that uses deep learning to produce
							human-like text. Given an initial text as a prompt, it will
							produce text that continues the prompt. The architecture is a
							standard transformer network (with a few engineering tweaks) with
							the unprecedented size of 2048-token-long context and 175 billion
							parameters (requiring 800 GB of storage). The training method is
							&quot;generative pretraining&quot;, meaning that it is trained to
							predict what the next token is. The model demonstrated strong
							few-shot learning on many text-based tasks.
						</p>
					</div>
					<img src={drops} alt="" />
				</div>
			</div>
			<div>
				<h2 className="font-[700] flex items-center  md:text-[48px] text-[24px] my-10 w-[90%] mx-auto text-[#194185]">
					Use cases for GPT-3
				</h2>
				<div className="px-6 w-[90%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 mx-auto my-10">
					<div className="px-4">
						<h2 className="font-[400] text-[28px]">
							Automated customer service
						</h2>
						<p>
							GPT-3 can be used to automatically generate responses to customer
							inquiries, saving time and money for customer service teams.
						</p>
					</div>
					<div className="px-4">
						<h2 className="font-[400] text-[28px]">
							Generating required reports
						</h2>
						<p>
							GPT-3 can be used to automatically generate responses to customer
							inquiries, saving time and money for customer service teams.
						</p>
					</div>
					<div className="px-4">
						<h2 className="font-[400] text-[28px]">Knowledge management</h2>
						<p>
							GPT-3 can be used to automatically generate responses to customer
							inquiries, saving time and money for customer service teams.
						</p>
					</div>
					<div className="px-4">
						<h2 className="font-[400] text-[28px]">
							Natural language processing
						</h2>
						<p>
							GPT-3 can be used to automatically generate responses to customer
							inquiries, saving time and money for customer service teams.
						</p>
					</div>
					<div className="px-4">
						<h2 className="font-[400] text-[28px]">
							Automatic machine translation
						</h2>
						<p>
							GPT-3 can be used to automatically generate responses to customer
							inquiries, saving time and money for customer service teams.
						</p>
					</div>
				</div>
			</div>
			<div className="py-20 mt-20">
				<div className="w-[80%] flex items-center md:flex-row flex-col gap-10 mx-auto">
					<div className="">
						<h4 className="md:text-[48px] text-[30px] font-[700] leading-[59.95px] text-[#194185]">
							Technological Risks
						</h4>
						<p className="text-[16px] leading-[35px]">
							The technological risk posed by GPT-3 is the knowledge gap in its
							ability to perform mathematical computation and its known use case
							in Finance. Alternatively, an algorithm can be used to balance out
							account statements and sales then output can be fed to GPT-3 to
							summarize.
						</p>
					</div>
					<img src={LapTop} alt="" />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Gpt3;
