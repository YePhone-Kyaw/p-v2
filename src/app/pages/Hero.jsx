"use client";

import React, { Suspense, useRef } from "react";
import { calculateSizes, socialMedia } from "../constants";
import Icon from "../../components/icon";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TypeAnimation } from "react-type-animation";
import { firaCode, poppins } from "@/fonts/fonts";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ReactLogo } from "@/components/3d-logos/ReactLogo";
import CanvasLoader from "@/components/CanvasLoader";
import { PythonLogo } from "@/components/3d-logos/PythonLogo";
import { JavaLogo } from "@/components/3d-logos/JavaLogo";

const Hero = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap
        .timeline()
        .from("#intro", { y: -50, opacity: 0, ease: "back", delay: 1.5 })
        .from("#name", { y: -50, opacity: 0, ease: "back" })
        .from("#text", { y: -50, opacity: 0, ease: "back" })
        .from("#hero", { y: -50, opacity: 0, ease: "back" })
        .from("#socials", { y: -50, stagger: 0.3, opacity: 0, ease: "bounce" });
    },
    { scope: container }
  );

  return (
    <section
      id="top"
      className="flex items-center justify-center min-h-screen px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 "
    >
      <div ref={container} className="w-full max-w-5xl relative z-10">
        <div className="flex flex-col gap-3">
          <h5 id="intro" className="text-sm md:text-lg text-teal-400">
            Hi, my name is{" "}
          </h5>
          <div className={`${firaCode.className}`}>
            <h1
              id="name"
              className="text-5xl md:text-6xl font-sans font-bold mb-5"
            >
              Ye Phone Kyaw
            </h1>
            <div id="text">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  "I build Web Applications",
                  50,
                  "I build Mobile Applications",
                  50,
                ]}
                speed={30}
                className="text-animation text-xl md:text-2xl font-bold text-teal-400"
                repeat={Infinity}
              />
            </div>
          </div>

          <p id="hero" className={`${poppins.className} md:text-lg`}>
            I'm a junior software developer based in Calgary, Alberta, Canada.
            I'm passionate about coding and problem-solving. Additionally, I'm
            eager to learn new technologies, sharpen and improve my data
            structure and algorithms skills.
          </p>

          <div className="mt-4">
            <ul className="flex gap-5">
              {socialMedia.map((item) => (
                <li id="socials" key={item.id}>
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
      <div className="w-full h-full absolute inset-0 pointer-events-none">
        <Canvas>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <ambientLight intensity={0.3} />
            <directionalLight position={[-3, 2, 15]} intensity={1} />
            <spotLight
              position={[10, 15, 10]}
              angle={0.3}
              penumbra={1}
              intensity={2}
            />
            <group>
              <ReactLogo />
              <PythonLogo />
              <JavaLogo />
            </group>
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
