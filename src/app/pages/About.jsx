"use client";
import Button from "@/components/Button";
import { firaCode, poppins } from "@/fonts/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { resume } from "../constants";
import AboutTextCard from "./components/AboutTextCard";

const About = () => {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      gsap.from(".title, .photo", {
        opacity: 0,
        x: 300,
        duration: 2,
        scrollTrigger: {
          trigger: ".title, .photo",
          start: "top center",
        },
      });
      gsap.from(".box", {
        x: -300,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".box",
          start: "top center",
        },
      });
    },
    { scope: container }
  );

  return (
    // <section
    //   id="about"
    //   className="flex flex-col h-screen w-full items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32"
    // >
    //   <div ref={container} className="w-full max-w-5xl">
    //     <div
    //       className={`title ${firaCode.className} flex items-center gap-5 mb-10`}
    //     >
    //       <h1 className="flex text-2xl text-teal-300">About Me</h1>
    //       <span className="bg-teal-300 w-[100px] h-[1px] "></span>
    //     </div>
    //     <div className="flex flex-col md:flex-row justify-between md:items-start items-center">
    //       <img
    //         src="/me.jpg"
    //         alt="profile"
    //         className="photo h-64 w-56 mb-10 rounded-lg md:hidden"
    //       />

    //       <div
    //         className={`box ${poppins.className} text-md flex flex-col gap-5 lg:max-w-[700px] md:max-w-[600px] max-w-full`}
    //       >
    //         <p>
    //           Hello! My name is Ye Phone (Zayden) and I recently graduated from
    //           Southern Alberta Institute of Technology{" "}
    //           <a href="https://www.sait.ca/" className="text-teal-300">
    //             SAIT
    //           </a>
    //           . I'm passionate creating websites, softwares and mobile
    //           applications. Additionally, I'm also interested in OOP principles
    //           and problem-solving skills to develop efficient applications.
    //         </p>

    //         <p>
    //           As a recent graduate with software development from SAIT, I
    //           specialized in Web development, cross-platform mobile development,
    //           software testing and security.
    //         </p>
    //         <p>
    //           My strengths lie in problem-solving, collaborative teamwork, and
    //           quickly adapting to new technologies.
    //         </p>
    //       </div>
    //       <img
    //         src="/me.jpg"
    //         alt="profile"
    //         className="photo md:ml-10 mt-0 lg:ml-20 h-64 w-56 rounded-2xl hidden md:block "
    //       />
    //     </div>
    //   </div>
    // </section>
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
      <div className="flex flex-col items-center md:flex-row">
        <div className="flex flex-col justify-between items-center p-2 md:w-1/2 w-full">

          <div className="flex flex-col w-full items-center">
            <img
              src="/me.jpg"
              alt="profile"
              className="photo h-72 w-64 mb-10 rounded-lg opacity-90"
            />

            <div className="flex flex-col md:flex-row items-center gap-3 justify-around md:w-[320px] w-full">
              <Button href="#contact" boxStyle="outline">
                Get in touch
              </Button>
              <Button href={resume} boxStyle="outline">
                Download CV
              </Button>
            </div>
          </div>
          <div
            className={`box ${poppins.className} text-center text-sm md:text-md flex flex-col mt-5 gap-5 w-full`}
          >
            <p>
              I’m a full-stack developer who specializes in building modern, responsive web and mobile applications with more than 2 years of hands-on experience. I love transforming ideas into seamless digital experiences, combining elegant design with robust functionality.
            </p>

            <p>
              My expertise spans web development, cross-platform mobile development, software testing, and security. I’m comfortable working across the entire stack and enjoy tackling complex technical challenges to deliver scalable, high-quality solutions.
            </p>
            <p>
              I thrive in collaborative environments, excel at problem-solving, and quickly adapt to new technologies and frameworks. My commitment to continuous learning and delivering impactful software drives me to create products that truly make a difference.
            </p>
          </div>
        </div>
        <div className="w-1/2 p-2">
        <AboutTextCard />
        </div>   
      </div>
      </div>
    </section>
  );
};

export default About;
