"use client";
import Button from "@/components/Button";
import { firaCode, poppins } from "@/fonts/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { cards, resume } from "../constants";
import TextCard from "@/components/TextCard";

const About = () => {
  const container = useRef(null);

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      gsap.from(".title, .photo, .buttons, .box", {
        opacity: 0,
        x: -300,
        duration: 2,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".title, .photo, .buttons, .box",
          start: "top center",
        },
      });
      gsap.from(".cards", {
        opacity: 0,
        x: 300,
        stagger: 0.3,
        duration: 2,
        scrollTrigger: {
          trigger: ".cards",
          start: "top center",
        },
      });
    },
    { scope: container },
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
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex flex-col justify-between items-center p-2 md:w-1/2 w-full">
            <div className="flex flex-col w-full items-center">
              <img src="/me.png" alt="profile" className="photo w-52 mb-10" />

              <div className="buttons flex flex-col sm:flex-row items-center gap-3 justify-around sm:w-[320px] w-full">
                <Button href="#contact" boxStyle="outline">
                  Get in touch
                </Button>
                <Button href={resume} boxStyle="outline" target="_blank">
                  Download CV
                </Button>
              </div>
            </div>
            <div
              className={`box ${poppins.className} text-center text-sm md:text-md flex flex-col mt-5 gap-5 w-full`}
            >
              <p>
                I’m a full-stack developer who specializes in building modern,
                responsive web and mobile applications with over a year of
                professional experience and 2+ years of hands-on experience. I
                love transforming ideas into seamless digital experiences,
                combining elegant design with robust functionality.
              </p>

              <p>
                My expertise spans web development, cross-platform mobile
                development, software testing, and security. I’m comfortable
                working across the entire stack and enjoy tackling complex
                technical challenges to deliver scalable, high-quality
                solutions.
              </p>
              <p>
                I thrive in collaborative environments, excel at
                problem-solving, and quickly adapt to new technologies and
                frameworks. My commitment to continuous learning and delivering
                impactful software drives me to create products that truly make
                a difference.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2 flex flex-col items-center space-y-5">
            {cards.map((card, i) => (
              <div className="cards" key={i}>
                <TextCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
