import padlock from '../../assets/images/Privacy/padlock.svg';
import Key from '../../assets/images/Privacy/Key.svg';
import Camera from '../../assets/images/Privacy/camera.svg';
import Globe from '../../assets/images/Privacy/globe.svg';
import Partnership from '../../assets/images/Privacy/partnership.svg';
import photo1 from '../../assets/images/Privacy/photo4.png';
import photo2 from '../../assets/images/Privacy/photo2.png';
import photo3 from '../../assets/images/Privacy/photo3.png';
import Footer from '../../components/Footer';
import Navbar from '../../components/NavigationBar';
import ScrollToTop from '../../components/ScrollToTop';

const Privacy = () => (
	<div>
		<ScrollToTop />
		<Navbar />
		<div className="mx-auto">
			<div className="">
				<div className="p-4 md:p-10 lg:px-20 xl:px-36 2xl:px-40 bg-[#F2F4F7] w-full lg:py-20 lg:px-36">
					<div className="max-w-screen-xl mx-auto md:flex md:flex-row md:gap-10">
						<div className="w-full md:w-3/5">
							<h2 className=" text-xl sm:text-2xl md:text-3xl font-semibold">
								Turn data privacy into an opportunity to enhance customer
								experiences
							</h2>
							<p className="my-4 text-sm sm:text-xl md:text-2xl">
								As one of the best platform, we provides companies like yours
								with the tools to build trust while enhancing customer
								experiences. Gain increased transparency and control of your
								customers&rsquo; data, all while harnessing the power of that
								data to connect with customers in new ways.
							</p>
						</div>
						<img src={photo1} alt="" className="w-full md:w-2/5 h-full " />
					</div>
				</div>
				<div className="p-4 md:p-10 lg:px-20 xl:px-36 2xl:px-40 w-full  lg:py-20 lg:px-36">
					<div className="max-w-screen-xl mx-auto md:flex md:flex-row md:gap-10">
						<div className="w-full md:w-3/5">
							<h2 className="mt-10 text-xl sm:text-2xl md:text-3xl font-semibold">
								Privacy for every customer
							</h2>
							<p className="my-4 w-full text-sm sm:text-xl md:text-2xl sm:w-full">
								No matter where your customers are located, we care about
								helping you protect their personal data.
							</p>
						</div>
						<div className="">
							<img src={photo2} alt="photo2" className="w-full" />
						</div>
					</div>
				</div>
				<div className="p-4 md:p-10 lg:px-20 xl:px-36 2xl:px-40 bg-[#F2F4F7] w-full lg:py-20 lg:px-36">
					<div className="max-x-screen-xl mx-auto md:flex md:flex-row md:gap-10">
						<div className="w-full md:w-3/5">
							<h2 className="mt-10 text-xl sm:text-2xl md:text-3xl font-semibold ">
								Global privacy support
							</h2>
							<p className="my-4 w-full text-sm sm:text-xl md:text-2xl">
								We safeguard our customers&rsquo; data with a robust,
								comprehensive, and transparent privacy and security program.
							</p>
						</div>
						<div className="">
							<img src={photo3} alt="photo3" className="w-full" />
						</div>
					</div>
				</div>
			</div>
			<h2 className="my-10 text-left text-xl sm:text-2xl md:text-2xl lg:px-20 lg:text-3xl md:leading-[50px] font-semibold">
				We have five privacy principles that highlight our commitment to trust.
			</h2>
			<div className="max-w-screen-xl mx-auto bg-[#F9FAFB] flex flex-col md:bg-white p-10 sm:p-20 md:grid md:grid-cols-2 md:gap-20 place-content-center place-item-center">
				<div className="md:bg-[#F9FAFB] px-6 py-12">
					<div className="">
						<img
							className="w-10 sm:w-20 md:w-68 mx-auto "
							src={padlock}
							alt="padlock"
						/>
						<p className="text-2xl text-blue-600 text-center font-bold pt-6">
							Security
						</p>
					</div>
					<p className="mx-auto sm:text-lg md:text-xl lg:text-2xl">
						We protect your data at all times, using strong security measures
						that are regularly verified by internal safeguards and external
						auditors.
					</p>
				</div>
				<div className="md:bg-[#F9FAFB] px-6 py-12">
					<div className="">
						<img className="w-12 sm:w-24 md:w-68 mx-auto" src={Key} alt="key" />
						<p className="text-blue-600 text-center font-bold text-2xl pt-0">
							Control
						</p>
					</div>
					<p className="sm:text-lg md:text-xl lg:text-2xl">
						We design our products to ensure you remain in control of your data,
						at all times.
					</p>
				</div>
				<div className="md:bg-[#F9FAFB] px-6 py-12">
					<div className="">
						<img
							className="w-12 sm:w-24 md:w-68 mx-auto"
							src={Camera}
							alt="camera"
						/>
						<p className="text-blue-600 text-center font-bold text-2xl pt-0">
							Transparency
						</p>
					</div>
					<p className="text-center sm:text-lg md:text-xl lg:text-2xl">
						We are clear about our practices so that you can understand how your
						data is collected and used.
					</p>
				</div>
				<div className="md:bg-[#F9FAFB] px-6 py-12">
					<div className="">
						<img
							className="w-10 sm:w-20 md:w-68 mx-auto"
							src={Globe}
							alt="globe"
						/>
						<p className="text-blue-600 text-center font-bold text-2xl pt-0">
							Compliance
						</p>
					</div>
					<p className="text-left sm:text-lg md:text-xl lg:text-2xl">
						We operate a high standard designed so you can operate around the
						world, including in regions with strict privacy rules for data
						handling.
					</p>
				</div>
				<div className="md:hidden px-6 py-12 mx-auto">
					<div className="">
						<img
							className="w-12 sm:w-20 md:w-68 mx-auto"
							src={Partnership}
							alt="partnership"
						/>
						<h2 className="text-blue-600 text-center font-bold text-2xl pt-7">
							Partnership
						</h2>
					</div>
					<p className="text-left sm:text-lg md:text-xl lg:text-2xl">
						Safeguarding data is a team effort. We listen to your feedback, and
						we provide information and customizable security and privacy tools
						to you.
					</p>
				</div>
			</div>
			<div className="hidden max-w-screen-xl mx-auto pb-20 md:flex md:flex-row md:justify-center">
				<div className="w-1/3 bg-[#F9FAFB] px-6 py-12">
					<div className="">
						<img
							className="w-12 sm:w-20 md:w-68 mx-auto"
							src={Partnership}
							alt="partnership"
						/>
						<h2 className="text-blue-600 text-center font-bold text-2xl pt-7">
							Partnership
						</h2>
					</div>
					<p className="text-left w-full sm:text-lg md:text-xl lg:text-2xl">
						Safeguarding data is a team effort. We listen to your feedback, and
						we provide information and customizable security and privacy tools
						to you.
					</p>
				</div>
			</div>
		</div>
		<Footer />
	</div>
);

export default Privacy;
