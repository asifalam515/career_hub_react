import React from "react";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    experiences,
    contact_information,
    educational_requirements,
  } = job;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {job_title} </h2>
        <p> {company_name} </p>
        <div>
          <button className="px-5 py-2 font-extrabold border border-[#7E90FE] rounded mr-4 text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border border-[#7E90FE] rounded mr-4 text-[#7E90FE]">
            {" "}
            {job_type}{" "}
          </button>
        </div>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
