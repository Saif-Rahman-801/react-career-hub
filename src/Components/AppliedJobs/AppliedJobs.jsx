import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedData } from "../../Utils/LStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [jobApplied, setJobApplied] = useState([]);
  useEffect(() => {
    const storedJobId = getAppliedData();
    // console.log(storedJobId);
    if (jobs.length > 0) {
      //system 3
    //   const appliedJobs = jobs.filter((job) => job.id === storedJobId);
      

      //system 2
      //   const appliedJobs = jobs.filter((job) => storedJobId.includes(job.id));

      //system 1
      const appliedJobs = [];
      for (const id of storedJobId) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          appliedJobs.push(job);
        }
      }
      setJobApplied(appliedJobs);
    }
  }, []);
  return (
    <div>
      <h3>Jobs I applied: {jobApplied.length} </h3>
      <div>
        {jobApplied.map((job) => (
          <li key={job.id}>{job.job_title}</li>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
