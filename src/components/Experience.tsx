import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experienceData = [
    {
      companyName: "Baykar Technologies",
      title: "Stajyer",
      dateAndLocation: "Mart 2025 - Halen / Istanbul",
    },
    {
      companyName: "Bulut Yönetim",
      title: "AR-GE Teknikeri",
      dateAndLocation: "Haziran 2024 - 2025 / Istanbul",
    },
    {
      companyName: "APTI",
      title: "Elektronik Teknikeri",
      dateAndLocation: "Mart 2023 - 2024 / Istanbul",
    },
    {
      companyName: "İhlas Marmara Evleri",
      title: "Elektronik Teknikeri",
      dateAndLocation: "Haziran 2021 - 2023 / Istanbul",
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
