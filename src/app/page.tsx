"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import Instagram from "./assets/icons/instagram.svg";
import Twitter from "./assets/icons/twitter.svg";
import LinkedIn from "./assets/icons/linkedin.svg";
import Github from "./assets/icons/github.svg";

import Location from "./assets/neradev.jpg";

import { Education, Experience } from "@/components";
import { client } from "./sanity";
import { type SanityDocument } from "next-sanity";
import { Projects } from "@/components/Projects";
import Link from "next/link";

// const POSTS_QUERY = `*[
//   _type == "proje"
//   && defined(slug.current)
// ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, tags, image, body}`;
const POSTS_QUERY = `*[_type == "proje"]{_id, title, slug, publishedAt, tags, cover_image}`;

const options = { next: { revalidate: 30 } };

export default function Home() {
  console.log("Home Page Rendered");
  const [posts, setPosts] = useState<SanityDocument[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const socialData = [
    {
      name: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/ta1nra/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      link: "https://twitter.com/nerawn_",
    },
    {
      name: "LinkedIn",
      icon: LinkedIn,
      link: "https://www.linkedin.com/in/ta1nra/",
    },
    {
      name: "Github",
      icon: Github,
      link: "https://github.com/nerawn/",
    },
  ];

  var words = [
    "IoT",
    "Elektronik",
    "Donanım",
    "PCB",
    "Arduino",
    "STM",
    "LoRa",
    "MQTT",
    "UART",
    "SPI",
    "RTOS",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await client.fetch<SanityDocument[]>(
        POSTS_QUERY,
        {},
        options
      );
      setPosts(posts);
    };
    getPosts();
  }, []);

  const [openPortfolio, setOpenPortfolio] = useState(false);

  const [selectedTab, setSelectedTab] = useState("EDU");

  return (
    <main className="md:p-8 p-2 md:h-[100vh] gap-4 flex flex-col selection:bg-none relative">
      <div className="flex md:flex-row flex-col w-full h-3/5 gap-4">
        <div className="md:w-3/5 w-full h-full flex flex-col gap-4">
          <div className="w-full h-full md:rounded-2xl rounded-lg bg-secondary md:p-10 p-2 flex items-center justify-between">
            <div className="w-1/4 md:w-1/3 h-full rounded-2xl  flex flex-col justify-between">
              <h1 className="md:text-5xl text-3xl text-tertiary font-black">
                Düşün,
              </h1>
              <h1 className="md:text-5xl text-3xl text-tertiary font-black">
                Tasarla,
              </h1>
              <h1 className="md:text-5xl text-3xl text-tertiary font-black">
                Geliştir
              </h1>
            </div>
            <h1
              id="animated-text"
              className={`md:text-[5rem] text-[2rem] font-black select-none text-secondary px-4 bg-gradient-to-br from-yellow to-orange`}
            >
              {words[currentIndex]}
            </h1>
          </div>
          <div className="w-full flex h-full gap-4 selection:text-tertiary selection:bg-none">
            <div className="w-1/3 bg-shy flex justify-center items-center shadow-inner md:rounded-2xl rounded-lg">
              <span className="font-extrabold md:text-xl text-sm text-center text-secondary ">
                <h1 className="md:text-6xl text-2xl">6+</h1>
                Yıllık Deneyim
              </span>
            </div>

            <div className="w-1/3 bg-green flex justify-center items-center shadow-inner md:rounded-2xl rounded-lg">
              <span className="font-extrabold md:text-xl text-sm text-center text-secondary">
                <h1 className="md:text-6xl text-2xl">40+</h1>
                Tamamlanmış Proje
              </span>
            </div>

            <div className="w-1/3 bg-blue flex justify-center items-center shadow-inner md:rounded-2xl rounded-lg">
              <span className="font-extrabold md:text-xl text-sm text-center text-secondary">
                <h1 className="md:text-6xl text-2xl">650+</h1>
                Çalışma Saati
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-col gap-4">
          <div className="w-full h-1/6 py-4 md:py-0 bg-secondary flex justify-center items-center shadow-2xl rounded-2xl">
            <h1 className="font-bold text-lg text-tertiary">Emirhan Irmak</h1>
          </div>
          <div className="flex w-full h-full gap-4 flex-col-reverse md:flex-row">
            <div className="md:w-1/2 w-full bg-secondary h-full flex flex-col shadow-2xl rounded-2xl p-2 gap-2">
              <div className="tabs">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="EDU"
                  onChange={(e) => setSelectedTab(e.target.value)}
                  checked={selectedTab === "EDU"}
                />
                <label htmlFor="html">Eğitim</label>
                <input
                  type="radio"
                  id="css"
                  name="fav_language"
                  value="EXP"
                  onChange={(e) => setSelectedTab(e.target.value)}
                  checked={selectedTab === "EXP"}
                />
                <label htmlFor="css">Deneyim</label>
              </div>
              {selectedTab === "EDU" ? <Education /> : <Experience />}
            </div>
            <div className="md:w-3/5 w-full h-full flex flex-col gap-4">
              <div className="w-full h-1/6 bg-secondary flex justify-center items-center shadow-2xl rounded-2xl py-4 md:py-0">
                <h1 className="font-extrabold text-tertiary">
                  Elektronik Teknikeri
                </h1>
              </div>
              <div className="w-full h-2/3 bg-secondary flex flex-col justify-center items-center shadow-2xl rounded-2xl">
                <h1 className="font-extrabold text-tertiary">
                  Esenyurt, İstanbul, Türkiye
                </h1>
                <Image
                  src={Location}
                  alt="HakanImage"
                  width={200}
                  height={200}
                  className="rounded-full mt-4 border-4 border-blue object-cover"
                />
              </div>
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
      <div className="h-2/5 flex flex-col md:flex-row gap-4">
        <Projects posts={posts} />
        <div
          // About
          className={`md:w-2/5 h-full  bg-secondary flex flex-col gap-4 justify-start items-start p-4 shadow-2xl rounded-2xl`}
        >
          <span className="flex justify-between w-full">
            <h1 className="font-extrabold text-3xl text-tertiary">Hakkımda</h1>
            <h1 className="font-light text-3xl text-tertiary opacity-50">CV</h1>
          </span>
          <p className="text-tertiary font-medium opacity-50">
            Elektronik ve robotik sistemler konusunda 6 yıllık deneyime sahip,
            donanım tasarımı alanında Geliştirici; IoT devrelerle yoğun olarak
            çalışmış, elektronik ve mekanik bilgisiyle sistem entegrasyonu
            sağlayabilen, web tabanlı çözümler geliştirebilen projelerde çözüm
            odaklı bir yaklaşım sergileyerek teknolojik projelerde etkin rol
            almaktayım.
          </p>
        </div>
      </div>
    </main>
  );
}
