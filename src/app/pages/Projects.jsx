"use client";

import ProjectCard from "@/components/ProjectCard";
import { firaCode } from "@/fonts/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { projects } from "../constants";
import Button from "@/components/Button";
import IconGitHub from "@/components/icons/github";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ type, onClick }) => {
  const isNext = type === "next";
  return (
    <button
      className={`arrows absolute top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-teal-600/50 text-teal-300 hover:bg-teal-400/60
                  ${isNext ? "right-0 md:-right-12" : "left-0 md:-left-12"}`}
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
      gsap.timeline({
        scrollTrigger: {
          trigger: '.title, .cards, .arrows',
          start: 'top center',
        }
      })
      .from('.title', {opacity: 0, x:300})
      .from('.cards', {opacity:0, y: 100, delay:0.5})
      .from('.arrows', {opacity:0, y: 100})
    },
    { scope: container }
  );

  const settings = {
    className: "center-mode-slider",
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
          centerMode: true,
          slidesToShow: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <section
      id="projects"
      className="flex flex-col min-h-screen w-full items-center justify-center py-10 px-4 md:px-16"
    >
      <div ref={container} className="w-full max-w-6xl">
        <div
          className={`title ${firaCode.className} flex items-center gap-5 mb-10`}
        >
          <h1 className="flex text-2xl text-teal-300">Projects</h1>
          <span className="bg-teal-300 w-[100px] h-[1px]"></span>
        </div>
        <div className="cards flex flex-col mx-auto w-full">
          <Slider ref={sliderRef} {...settings}>
            {projects.map((project) => (
              <div
                key={project.id}
                className="scale-[0.75] md:scale-[0.75] lg:scale-[1]"
              >
                <ProjectCard {...project}>
                  <div className="flex w-[80px] mt-2 justify-center mx-auto ">
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
