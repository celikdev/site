"use client";

import Link from "next/link";
import { type SanityDocument } from "next-sanity";

export const Projects = (
  { posts }: { posts: SanityDocument[] | undefined } // setOpenPortfolio: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return (
    <div
      className={`md:w-3/5 h-full bg-secondary flex flex-col gap-4 justify-start items-start p-4 shadow-2xl rounded-2xl`}
    >
      <span className="flex justify-between w-full">
        <h1 className="font-extrabold text-3xl text-tertiary">Projeler</h1>
        {/* <button
          // onClick={() => setOpenPortfolio(true)}
          className=" font-light hover:text-white hover:opacity-100  transition-all duration-300 text-3xl text-tertiary opacity-50"
        >
          Tümünü Gör
        </button> */}
      </span>
      <div className="h-full w-full flex justify-center items-center ">
        <div className="h-full w-full flex flex-col md:flex-row gap-2 ">
          {posts?.map((post, index) => (
            <Link
              href={`/project/${post.slug.current}`}
              key={index}
              className="border-[1px] md:w-1/3 h-full flex flex-col items-start justify-between p-4 rounded-2xl text-white transition-all duration-300 shadow-2xl hover:shadow-primary/50"
            >
              <span className="flex w-full gap-1">
                {post?.tags &&
                  post.tags.map((tag: string, index: number) => (
                    <span className="text-xs font-medium bg-[#F0FFFF] text-primary px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
              </span>
              <h2 className="text-xl font-bold text-secondary dark:text-tertiary">
                {post.title}
              </h2>
              <div className="flex items-center w-full justify-between"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
