"use client";

import ProjectCard from "@/components/ProjectCard";
import MusicPlayer from "@/components/projects/MusicPlayer";
import ReactScheduler from "@/components/projects/ReactScheduler";
import { firaCode, poppins } from "@/fonts/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import { projects } from "../constants";
import Button from "@/components/Button";
import IconGitHub from "@/components/icons/github";
import IconExternal from "@/components/icons/external";

const Experience = () => {
  const [showVideo, setShowVideo] = useState(null);

  // const handleDemoClick = (project) => {
  //   setShowVideo(project);
  // };

  // const handleCloseVideo = () => {
  //   setShowVideo(null);
  // };

  const container = useRef(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      gsap.from(".title", {
        opacity: 0,
        x: 300,
        duration: 1,
        scrollTrigger: {
          trigger: ".title",
          start: "top center",
        },
      });
    },
    { scope: container }
  );

  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showVideo]);

  return (
    <section
      id="projects"
      className="flex flex-col min-h-screen w-full items-center justify-center py-10 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32"
    >
      <div ref={container} className="w-full max-w-5xl">
        <div
          className={`title ${firaCode.className} flex items-center gap-5 mb-10`}
        >
          <h1 className="flex text-2xl text-teal-300">Projects</h1>
          <span className="bg-teal-300 w-[100px] h-[1px]"></span>
        </div>
        <div className="flex gap-20 ">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project}>
              <div className="flex w-[80px] mt-2">
                <Button
                  href={project.url}
                  boxStyle="none"
                  className="flex items-center gap-2"
                  target='_blank'
                >
                  {project.linkIcon}
                </Button>
                <Button
                  href={project.githubUrl}
                  boxStyle="none"
                  className="flex items-center gap-2"
                  target="_blank"
                >
                  <IconGitHub />
                </Button>
              </div>
            </ProjectCard>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Experience;
