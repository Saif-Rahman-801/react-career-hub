import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedData } from "../../Utils/LStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [jobApplied, setJobApplied] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(jobApplied);
    } else if (filter === "Remote") {
      const remoteJobs = jobApplied.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "Onsite") {
      const onSiteJobs = jobApplied.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onSiteJobs);
    }
  };

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
      setDisplayJobs(appliedJobs);
    }
  }, [jobs]);
  return (
    <div>
      <h3>Jobs I applied: {jobApplied.length} </h3>
      <details className="dropdown mb-32">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter("Remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter("Onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <div>
        {displayJobs.map((job) => (
          <li key={job.id}>
            {job.job_title}:{job.remote_or_onsite}
          </li>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
