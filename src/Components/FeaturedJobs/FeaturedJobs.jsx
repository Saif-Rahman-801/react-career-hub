import { useEffect, useState } from "react";
import SingleJobs from "../SingleJobs/SingleJobs";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  console.log(jobs);

  return (
    <div className="my-5">
      <h2
        className="text-3xl font-bold
        text-center"
      >
        Featured jobs {jobs.length}
      </h2>
      <p className="text-sm text-gray-400 text-center p-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="container mx-auto grid grid-cols-2 gap-6">
        {jobs.map((job) => (
          <SingleJobs key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
