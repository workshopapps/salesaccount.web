import React, { useState, useEffect } from 'react';
import './footer.css';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Store/Context';

function Footer() {
	const [showFooter, setFooter] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(100);
	const { localData } = useAuth()

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
			className=" md:hidden footer fixed bottom-[2em] border rounded-md  bg-white flex items-center justify-between w-[80%] mx-[10%]  transition-all delay-200"
		>

			{localData.length > 0 &&
				<Link to="/dashboard/importpage">
					<div className="footer-item text-center ">
						<InsertDriveFileOutlinedIcon />
						<p>Import Data</p>
					</div>
				</Link>
			}



			{/* Dashboard home bar */}

			<Link to="/dashboard/home">
				<div className="footer-item text-center">
					
					<AutoAwesomeMosaicOutlinedIcon />
					<p>Dashboard</p>
				</div>

			</Link>



			{/* <div className="footer-item text-center">
				<SettingsOutlinedIcon />
				<p>Settings</p>
			</div> */}
		</footer>
	);
}

export default Footer;
