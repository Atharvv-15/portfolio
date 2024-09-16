"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs2";
import Link from "next/link";

export function TabsDemo() {
  const projects = [
    {
      title: "Chatbuddy",
      value: "about",
      description: "A performant and reliable realtime-chat-app built with NextJS.",
      tech: "NextJS, TailwindCSS, MongoDB, Socket.io",
      image: "/chatbuddy.png",
      link: "https://chatbuddy-nine.vercel.app/",
    },
    {
      title: "CaseCobra",
      value: "services",
      description: "E-Commerce Store for Custom Phone Cases",
      tech: "NextJS, TailwindCSS, MongoDB, Socket.io",
      image: "/casecobra.png",
      link: "https://casecobra-dev-three.vercel.app/",
    },
    {
      title: "AI Companion",
      value: "playground",
      description: "Description for Project 3",
      tech: "NextJS, TailwindCSS, MongoDB, Socket.io",
      image: "/ai-companion.png",
      link: "https://ai-companion-seven.vercel.app/",
    },
  ];

  const tabs = projects.map((project) => ({
    title: project.title,
    value: project.value,
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl 
      md:text-4xl font-bold text-white bg-slate-800 bg-opacity-100">
        <Link href={project.link}><h3 className="text-2xl md:text-2xl 
        font-thin text-yellow-400 mb-2">{project.title}</h3></Link>
        {/* <img src={project.image} alt={project.title} className="w-3/4 h-auto mb-4 rounded-xl mx-auto" /> */}
        <div className="flex flex-col justify-between gap-10">
        <p className="text-lg mb-4">{project.description}</p>
        <p className="text-base mb-4">{project.tech}</p>
        </div>
      </div>
    ),
  }));

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col 
    max-w-5xl mx-auto w-full  items-start justify-start my-40 text-white">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div>
      {/* <Image
      src="/IMG_6031.jpg"
      alt="dummy image"
      width="500"
      height="500"
      className="object-cover object-left-top h-[60%]  md:h-[90%]
       absolute -bottom-10 inset-x-0 w-[80%] rounded-xl mx-auto text-white"
    /> */}

    

    </div>
  );
};
