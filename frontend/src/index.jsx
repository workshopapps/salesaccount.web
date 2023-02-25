import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Application Monitoring and Error Reporting by DeVops
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { HashLoader } from 'react-spinners';

import reportWebVitals from './reportWebVitals';
import DashBoard from './pages/Dashboard';

import { UserProvider } from './Store/Context';
import Upload from './pages/Dashboard/Upload/Upload';

const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const Download = React.lazy(() =>
	import('./pages/Dashboard/Download/Download')
);
const ServerError = React.lazy(() => import('./pages/ServerError/index'));
const Reconcile = React.lazy(() =>
	import('./pages/Dashboard/Reconcile/Reconcile')
);
const ErrorProcessing = React.lazy(() =>
	import('./pages/ErrorProcessing/index')
);
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Error404 = React.lazy(() => import('./pages/Error404/index'));
const Blogs = React.lazy(() => import('./pages/Blogs/Index'));
const Gpt3 = React.lazy(() => import('./pages/Gpt-3'));
const History = React.lazy(() => import('./pages/History'));
const Teams = React.lazy(() => import('./pages/Teams'));
const UpoadingSalesRecord = React.lazy(() =>
	import('./pages/UpoadingSalesRecord')
);
const UploadedAccountStatementReady = React.lazy(() =>
	import('./pages/UploadedAccountStatementReady')
);
const Userupload = React.lazy(() => import('./pages/UserUpload'));
const UploadAccountsStatementReady = React.lazy(() =>
	import('./pages/UploadAccountsStatementReady')
);
const Resources = React.lazy(() => import('./pages/Resources'));
const Help = React.lazy(() => import('./pages/Help'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Guides = React.lazy(() => import('./pages/Guides'));
const Faqs = React.lazy(() => import('./pages/Faqs'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const ContactUs = React.lazy(() => import('./pages/Contact'));
const Company = React.lazy(() => import('./pages/Company'));
const Careers = React.lazy(() => import('./pages/Careers'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const AccountBalanceReport = React.lazy(() =>
	import('./pages/AccountBalanceReport')
);
const LandingPage = React.lazy(() => import('./pages/LandingPage'));

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
		element: (
			<Suspense fallback={<HashLoader />}>
				<AboutUs />,
			</Suspense>
		),
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
		element: <ServerError />
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<UserProvider>
			<ChakraProvider>
				<Suspense fallback={<HashLoader />}>
					<div className="">
						<RouterProvider router={router} />
					</div>
				</Suspense>
			</ChakraProvider>
		</UserProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
