"use client";
import Section from "/components/Section";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Internships() {
  const [sortOption, setSortOption] = useState(null);
  const [jobs, setJobs] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  // Add anything you want to add to the search into this array
  const [searchParam] = useState(["company", "role", "location"]);
  const [jobsCopy, setJobsCopy] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.compsa.ca/compsa.ca/internships`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((r) => {
        console.log(r);
        const data = r.data;
        setJobs(data);
        setJobsCopy(data);
      })
      .catch((err) => {
        console.error("Error getting jobs: ", err);
      });
  }, []);

  useEffect(() => {
    if (jobs === null) {
      return;
    }

    if (searchQuery === "") {
      setJobs(jobsCopy);
      return;
    }

    let filteredJobs = [...jobs];
    filteredJobs = filteredJobs.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(searchQuery.toLowerCase()) > -1
        );
      });
    });
    setJobs(filteredJobs);
  }, [searchQuery]);

  useEffect(() => {
    if (jobs === null) {
      return;
    }
    let sortedJobs = [...jobs];
    switch (sortOption) {
      case "Alphabetical":
        sortedJobs.sort((a, b) => a.company.localeCompare(b.company));
        break;
      case "Date Added":
        sortedJobs.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        break;
      default:
        break;
    }
    setJobs(sortedJobs);
  }, [sortOption]); //Do NOT add jobs to the dependency array. This will cause an infinite loop

  return (
    <div className="internships">
      <h1 className="font-gothamBold page-heading">
        CANADIAN TECH INTERNSHIPS
      </h1>
      <p className="page-description">
        This is a list of Canadian tech internships for 2024. This list is
        maintained by the COMPSA Professional Development team at Queen&apos;s
        University.
      </p>
      <Section title="JOB POSTINGS">
        <></>
      </Section>
      <div className="flex flex-col gap-y-4 md:flex-row md:justify-between items-start mt-4">
        <div className="flex flex-row items-center rounded-xl bg-compsa-white">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 rounded-xl outline-none bg-compsa-white text-compsa-black placeholder:text-compsa-black"
          />
          <SearchComponent></SearchComponent>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <label>Sort by</label>
          <select
            onChange={(e) => setSortOption(e.target.value)}
            className="p-3 rounded-xl text-compsa-black bg-compsa-white"
            defaultValue={"DEFAULT"}
          >
            <option disabled value="DEFAULT">
              Select an option
            </option>
            <option>Alphabetical</option>
            <option>Date Added</option>
          </select>
        </div>
      </div>
      {jobs === null ? (
        <p className="text-compsa-white mt-2">
          Please wait. If no jobs appear, please refresh or try again soon.
        </p>
      ) : (
        <div className="my-8">
          {/*This table is hidden on screens smaller than 768px*/}
          <table className="max-md:hidden table-auto rounded-xl border-collapse text-compsa-black bg-compsa-white text-center w-full">
            <thead>
              <tr className="font-bold">
                <th className="px-4 py-4 align-middle">Company</th>
                <th className="px-4 py-4 align-middle">Role</th>
                <th className="px-4 py-4 align-middle">Location</th>
                <th className="px-4 py-4 align-middle">Term</th>
                <th className="px-4 py-2 align-middle">Length</th>
              </tr>
            </thead>
            <tbody className="font-book">
              {jobs.map((job, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-gray-200" : ""}`}
                >
                  <td
                    className={`border px-4 py-2 align-middle ${
                      index === jobs.length - 1 ? "rounded-bl-lg" : ""
                    }`}
                  >
                    {job.company}
                  </td>
                  <td className="border px-2 py-2 align-middle text-compsa-indigo underline">
                    <a target="_blank" href={job.link}>
                      {job.role}
                    </a>
                  </td>
                  <td className="border px-2 py-2 align-middle">
                    {job.location}
                  </td>
                  <td className="border px-2 py-2 align-middle">
                    <td>{job.term}</td>
                  </td>
                  <td
                    className={`border px-4 py-2 align-middle ${
                      index === jobs.length - 1 ? "rounded-br-lg" : ""
                    }`}
                  >
                    {job.length}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="md:hidden mt-4 table-auto rounded-xl border-collapse w-full text-compsa-black bg-compsa-white text-left">
            <table className="font-book w-full">
              <thead className="text-xl font-semibold">
                <h6 className="px-4 py-2">Internships</h6>
              </thead>
              <tbody>
                {jobs.map((job, index) => (
                  <div
                    key={index}
                    className={`px-4 py-2 ${
                      index % 2 === 0 ? "bg-gray-200" : ""
                    }`}
                  >
                    <tr
                      className={`border px-4 py-2 align-middle ${
                        index === jobs.length - 1 ? "rounded-bl-lg" : ""
                      }`}
                    >
                      <td className="pr-8 py-1 font-medium break-words">
                        Company
                      </td>
                      <td>{job.company}</td>
                    </tr>
                    <tr className="border px-2 py-2 align-middle">
                      <td className="pr-8 py-1 font-medium ">Role</td>
                      <td>
                        <a
                          className=" text-compsa-indigo underline"
                          href={job.link}
                          target="_blank"
                        >
                          {job.role}
                        </a>
                      </td>
                    </tr>

                    <tr className="border px-2 py-2 align-middle">
                      <td className="pr-8 py-1 font-medium">Location</td>
                      <td>{job.location}</td>
                    </tr>

                    <tr className="border px-2 py-2 align-middle">
                      <td className="pr-8 py-1 font-medium">Term</td>
                      <td>{job.term}</td>
                    </tr>

                    <tr className="border px-4 py-2 align-middle">
                      <td className="pr-8 py-1 font-medium">Length</td>
                      <td
                        className={`${
                          index === jobs.length - 1 ? "rounded-br-lg" : ""
                        }`}
                      >
                        {job.length}
                      </td>
                    </tr>
                  </div>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function SearchComponent() {
  return (
    <div className="mx-2 bg-compsa-indigo rounded-md p-1">
      <svg
        width="1.25em"
        height="1.25em"
        viewBox="0 0 25 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 61">
          <path
            id="Vector"
            d="M18.2905 15.0354C21.4533 9.9571 19.4903 3.34883 13.8601 1.0971C9.48095 -0.655069 4.48175 1.14669 2.15919 5.21854C-0.843998 10.4879 1.89868 17.1953 7.68306 18.9199C10.3456 19.7146 12.9703 19.3467 15.557 17.8161C15.6353 17.7696 15.705 17.78 15.7662 17.8473L16.3752 18.5251C16.4462 18.6034 16.5159 18.6022 16.5844 18.5214L16.8485 18.211C16.8596 18.1977 16.8734 18.1868 16.8889 18.1792C16.9045 18.1715 16.9216 18.1672 16.939 18.1665C16.9564 18.1658 16.9739 18.1687 16.9902 18.1751C17.0065 18.1815 17.0214 18.1913 17.0338 18.2037C18.9993 20.1762 20.9641 22.1414 22.9283 24.0993C24.0034 25.1719 25.7462 23.6108 24.3886 22.2333C22.5113 20.3293 20.6345 18.4473 18.7583 16.5874C18.7417 16.5706 18.7286 16.5506 18.7199 16.5286C18.7111 16.5067 18.7069 16.4832 18.7074 16.4595C18.7079 16.4359 18.7132 16.4125 18.7229 16.391C18.7326 16.3694 18.7465 16.35 18.7638 16.3339L19.0244 16.0897C19.0806 16.037 19.0812 15.9838 19.0262 15.9299L18.3107 15.2117C18.2569 15.1591 18.2502 15.1003 18.2905 15.0354ZM2.36282 9.87996C2.36282 7.75129 3.20747 5.7098 4.71096 4.2046C6.21445 2.69941 8.25363 1.85379 10.3799 1.85379C12.5061 1.85379 14.5453 2.69941 16.0488 4.2046C17.5523 5.7098 18.3969 7.75129 18.3969 9.87996C18.3969 12.0086 17.5523 14.0501 16.0488 15.5553C14.5453 17.0605 12.5061 17.9061 10.3799 17.9061C8.25363 17.9061 6.21445 17.0605 4.71096 15.5553C3.20747 14.0501 2.36282 12.0086 2.36282 9.87996Z"
            fill="#F0F0F0"
          />
          <path
            id="Vector_2"
            d="M2.3631 9.87998C2.3631 12.0087 3.20775 14.0501 4.71124 15.5553C6.21473 17.0605 8.25391 17.9061 10.3802 17.9061C12.5064 17.9061 14.5456 17.0605 16.0491 15.5553C17.5526 14.0501 18.3972 12.0087 18.3972 9.87998C18.3972 7.75131 17.5526 5.70983 16.0491 4.20463C14.5456 2.69943 12.5064 1.85382 10.3802 1.85382C8.25391 1.85382 6.21473 2.69943 4.71124 4.20463C3.20775 5.70983 2.3631 7.75131 2.3631 9.87998ZM15.7408 9.93876C15.7371 10.6275 14.829 10.7193 14.4639 10.2528C14.4248 10.2038 14.4027 10.1481 14.3979 10.0857C14.2009 7.58784 12.8941 6.18587 10.4774 5.87976C9.27574 5.72732 9.57662 4.46186 10.459 4.48758C13.4072 4.57757 15.7609 6.91563 15.7408 9.93876Z"
            fill="#5D15D2"
          />
          <path
            id="Vector_3"
            d="M14.4637 10.2528C14.8288 10.7193 15.7369 10.6275 15.7406 9.93873C15.7608 6.91561 13.407 4.57755 10.4589 4.48755C9.57644 4.46184 9.27557 5.7273 10.4772 5.87974C12.8939 6.18585 14.2008 7.58782 14.3977 10.0857C14.4026 10.1481 14.4246 10.2038 14.4637 10.2528Z"
            fill="#F0F0F0"
          />
        </g>
      </svg>
    </div>
  );
}
