import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
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
import Teams from './pages/Teams';
import History from './pages/History';
import reportWebVitals from './reportWebVitals';
import DashBoard from './pages/Dashboard';
import Gpt3 from './pages/Gpt-3';
import Blogs from './pages/Blogs/Index';
import ErrorProcessing from './pages/ErrorProcessing/index'
// import DashboardMain from './pages/Dashboard/DashboardMain/DashboardMain';
// import Upload from './pages/Dashboard/DashboardMain/UploadFile/Upload';
import UploadReady from './pages/Dashboard/DashboardMain/UploadReady/UploadReady';
import ImportData from './pages/Dashboard/ImportData/Hero/ImportData';
import Reconcile from './pages/Dashboard/ImportData/Hero/Reconcile';
import { UserProvider } from './Store/Context';
import AccountReport from './pages/Dashboard/AccountReport/AccountReport';
import DashboardMain from './pages/Dashboard/DashboardMain/DashboardMain';
import Privacy from './pages/Privacy';
// import ImportData from './pages/Dashboard/ImportData/Hero/ImportData';
// import {
// 	Upload,
// 	UploadReady,
// } from './pages/Dashboard/DashboardMain/UploadFile/Upload';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />,
	},

	{
		path: '/aboutus',
		element: <AboutUs />,
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
		path: '/dashboard',
		element: <DashBoard />,
		children: [
			{
				path: '/dashboard/home',
				element: <DashboardMain />,
			},
			{
				path: '/dashboard/upload',
				element: <UploadReady />,
			},
			{
				path: '/dashboard/importpage',
				element: <ImportData />,
			},
			{
				path: '/dashboard/reconcile',
				element: <Reconcile />,
			},
			{
				path: '/dashboard/accountreport',
				element: <AccountReport />,
			},
		],
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
		element: <Userupload />,
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
		path: '/privacy',
		element: <Privacy />,
	},
	// {
	// 	path: '/settings',
	// 	element: <Settings />,
	// },
	{
		path: '/processingerror',
		element: <ErrorProcessing />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<UserProvider>
			<RouterProvider router={router} />
		</UserProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
