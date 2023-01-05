import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Application Monitoring and Error Reporting by DeVops
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
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
import Help from './pages/Help';
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
import Error404 from './pages/Error404/index';
import ErrorProcessing from './pages/ErrorProcessing/index';
import Reconcile from './pages/Dashboard/Reconcile/Reconcile';
import { UserProvider } from './Store/Context';
import Privacy from './pages/Privacy';
import ServerError from './pages/ServerError/index';
import Upload from './pages/Dashboard/Upload/Upload';
import Download from './pages/Dashboard/Download/Download';

// Kindly Comment when on testing on Local
Sentry.init({
	dsn: 'https://4a3e104ad3e7451c8276d1ab491fbd56@o4504281023315968.ingest.sentry.io/4504281163825152',
	integrations: [new BrowserTracing()],

	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 0.5,
});

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
				path: '/dashboard/upload',
				element: <Upload />,
			},
			{
				path: '/dashboard/reconcile',
				element: <Reconcile />,
			},
			{
				path: '/dashboard/download',
				element: <Download />,
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
		path: '/help',
		element: <Help />,
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
	{
		path: '*',
		element: <Error404 />,
	},
	// {
	// 	path: '/settings',
	// 	element: <Settings />,
	// },
	{
		path: '/processingerror',
		element: <ErrorProcessing />,
	},
	{
		path: '/servererror',
		element: <ServerError />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<UserProvider>
			<ChakraProvider>
				<RouterProvider router={router} />
			</ChakraProvider>
		</UserProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
