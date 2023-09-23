/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs.jsx";
import Jobs from "./Components/Jobs/Jobs.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import JobDetails from "./Components/Job Details/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/applied_jobs",
        element: <AppliedJobs />,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/singleJob/:jobId",
        element: <JobDetails />,
        loader: () => fetch("jobs.json"), // don't load all data; load only what you need
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
