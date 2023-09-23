/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplications } from "../../Utils/LStorage";

const JobDetails = () => {
  const allJobs = useLoaderData();
  const { jobId } = useParams();
  const idInt = parseInt(jobId);
  const sJob = allJobs.find((job) => job.id === idInt);
  console.log(allJobs, jobId, sJob);

  const {
    logo,
    id,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = sJob;

  const handleJob = () => {
    saveJobApplications(idInt);
    toast("Applied");
  };

  return (
    <div>
      <h2>Job details of: {job_title} </h2>
      <div className="grid grid-cols-4">
        <div className="border col-span-3">
          <h1 className="text-xl font-semibold">Details: {job_description} </h1>
        </div>
        <div className="border">
          <h2 className="text-4xl">Side things</h2>
          <button className="btn btn-primary" onClick={handleJob}>
            Apply now{" "}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
