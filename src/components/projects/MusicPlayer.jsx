import { firaCode, poppins } from "@/fonts/fonts";
import React, { useRef } from "react";
import Icon from "../icon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MusicPlayer = ({ onDemoClick }) => {
  const container = useRef();
  
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: '#title',
        start: 'top center'
      }
    })
    .from('#title', {opacity: 0, x:300, duration: 1})
    .from('#image', {x: -300, opacity: 0, stagger: 0.2})
    .from('#description', {x:300, opacity: 0})
    .from('#tech', {x: 300, opacity: 0, stagger: 0.3})
    .from('#icon', {y: -30, opacity: 0, ease: 'bounce', stagger: 0.2})
    
  }, {scope: container})

  return (
    <div ref={container} className="flex flex-col">
      <h3 id="title" className={`${firaCode.className} text-xl text-teal-300 mb-4`}>
        React Native Music Player
      </h3>
      <div className="flex flex-col md:flex-row items-start md:gap-10">
        <div className="flex md:flex-col items-center gap-10 md:gap-3 ">
          <div className="flex gap-3 mb-3">
            <img id="image" src="/music-app1.png" alt="music-app" className="h-40" />
            <img id="image" src="/music-app2.png" alt="music-app" className="h-40" />
          </div>

          <div className="flex items-baseline gap-5 md:gap-10">
            <a id="icon"
              href="https://github.com/YePhone-Kyaw/music-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-teal-400 transition-colors duration-300"
            >
              <Icon  name="GitHub" />
            </a>
            <button id="icon"
              onClick={() => onDemoClick("music")}
              className="mb-2 text-neutral-300 hover:text-teal-400 transition-colors duration-300"
            >
              <Icon name="Demo" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div id="description" className=" bg-gray-500/20 p-6 rounded-lg">
            <p
              className={`${poppins.className} text-sm md:text-base max-w-full md:max-w-[600px] lg:max-w-[800px] mt-5 md:mt-0`}
            >
              I implemented a music application by myself as a capstone project,
              which is a cross-platform mobile application designed to provide a
              seamless music streaming experience. I built it by using React
              Native, and this project showcases my ability to develop intuitive
              interfaces, integrate the{" "}
              <a
                href="https://www.deezer.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-300 hover:text-teal-400 transition-colors duration-300"
              >
                Deezer
              </a>{" "}
              API to access a vast catalog of music data, enabling
              functionalities such as search, favorites, genre browsing, and
              music playback.
            </p>
          </div>
          <div className={`${poppins.className} hidden md:block`}>
            <ul className="flex md:flex gap-3 text-teal-400 md:text-xs lg:text-sm">
              <li id="tech" className="bg-gray-500/20 p-2 rounded-md">React Native</li>
              <li id="tech" className="bg-gray-500/20 p-2 rounded-md">Expo</li>
              <li id="tech" className="bg-gray-500/20 p-2 rounded-md">Expo Router</li>
              <li id="tech" className="bg-gray-500/20 p-2 rounded-md">TypeScript</li>
              <li id="tech" className="bg-gray-500/20 p-2 rounded-md">React Navigation</li>
              <li  id="tech"className="bg-gray-500/20 p-2 rounded-md">Axios</li>
            </ul>
          </div>
          <div>
          <div className={`${poppins.className} flex gap-10 md:hidden`}>
                  <ul className="flex flex-col gap-2 text-teal-400 text-xs">
                    <li id="tech" className="bg-gray-500/20 p-2 rounded-md">React Native</li>
                    <li id="tech" className="bg-gray-500/20 p-2 rounded-md">TypeScript</li>
                  </ul>
                  <ul className="flex flex-col gap-2 text-teal-400 text-xs">
                    <li id="tech" className="bg-gray-500/20 p-2 rounded-md">Expo</li>
                    <li id="tech" className="bg-gray-500/20 p-2 rounded-md">Expo Router</li>
                  </ul>
                  <ul className="flex flex-col gap-2 text-teal-400 text-xs">
                    <li id="tech" className="bg-gray-500/20 p-2 rounded-md">React Navigation</li>
                    <li id="tech" className="bg-gray-500/20 p-2 rounded-md">Axios</li>
                  </ul>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
