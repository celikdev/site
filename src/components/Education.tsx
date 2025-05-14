import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      title: "Elektronik Haberleşme - Önlisans",
      location: "İstanbul Üniversitesi - Cerrahpaşa",
      dateAndLocation: "2021 - 2023 / İstanbul",
    },
    {
      title: "Yangın Alarm ve Güvenlik Sistemleri - Elektronik",
      location: "İMMİB Erkan Avcı Mesleki ve Teknik Anadolu Lisesi",
      dateAndLocation: "2017 - 2021 / İstanbul",
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
