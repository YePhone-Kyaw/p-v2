"use client";
import Button from "@/components/Button";
import { firaCode, poppins } from "@/fonts/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { resume } from "../constants";
import TextCard from "@/components/TextCard";
import IconWebDevelopment from "@/components/icons/web";
import IconMobileDevelopment from "@/components/icons/mobile";
import IconDatabase from "@/components/icons/db";
import IconAPI from "@/components/icons/api";
import IconTesting from "@/components/icons/testing";

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
      className="flex flex-col min-h-screen w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32"
    >
      <div
        className={`title ${firaCode.className} flex items-center gap-5 mb-10`}
      >
        <h1 className="flex text-2xl text-teal-300">About Me</h1>
        <span className="bg-teal-300 w-[100px] h-[1px] "></span>
      </div>
      <div className=" flex">
        <div className="flex flex-col justify-between items-center py-2 px-5 w-1/2">
          <div className="flex flex-col items-center">
            <img
              src="/me.jpg"
              alt="profile"
              className="photo h-64 w-56 mb-10 rounded-lg"
            />

            <div className="flex items-center gap-3 justify-around w-[320px]">
              <Button href="#contact" boxStyle="outline">
                Get in touch
              </Button>
              <Button href={resume} boxStyle="outline">
                Download CV
              </Button>
            </div>
          </div>

          <div
            className={`box ${poppins.className} text-md flex flex-col mt-5 gap-5 lg:max-w-[700px] md:max-w-[600px] max-w-full`}
          >
            <p>
              Hello! My name is Ye Phone (Zayden) and I recently graduated from
              Southern Alberta Institute of Technology{" "}
              <a href="https://www.sait.ca/" className="text-teal-300">
                SAIT
              </a>
              . I'm passionate creating websites, softwares and mobile
              applications. Additionally, I'm also interested in OOP principles
              and problem-solving skills to develop efficient applications.
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
        </div>
        <div className="w-1/2 p-2 flex flex-col items-center space-y-5">
          <TextCard
            icon={
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-600/20">
                <IconWebDevelopment />
              </span>
            }
            title="Web Development"
          >
            Develop responsive high performance web applications using modern
            frameworks like React, Vue for frontend and Node.js, Laravel for
            backend
          </TextCard>
          <TextCard
            icon={
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-600/20">
                <IconMobileDevelopment />
              </span>
            }
            title="Mobile Application Development"
          >
            Build cross-platform mobile applications using React Native,
            delivering smooth and consistent user experiences on both iOS and
            Android
          </TextCard>
          <TextCard
            icon={
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-600/20">
                <IconDatabase />
              </span>
            }
            title="Database Management"
          >
            Design, implement, and optimize relational and NoSQL databases to ensure data integrity, security, and high performance for web and mobile applications.
          </TextCard>
          <TextCard
            icon={
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-600/20">
                <IconAPI />
              </span>
            }
            title="API Development & Integration"
          >
           Develop robust RESTful and GraphQL APIs, and seamlessly integrate third-party services to enable efficient communication between frontend and backend systems.
          </TextCard>
          <TextCard
            icon={
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-600/20">
                <IconTesting />
              </span>
            }
            title="Software Testing & Quality Assurance"
          >
           Apply automated and manual testing strategies to ensure software reliability, maintainability, and a smooth user experience across platforms.
          </TextCard>
        </div>
      </div>
    </section>
  );
};

export default About;
