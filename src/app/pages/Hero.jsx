"use client";

import React, { Suspense, useRef, useEffect, useState } from "react";
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
import { Computer } from "@/components/3d-logos/Computer";
import { NodeJsLogo } from "@/components/3d-logos/NodeJsLogo";
import { DockerLogo } from "@/components/3d-logos/DockerLogo";
import { VueLogo } from "@/components/3d-logos/VueLogo";
import { MongoDBLogo } from "@/components/3d-logos/MongoDBLogo";
import { CSharpLogo } from "@/components/3d-logos/CSharpLogo";

const Hero = () => {
  const container = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth transition from loading screen
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      if (!isVisible) return;

      gsap
        .timeline()
        .from("#intro", { y: -50, opacity: 0, ease: "back", delay: 0.5 })
        .from("#name", { y: -50, opacity: 0, ease: "back" })
        .from("#text", { y: -50, opacity: 0, ease: "back" })
        .from("#hero", { y: -50, opacity: 0, ease: "back" })
        .from("#socials", { y: -50, stagger: 0.3, opacity: 0, ease: "bounce" });
    },
    { scope: container, dependencies: [isVisible] },
  );

  return (
    <section
      id="top"
      className={`flex items-center justify-center min-h-screen px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div ref={container} className="w-full max-w-5xl relative z-10">
        <div className="flex flex-col gap-3">
          <h5 id="intro" className="text-sm md:text-lg text-teal-400">
            Hi there, my name is{" "}
          </h5>
          <div className={`${firaCode.className}`}>
            <div
              id="name"
              className="flex items-end gap-5 font-sans font-bold mb-5"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl">
                Ye Phone Kyaw
              </h1>
              <h3 className="text-lg md:text-xl lg:text-2xl text-teal-400">Aka</h3>
              <h1 className="text-2xl md:text-4xl lg:text-5xl">Zayden</h1>
            </div>
            <div id="text">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  "I build Web Applications",
                  "I build Mobile Applications",
                ]}
                speed={2}
                className="text-animation text-xl md:text-2xl font-bold text-teal-400"
                repeat={Infinity}
              />
            </div>
          </div>

          <p id="hero" className={`${poppins.className} text-md md:text-lg`}>
            I craft robust web and mobile applications that blend elegant design
            with powerful functionality. With a strong foundation in modern
            frameworks and a love for solving complex problems, I turn ideas
            into seamless digital experiences. Let’s build something remarkable
            together!
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
            <PerspectiveCamera makeDefault position={[-3, 0, 30]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-3, 2, 20]} intensity={1} />
            <hemisphereLight intensity={1} />
            <spotLight
              position={[10, 15, 10]}
              angle={0.3}
              penumbra={1}
              intensity={2}
            />
            <group>
              <ReactLogo />
              <CSharpLogo />
              <VueLogo />
              <PythonLogo />
              <MongoDBLogo />
              <JavaLogo />
              {/* <Computer /> */}
              <NodeJsLogo />
              <DockerLogo />
            </group>
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
