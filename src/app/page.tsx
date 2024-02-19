"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import Instagram from "./assets/icons/instagram.svg";
import Twitter from "./assets/icons/twitter.svg";
import LinkedIn from "./assets/icons/linkedin.svg";
import Github from "./assets/icons/github.svg";
import Location from "./assets/icons/gummy-location.svg";

import { motion } from "framer-motion";
import Link from "next/link";
import { Education, Experience } from "@/components";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const socialData = [
    {
      name: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/celikdev/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      link: "https://twitter.com/celikdev0",
    },
    {
      name: "LinkedIn",
      icon: LinkedIn,
      link: "https://www.linkedin.com/in/celikdev/",
    },
    {
      name: "Github",
      icon: Github,
      link: "https://github.com/celikdev/",
    },
  ];

  var words = ["IoT", "Electronics", "Javascript", "React", "React Native"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [openPortfolio, setOpenPortfolio] = useState(false);

  const [selectedTab, setSelectedTab] = useState("EDU");

  return (
    <main className="p-8 h-[100vh] gap-4 flex flex-col selection:bg-none relative">
      <div className="flex w-full h-3/5 gap-4">
        <div className="w-3/5 h-full flex flex-col gap-4">
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className="w-full h-full rounded-2xl bg-secondary p-10 flex items-center"
          >
            <div className="w-1/3 h-full rounded-2xl  flex flex-col justify-between">
              <h1 className="text-5xl text-tertiary font-black">Think,</h1>
              <h1 className="text-5xl text-tertiary font-black">Design,</h1>
              <h1 className="text-5xl text-tertiary font-black">Develop</h1>
            </div>
            <motion.h1
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              id="animated-text"
              className={`text-[5rem] font-black select-none text-secondary px-4 bg-gradient-to-br from-yellow to-orange`}
            >
              {words[currentIndex]}
            </motion.h1>
          </motion.div>
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="w-full flex h-full gap-4 selection:text-tertiary selection:bg-none"
          >
            <div className="w-1/3 bg-shy flex justify-center items-center shadow-inner rounded-2xl">
              <span className="font-extrabold text-xl text-center text-secondary ">
                <h1 className="text-6xl">3+</h1>
                Years Experience
              </span>
            </div>

            <div className="w-1/3 bg-green flex justify-center items-center shadow-inner rounded-2xl">
              <span className="font-extrabold text-xl text-center text-secondary">
                <h1 className="text-6xl">40+</h1>
                Handled Project
              </span>
            </div>

            <div className="w-1/3 bg-blue flex justify-center items-center shadow-inner rounded-2xl">
              <span className="font-extrabold text-xl text-center text-secondary">
                <h1 className="text-6xl">650+</h1>
                GitHub Commits
              </span>
            </div>
          </motion.div>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className="w-full h-1/6 bg-secondary flex justify-center items-center shadow-2xl rounded-2xl"
          >
            <h1 className="font-bold text-lg text-tertiary">Hakan Çelik</h1>
          </motion.div>
          <div className="flex w-full h-full gap-4">
            <div className="w-1/2 bg-secondary h-full flex flex-col shadow-2xl rounded-2xl p-2 gap-2">
              <div className="tabs">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="EDU"
                  onChange={(e) => setSelectedTab(e.target.value)}
                  checked={selectedTab === "EDU"}
                />
                <label htmlFor="html">Education</label>
                <input
                  type="radio"
                  id="css"
                  name="fav_language"
                  value="EXP"
                  onChange={(e) => setSelectedTab(e.target.value)}
                  checked={selectedTab === "EXP"}
                />
                <label htmlFor="css">Experience</label>
              </div>
              {selectedTab === "EDU" ? <Education /> : <Experience />}
            </div>
            <div className="w-3/5 h-full flex flex-col gap-4">
              <div className="w-full h-1/6 bg-secondary flex justify-center items-center shadow-2xl rounded-2xl">
                <h1 className="font-extrabold text-tertiary">
                  Full Stack Developer
                </h1>
              </div>
              <motion.div
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                className="w-full h-2/3 bg-secondary flex flex-col justify-center items-center shadow-2xl rounded-2xl"
              >
                <h1 className="font-extrabold text-tertiary">
                  Based In Istanbul
                </h1>
                <Image
                  src={Location}
                  alt="HakanImage"
                  width={200}
                  height={200}
                />
              </motion.div>
              <div className="w-full h-1/4 bg-secondary flex justify-around items-center shadow-2xl rounded-2xl">
                {socialData.map((social, index) => (
                  <a
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-all hover:scale-105 w-20 h-20 flex justify-center items-center"
                    href={social.link}
                  >
                    <Image
                      alt="ICON"
                      src={social.icon}
                      width={50}
                      height={50}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-2/5 flex gap-4">
        <motion.div
          // Portfolio
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          className={`${
            openPortfolio ? "w-3/5" : "w-3/5"
          } h-full bg-secondary flex flex-col gap-4 justify-start items-start p-10 shadow-2xl rounded-2xl`}
        >
          <span className="flex justify-between w-full">
            <h1 className="font-extrabold text-3xl text-tertiary">
              Portofolio
            </h1>
            <button
              onClick={() => setOpenPortfolio(true)}
              className=" font-light hover:text-white hover:opacity-100  transition-all duration-300 text-3xl text-tertiary opacity-50"
            >
              See All
            </button>
          </span>
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="text-[5rem] font-black text-secondary select-none hover: px-10 bg-gradient-to-tl from-yellow via-orange via-20% to-shy">
              Coming Soon
            </h1>
          </div>
        </motion.div>
        <motion.div
          // About
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          className={`w-2/5 h-full  bg-secondary flex flex-col gap-4 justify-start items-start p-10 shadow-2xl rounded-2xl`}
        >
          <span className="flex justify-between w-full">
            <h1 className="font-extrabold text-3xl text-tertiary">About</h1>
            <h1 className="font-light text-3xl text-tertiary opacity-50">
              Resume
            </h1>
          </span>
          <p className="text-tertiary font-medium opacity-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
            nunc placerat, placerat turpis blandit, mattis nunc. Nullam
            condimentum et dui in iaculis. Ut et aliquet turpis. Aliquam odio
            ante, gravida iaculis ligula sed, posuere gravida metus. Quisque leo
            est, convallis a justo id, molestie iaculis lorem. Vestibulum vel
            pharetra mi. Quisque eu ultricies erat.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
