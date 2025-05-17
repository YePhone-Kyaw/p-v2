'use client'

import YycHack from "@/components/awards/YycHack";
import { firaCode } from "@/fonts/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Awards = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from('#achievements', {
      opacity: 0,
      x: 300,
      duration: 1,
      scrollTrigger: {
        trigger: '#achievements',
        start: 'top center',
      },
    })
  }, {scope: container})
  return (
    <section id="awards" className="flex flex-col min-h-screen w-full items-center justify-center py-10 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
      <div ref={container} className="w-full max-w-5xl">
        <div id="achievements" className={`${firaCode.className} flex items-center gap-5 mb-10`}>
          <h1 className="flex text-2xl text-teal-300">Achievements</h1>
          <span className="bg-teal-300 w-[100px] h-[1px]"></span>
        </div>
        <div>
            <YycHack />
        </div>
      </div>
    </section>
  );
};

export default Awards;
