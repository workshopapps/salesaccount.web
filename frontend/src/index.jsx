import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
// import AboutUs from './pages/AboutUs';
import AccountBalanceReport from './pages/AccountBalanceReport';
import BlogPost from './pages/BlogPost';
import Careers from './pages/Careers';
import Company from './pages/Company';
import ContactUs from './pages/Contact';
import Documentation from './pages/Documentation';
import Faqs from './pages/Faqs';
import Guides from './pages/Guides';
import Pricing from './pages/Pricing';
import PrivacyAndHelp from './pages/PrivacyAndHelp';
import Resources from './pages/Resources';
import UploadAccountsStatementReady from './pages/UploadAccountsStatementReady';
import Userupload from './pages/UserUpload';
import UploadedAccountStatementReady from './pages/UploadedAccountStatementReady';
import UpoadingSalesRecord from './pages/UpoadingSalesRecord';
// import UserUpload from './pages/UserUpload/index';
import Teams from './pages/Teams';
import History from './pages/History';
import reportWebVitals from './reportWebVitals';
import DashBoard from './pages/Dashboard';
import Gpt3 from './pages/Gpt-3';
import Blogs from './pages/Blogs/Index';
import Settings from './pages/Settings';
import ErrorProcessing from './pages/ErrorProcessing';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />,
	},

	// {
	// 	path: '/aboutus',
	// 	element: <AboutUs />,
	// },
	{
		path: '/dashboard',
		element: <DashBoard />,
	},
	{
		path: '/accountbalancereport',
		element: <AccountBalanceReport />,
	},

	{
		path: '/blog/:slug',
		element: <BlogPost />,
	},

	{
		path: '/careers',
		element: <Careers />,
	},

	{
		path: '/company',
		element: <Company />,
	},

	{
		path: '/contact',
		element: <ContactUs />,
	},

	{
		path: '/documentation',
		element: <Documentation />,
	},

	{
		path: '/faqs',
		element: <Faqs />,
	},

	{
		path: '/guides',
		element: <Guides />,
	},

	{
		path: '/history',
		element: <History />,
	},

	{
		path: '/privacyandhelp',
		element: <PrivacyAndHelp />,
	},

	{
		path: 'pricing',
		element: <Pricing />,
	},

	{
		path: '/teams',
		element: <Teams />,
	},

	{
		path: '/resources',
		element: <Resources />,
	},

	{
		path: '/uploadaccountstatementready',
		element: <UploadAccountsStatementReady />,
	},

	// {
	// 	path: '/userupload',
	// 	element: <Userupload/>,
	// },

	{
		path: '/uploadedaccountstatementready',
		element: <UploadedAccountStatementReady />,
	},

	{
		path: '/upoadingsalesrecord',
		element: <UpoadingSalesRecord />,
	},

	{
		path: '/userupload',
		element: <Userupload/>,
	},
	{
		path: '/Gpt-3',
		element: <Gpt3 />,
	},
	{
		path: '/blogs',
		element: <Blogs />,
	},
		{
		path: '/settings',
		element: <Settings />,
	},
	{
		path: '/processingerror',
		element: <ErrorProcessing/>,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
