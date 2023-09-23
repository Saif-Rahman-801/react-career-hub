import PropTypes from "prop-types";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
const SingleJobs = ({ job }) => {
  const {
    logo,
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
  } = job;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <h3>{company_name} </h3>
        <div>
          <button className="px-4 py-2 border rounded-sm mr-3 font-extrabold border-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-4 py-2 border rounded-sm mr-3 font-extrabold border-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <p>{job_description} </p>
        <div>
          <p className="flex gap-2 items-center">
            <MdLocationOn /> {location}
          </p>
          <p className="flex gap-2 items-center">
            <AiOutlineDollar />
            {salary}
          </p>
        </div>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">View details</button>
        </div>
      </div>
    </div>
  );
};

SingleJobs.propTypes = {
  job: PropTypes.any,
};

export default SingleJobs;
