"use client";

import { firaCode, poppins } from "@/fonts/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const About = () => {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger)

  useGSAP(
    () => {
      gsap.from(".title, .photo", {
        opacity: 0,
        x: 300,
        duration: 2,
        scrollTrigger: {
          trigger: '.title, .photo',
          start: 'top center',
        },
      });
      gsap.from(".box", {
        x: -300,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".box",
          start: 'top center',
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      id="about"
      className="flex flex-col min-h-screen w-full items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32"
    >
      <div ref={container} className="w-full max-w-5xl">
        <div
          className={`title ${firaCode.className} flex items-center gap-5 mb-10`}
        >
          <h1 className="flex text-2xl text-teal-300">About Me</h1>
          <span className="bg-teal-300 w-[100px] h-[1px] "></span>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-start items-center">
          <img
            src="/me.jpg"
            alt="profile"
            className="photo h-64 w-56 mb-10 rounded-lg md:hidden"
          />

          <div
            className={`box ${poppins.className} text-md flex flex-col gap-5 lg:max-w-[700px] md:max-w-[600px] max-w-full`}
          >
            <p>
              Hello! My name is Ye Phone (George) and I recently graduated from
              Southern Alberta Institute of Technology{" "}
              <a href="https://www.sait.ca/" className="text-teal-300">
                SAIT
              </a>
              . I'm passionate creating websites, softwares and mobile
              applications. Additionally, I'm also interested in OOP principles
              and problem-solving skills to develop efficient applications. My
              journey in Software Development has started in 2021.
            </p>

            <p>
              As a recent graduate with software development from SAIT, I
              specialized in Web development, cross-platform mobile development,
              software testing and security.
            </p>
            <p>
              My strengths lie in problem-solving, collaborative teamwork, and
              quickly adapting to new technologies.
            </p>
          </div>
          <img
            src="/me.jpg"
            alt="profile"
            className="photo md:ml-10 mt-0 lg:ml-20 h-64 w-56 rounded-lg hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
