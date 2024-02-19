import React from "react";
import { motion } from "framer-motion";

import Dot from "../app/assets/icons/dot.svg";

const Experience = () => {
  const experienceData = [
    {
      companyName: "RouteWise",
      title: "Co-Founder",
      dateAndLocation: "Jan 2020 - Present / Istanbul",
    },
    {
      companyName: "Pooly",
      title: "Full Stack Developer",
      dateAndLocation: "Jan 2020 - Present / Istanbul",
    },
    {
      companyName: "BAYKAR Technologies",
      title: "Summer Intern",
      dateAndLocation: "Jan 2020 - Present / Istanbul",
    },
    {
      companyName: "Randevum",
      title: "Full Stack Developer",
      dateAndLocation: "Jan 2020 - Present / Istanbul",
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
          <h1 className="text-sm opacity-80">{data.companyName}</h1>
          <p className="text-xs opacity-60">{data.dateAndLocation}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
