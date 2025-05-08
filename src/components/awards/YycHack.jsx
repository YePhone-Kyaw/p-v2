import { firaCode, poppins } from "@/fonts/fonts";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const YycHack = () => {
  const tweenRef = useRef();
  const container = useRef();

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: '#description',
        start: 'top center',
      }
    })
    .from('#description', {x:-300, opacity: 0, delay:1})
    .from('#img', {x:300, opacity: 0})
    .from('#tech', {x: 300, opacity:0, stagger: 0.3})
    .from('#icon', {y:-30, opacity:0, stagger: 0.2, ease: 'bounce'})
  }, {scope: container})

  useGSAP(() => {
    tweenRef.current = gsap.to("#yyc", {
      x: 4,
      y: 4,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });
  }, { dependencies: [] });

  const handleMouseEnter = () => {
    tweenRef.current && tweenRef.current.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current && tweenRef.current.resume();
  };

  return (
    <div ref={container} className="flex flex-col md:flex-row items-center gap-8 overflow-x-hidden w-full">
      <div className="md:w-[350px] max-w-[400px] order-first md:order-last">
        <a
          href="https://livewirecalgary.com/2024/02/05/yyc-hacks-2024-hackathon-winner-gives-newcomers-info-right-after-they-land-in-calgary/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div id="img" className="relative md:w-[300px] lg:w-[350px] ">
              <div className="absolute top-4 left-4 w-full h-full rounded-xl border-2 border-teal-400 z-0"></div>
              <img
              id="yyc"
                src="/yyc-hack.png"
                alt="yyc-hack"
                className="relative z-10 rounded-xl"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
        </a>
      </div>

      <div className="flex-1 w-full max-w-full md:max-w-[500px] lg:max-w-[600px]">
        <div id="description" className="bg-gray-500/20 p-6 rounded-lg backdrop-blur-sm w-full">
          <p className={`${poppins.className} mt-5 md:mt-0`}>
            Developed{" "}
            <span className="text-teal-300 font-medium">YYC Scan</span>, our
            First Prize-winning solution at YYC Hacks 2024, empowering newcomers
            and tourists through:
          </p>

          <div className={`${poppins.className} flex flex-col p-2 rounded-md max-w-[500px] mt-5`}>
            <h4 className="text-teal-300 font-semibold">Core Innovations:</h4>
            <div className="text-sm flex gap-10 md:gap-20 mt-3">
              <ul className="list-disc marker:text-blue-500 pl-5 space-y-2">
                <li>QR-Powered Localization</li>
                <li>AI-Powered Chat Assistance</li>
                <li>Rewards-Based Ecosystem</li>
              </ul>
              <ul className="list-disc marker:text-green-500 pl-5 space-y-2">
                <li>Cross-Platform Accessibility</li>
                <li>Real-Time Event Discovery</li>
                <li>Web Extension Integration</li>
              </ul>
            </div>
          </div>

          <div className={`${poppins.className} mt-6 text-sm text-gray-300`}>
            <span className="font-medium text-teal-300">AI Chatbot:</span>{" "}
            Implemented conversational AI to answer Calgary-related queries
            (e.g., "Where to get ID cards?", "Best local events"), enhancing
            accessibility through natural language interaction.
          </div>
        </div>

        <div className={`${poppins.className} hidden md:block mt-4`}>
          <ul className="flex flex-wrap gap-3 text-teal-400 md:text-xs lg:text-sm">
            <li id="tech" className="bg-gray-500/20 p-2 rounded-md">HTML</li>
            <li id="tech" className="bg-gray-500/20 p-2 rounded-md">CSS</li>
            <li id="tech" className="bg-gray-500/20 p-2 rounded-md">JavaScript</li>
            <li id="tech" className="bg-gray-500/20 p-2 rounded-md">Python</li>
            <li id="tech" className="bg-gray-500/20 p-2 rounded-md">C#</li>
            <li id="tech" className="bg-gray-500/20 p-2 rounded-md">Flutter</li>
            <li id="tech" className="bg-gray-500/20 p-2 rounded-md">JSON</li>
            <li id="tech" className="bg-gray-500/20 p-2 rounded-md">OpenAI</li>
            <li id="tech" className="bg-gray-500/20 p-2 rounded-md">Figma</li>
          </ul>
        </div>

        <div className={`${poppins.className} flex gap-10 md:hidden mt-4`}>
          <ul className="flex flex-col gap-2 text-teal-400 text-xs">
            <li id="tech" className="bg-gray-500/20 p-2 rounded-md">HTML</li>
            <li id="tech" className="bg-gray-500/20 p-2 rounded-md">CSS</li>
            <li  id="tech"className="bg-gray-500/20 p-2 rounded-md">JavaScript</li>
          </ul>
          <ul className="flex flex-col gap-2 text-teal-400 text-xs">
            <li id="tech" className="bg-gray-500/20 p-2 rounded-md">Python</li>
            <li id="tech" className="bg-gray-500/20 p-2 rounded-md">C#</li>
            <li id="tech" className="bg-gray-500/20 p-2 rounded-md">Flutter</li>
          </ul>
          <ul className="flex flex-col gap-2 text-teal-400 text-xs">
            <li id="tech" className="bg-gray-500/20 p-2 rounded-md">JSON</li>
            <li id="tech" className="bg-gray-500/20 p-2 rounded-md">OpenAI</li>
            <li id="tech" className="bg-gray-500/20 p-2 rounded-md">Figma</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default YycHack;
