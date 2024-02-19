import React from "react";
import { motion } from "framer-motion";

import Open from "../app/assets/icons/open.svg";

const Experience = () => {
  const experienceData = [
    {
      companyName: "RouteWise",
      title: "Co-Founder",
      dateAndLocation: "Jun 2023 - Present / Istanbul",
      companyLink: "https://routewise.tech",
    },
    {
      companyName: "Pooly",
      title: "Full Stack Developer",
      dateAndLocation: "May 2022 - Present / Istanbul",
      companyLink: "https://poolytech.com",
    },
    {
      companyName: "BAYKAR Technologies",
      title: "Summer Intern",
      dateAndLocation: "Jun 2022 - Jul 2022 / Istanbul",
    },
    {
      companyName: "Randevum",
      title: "Full Stack Developer",
      dateAndLocation: "Oct 2021 - Sep 2023 / Istanbul",
    },
  ];
  return (
    <div className="flex flex-col gap-2 bg-green-400 px-2">
      {experienceData.map((data, index) => (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.2 }}
          key={index}
          className="flex flex-col gap-1 bg-primary rounded-lg text-tertiary text-left px-4 py-2 shadow-lg"
        >
          <p className="text-sm font-semibold">{data.title}</p>
          <a
            href={data.companyLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1 group"
          >
            <h1
              className={`text-sm opacity-80 ${
                data.companyLink
                  ? "group-hover:text-blue-500 transition-all duration-300 ease-in-out"
                  : ""
              }`}
            >
              {data.companyName}
            </h1>
            {data.companyLink && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 96 96"
                width="16"
                height="16"
                fill="white"
                className={`opacity-80 ${
                  data.companyLink
                    ? "group-hover:fill-blue-500 transition-all duration-300 ease-in-out"
                    : ""
                }`}
                id="open"
              >
                <switch>
                  <g>
                    <path d="M88 48a4 4 0 0 0-4 4v28c0 2.21-1.79 4-4 4H16c-2.21 0-4-1.79-4-4V16c0-2.21 1.79-4 4-4h28a4 4 0 0 0 0-8H16C9.373 4 4 9.373 4 16v64c0 6.627 5.373 12 12 12h64c6.627 0 12-5.373 12-12V52a4 4 0 0 0-4-4zm4-40v24a4 4 0 0 1-8 0V17.656l-32.771 32.77a4 4 0 0 1-5.655-5.656L78.343 12H64a4 4 0 0 1 0-8h24a4 4 0 0 1 4 4z"></path>
                  </g>
                </switch>
              </svg>
            )}
          </a>
          <p className="text-xs opacity-60">{data.dateAndLocation}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
