import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import Landingpage from "./pages/LandingPage";
import Pricing from "./pages/Pricing";
import Teams from "./pages/Teams";
import Aboutus from "./pages/Aboutus";
import Accountbalancereport  from "./pages/AccountBalanceReport";
import Blogpost from "./pages/BlogPost";
import Careers from "./pages/Careers";
import Company from "./pages/Company";
import Documentation from "./pages/Documentation";
import Faqs from "./pages/Faqs";
import Guides from "./pages/Guides";
import History from "./pages/History";
import Privacyandhelp from "./pages/PrivacyAndHelp";
import Resources from "./pages/Resources";
import Uploadaccountstatementready from "./pages/UploadAccountsStatementReady";
import Uploaddata from "./pages/UploadData";
import Uploadedaccountstatementready from "./pages/UploadedAccountStatementReady";
import Upoadingsalesrecord from "./pages/UpoadingSalesRecord";
import Userupload from "./pages/UserUpload"

import Blogs from './pages/Blogs/Index';
import Blog from './pages/Blog/Index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage/>
  },

  {
    path: "/aboutus",
    element: <Aboutus/>
  },

  {
    path: "/accountbalancereport",
    element: <Accountbalancereport/>
  },

  {
    path: "/blogpost",
    element: <Blogpost/>
  },

  {
    path: "/careers",
    element: <Careers/>
  },

  {
    path: "/company",
    element: <Company/>
  },

  {
    path: "/documentation",
    element: <Documentation/>
  },

  {
    path: "/faqs",
    element: <Faqs/>
  },

  {
    path: "/guides",
    element: <Guides/>
  },

  {
    path: "/history",
    element: <History/>
  },

  {
    path: "/privacyandhelp",
    element: <Privacyandhelp/>
  },

  {
    path: "pricing",
    element: <Pricing/>
  },

  {
    path: "/teams",
    element: <Teams/>
  },

  {
    path: "/resources",
    element: <Resources/>
  },

  {
    path: "/uploadaccountstatementready",
    element: <Uploadaccountstatementready/>
  },

  {
    path: "/uploaddata",
    element: <Uploaddata/>
  },

  {
    path: "/uploadedaccountstatementready",
    element: <Uploadedaccountstatementready/>
  },

  {
    path: "/upoadingsalesrecord",
    element: <Upoadingsalesrecord/>
  },

  {
    path: "/userupload",
    element: <Userupload/>
  },
  {
    path: "/blogs",
    element: <Blogs />
  },
  {
    path: "/blog/:slug",
    element: <Blog />
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



