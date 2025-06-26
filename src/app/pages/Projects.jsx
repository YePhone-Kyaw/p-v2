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
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ type, onClick }) => {
  const isNext = type === "next";
  return (
    <button
      className={`absolute top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-teal-600/50 text-teal-300 hover:bg-teal-400/60
                  ${isNext ? "right-0 md:-right-12" : "left-0 md:-left-12"}`} // Position arrows
      onClick={onClick}
      aria-label={isNext ? "Next Project" : "Previous Project"}
    >
      {isNext ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      )}
    </button>
  );
};

const Experience = () => {
  const container = useRef(null);
  const sliderRef = useRef(null);

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

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    nextArrow: <CustomArrow type="next" />,
    prevArrow: <CustomArrow type="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "100px",
        },
      },
    ],
  };

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
        <div className="relative mx-auto w-full max-w-4xl">
          <Slider ref={sliderRef} {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="p-4 project-card-wrapper">
                <ProjectCard {...project}>
                  <div className="flex w-[80px] mt-2 justify-center mx-auto">
                    <Button
                      href={project.url}
                      boxStyle="none"
                      className="flex items-center gap-2"
                      target="_blank"
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
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Experience;
