import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      title: "Associate Degree in Electronic Communication",
      location: "Istanbul University - Cerrahpasa",
      dateAndLocation: "2021 - 2023 / Istanbul",
    },
    {
      title: "Electronics and Security Systems in High School",
      location:
        "IMMIB Erkan Avci Vocational and Technical Anatolian High School",
      dateAndLocation: "2017 - 2021 / Istanbul",
    },
  ];
  return (
    <div className="m-4 flex flex-col gap-4">
      {educationData.map((data, index) => (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.2 }}
          key={index}
          className="flex flex-col  gap-2 bg-primary rounded-lg text-tertiary text-left p-4 shadow-lg"
        >
          <h1 className="font-semibold text-sm">{data.title}</h1>
          <p className="text-sm opacity-80">{data.location}</p>
          <p className="text-xs opacity-60">{data.dateAndLocation}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Education;
