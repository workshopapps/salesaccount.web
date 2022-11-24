import React, { useState, useEffect } from 'react';
import './footer.css';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link } from 'react-router-dom';

function Footer() {
	const [showFooter, setFooter] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(100);

	function navbarHandler() {
		if (typeof window !== 'undefined') {
			if (window.scrollY > lastScrollY) {
				setFooter(false);
			} else {
				setFooter(true);
			}
			setLastScrollY(window.scrollY);
		}
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', navbarHandler);
		}
		return () => {
			window.removeEventListener('scroll', navbarHandler);
		};
	}, [lastScrollY]);
	return (
		<footer
			style={{ display: showFooter ? 'flex' : 'none' }}
			className=" md:hidden footer fixed bottom-0 border bg-white flex items-center justify-between mt-[2em] mx-auto w-full px-[2em] py-[1em] transition-all delay-200"
		>
			<Link to="/Dashboard/upload">
				<div className="footer-item text-center ">
					<InsertDriveFileOutlinedIcon />
					<p>Import Data</p>
				</div>
			</Link>
			<div className="footer-item text-center">
				<AutoAwesomeMosaicOutlinedIcon />
				<p>Dashboard</p>
			</div>
			<div className="footer-item text-center">
				<SettingsOutlinedIcon />
				<p>Settings</p>
			</div>
		</footer>
	);
}

export default Footer;