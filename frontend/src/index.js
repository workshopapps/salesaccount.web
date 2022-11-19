import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landingpage from "../src/pages/Landingpage";
import Pricing from '../src/pages/Pricing';
import Teams from "../src/pages/Teams";
import Aboutus from "../src/pages/Aboutus";
import Accountbalancereport  from "../src/pages/Accountbalancereport";
import Blogpost from "../src/pages/Blogpost";
import Careers from "../src/pages/Careers";
import Company from "../src/pages/Company";
import Documentation from "../src/pages/Documentation";
import Faqs from "../src/pages/Faqs";
import Guides from "../src/pages/Guides";
import History from "../src/pages/History";
import Privacyandhelp from "../src/pages/Privacyandhelp";
import Resources from "../src/pages/Resources";
import Uploadaccountstatementready from "../src/pages/Uploadaccountstatementready";
import Uploaddata from "../src/pages/Uploaddata";
import Uploadedaccountstatementready from "../src/pages/Uploadedaccountstatementready";
import Upoadingsalesrecord from "../src/pages/Upoadingsalesrecord";
import Userupload from "../src/pages/Userupload";


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



