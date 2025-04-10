'use client'

import React, { useRef } from "react";
import { socialMedia } from "../constants";
import Icon from "../../components/icon";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {

  const container = useRef();

  useGSAP(() => {
    gsap.from('.box', { opacity: 0, duration: 3 });
  }, {scope: container});

  return (
    <section id="top" ref={container} className="flex items-center justify-center min-h-screen px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
  <div className=" box w-full max-w-5xl">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl font-sans font-bold">Ye Phone Kyaw</h1>
          <h5 className="text-xl md:text-2xl text-teal-400">Software Developer</h5>
          <p className="text-lg">
            I'm a junior software developer based in Calgary, Alberta, Canada. I'm
            passionate about coding and problem-solving. Additionally, I'm eager to learn new technologies, sharpen and improve my data structure and algorithms skills. 
          </p>

          <div className="mt-4">
            <ul className="flex gap-5">
              {socialMedia.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    aria-label={item.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-teal-400 transition-colors duration-300"
                  >
                    <Icon name={item.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
