import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Blogs from './pages/Blogs/Index';
import Blog from './pages/Blog/Index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
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
