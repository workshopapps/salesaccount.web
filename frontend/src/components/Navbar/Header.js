import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/logo.png';

export function Header() {
	const [isClicked, setIsClicked] = useState(true);
	const clickHandler = () =>
		isClicked === false ? setIsClicked(true) : setIsClicked(false);

	return (
		<div>
			{/* mobile */}
			<div className="mobile-nav flex justify-between items-center p-4 lg:hidden">
				{/* logo */}
				<div className="logo flex items-center">
					<img src={logo} alt="Main Logo" />
					<h2 className="font-bold text-lg md:text-xl">Account Pal</h2>
				</div>
				{/* logo ends here */}

				{/* hambuger */}
				<div className="ham" onClick={clickHandler} aria-hidden>
					{isClicked ? <MenuIcon /> : <CloseIcon />}
				</div>
				{!isClicked && (
					<div className="nav-items absolute bg-white top-[4.5em] left-0 z-10 text-center w-full ">
						<ul className="flex flex-col items-center pt-8 space-y-[1.25em] text-md font-semibold ">
							<Link to="/" onClick={() => setIsClicked(true)}>
								<li className="text-base">Home</li>
							</Link>
							<Link to="/" onClick={() => setIsClicked(true)}>
								<li className="text-base">Pricing</li>
							</Link>
							<Link to="/" onClick={() => setIsClicked(true)}>
								<li className="text-base">About</li>
							</Link>
							<Link to="/guide" onClick={() => setIsClicked(true)}>
								<li className="text-base">Guide</li>
							</Link>
							<Link to="/" onClick={() => setIsClicked(true)}>
								<li className="text-base">Resources</li>
							</Link>
							<Link to="/" onClick={() => setIsClicked(true)}>
								<li className="text-base">Company</li>
							</Link>
						</ul>
						<div className="mt-[2em] pb-6">
							<button
								className="button1 px-[1em] py-[0.5em] rounded-lg"
								type="button"
							>
								Dashboard
							</button>
						</div>
					</div>
				)}
			</div>

			{/* desktop */}
			<div className="desktop-nav hidden lg:flex justify-between items-center py-4 mx-auto lg:max-w-[1280px] xl:max-w-[1366px] 2xl:max-w-[1500px] ">
				{/* logo */}
				<div className="logo flex items-center">
					<img src={logo} alt="Main Logo" />
					<h2 className="font-bold text-2xl">Account Pal</h2>
				</div>
				{/* logo ends here */}

				<div className="">
					<ul className="desktop-nav flex space-x-[1em] lg:space-x-[2em] marker: text-sm lg:text-xs">
						<Link to="/" onClick={() => setIsClicked(true)}>
							<li className="text-base">Home</li>
						</Link>
						<Link to="/" onClick={() => setIsClicked(true)}>
							<li className="text-base">Pricing</li>
						</Link>
						<Link to="/" onClick={() => setIsClicked(true)}>
							<li className="text-base">About</li>
						</Link>
						<Link to="/guide" onClick={() => setIsClicked(true)}>
							<li className="text-base">Guide</li>
						</Link>
						<Link to="/" onClick={() => setIsClicked(true)}>
							<li className="text-base">Resources</li>
						</Link>
						<Link to="/" onClick={() => setIsClicked(true)}>
							<li className="text-base">Company</li>
						</Link>
					</ul>
				</div>
				<div className="Nav-button ">
					<button
						className="text-lg px-[1em] py-[0.5em] rounded-lg"
						type="button"
					>
						Dashboard
					</button>
				</div>
			</div>
		</div>
	);
}

export default Header;
