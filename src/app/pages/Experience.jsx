"use client";

import { firaCode, poppins } from "@/fonts/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Experience = () => {
  const container = useRef(null);

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      gsap.from(".title, .experience-card", {
        opacity: 0,
        x: 300,
        duration: 1,
        scrollTrigger: {
          trigger: ".title, .experience-card",
          start: "top center",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      id="experience"
      className="flex flex-col min-h-screen w-full items-center justify-center py-10 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32"
    >
      <div ref={container} className="w-full max-w-5xl">
        <div
          className={`title ${firaCode.className} flex items-center gap-5 mb-10`}
        >
          <h1 className="flex text-2xl text-teal-300">Experience</h1>
          <span className="bg-teal-300 w-[100px] h-[1px]"></span>
        </div>

        <div className="experience-card border border-teal-300/40 bg-white/5 backdrop-blur-md rounded-xl p-6 hover:scale-[1.02] hover:bg-white/10 hover:border-teal-400/60 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
            <div>
              <h2
                className={`${firaCode.className} text-xl font-bold text-teal-300`}
              >
                Full Stack Developer
              </h2>
              <h3
                className={`${poppins.className} text-lg text-neutral-200 mt-1`}
              >
                Bluejarvis Technology Inc.
              </h3>
            </div>
            <span
              className={`${firaCode.className} text-sm text-teal-400 whitespace-nowrap`}
            >
              Aug 2025 - Feb 2026
            </span>
          </div>

          <div className={`${poppins.className} mb-6`}>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex gap-3">
                <span className="text-teal-400 mt-1">▹</span>
                <span>
                  Built a rules-based recommendation engine integrating
                  third-party jobs APIs, Elasticsearch, and Google Gemini via
                  Genkit to surface AI-assisted structured results.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-400 mt-1">▹</span>
                <span>
                  Developed authenticated RESTful API endpoints and serverless
                  Cloud Functions integrating AWS SES, LinkedIn OAuth, and
                  Google Analytics Data API.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-400 mt-1">▹</span>
                <span>
                  Implemented role-based access control using Firebase
                  Authentication custom claims and global route middleware
                  enforcing admin-only access across all SPA surfaces.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-400 mt-1">▹</span>
                <span>
                  Built real-time analytics dashboards with ApexCharts featuring
                  date filtering, responsive layouts, and optimized backend
                  processing with caching strategies.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-400 mt-1">▹</span>
                <span>
                  Wrote comprehensive unit tests with Mocha, Chai, and Sinon,
                  and authored Playwright E2E tests with global setup/teardown
                  for production UI workflows.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-400 mt-1">▹</span>
                <span>
                  Contributed to four interconnected applications including{" "}
                  <a
                    href="https://ally.itphub.ca"
                    target="_blank"
                    className="text-teal-300 hover:text-teal-400 underline"
                  >
                    Ally User App
                  </a>{" "}
                  (public), Advisor App, Firebase Cloud Functions, and Admin
                  Portal.
                </span>
              </li>
            </ul>
          </div>

          <div className={`${poppins.className}`}>
            <h4 className="text-sm font-semibold text-teal-300 mb-3">
              Tech Stack:
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-white/5 backdrop-blur-md border border-teal-400/30 rounded-lg text-teal-300 text-xs hover:bg-white/10 hover:border-teal-400/50 transition-all duration-200">
                Vue.js
              </span>
              <span className="px-3 py-1.5 bg-white/5 backdrop-blur-md border border-teal-400/30 rounded-lg text-teal-300 text-xs hover:bg-white/10 hover:border-teal-400/50 transition-all duration-200">
                TypeScript
              </span>
              <span className="px-3 py-1.5 bg-white/5 backdrop-blur-md border border-teal-400/30 rounded-lg text-teal-300 text-xs hover:bg-white/10 hover:border-teal-400/50 transition-all duration-200">
                Firebase
              </span>
              <span className="px-3 py-1.5 bg-white/5 backdrop-blur-md border border-teal-400/30 rounded-lg text-teal-300 text-xs hover:bg-white/10 hover:border-teal-400/50 transition-all duration-200">
                Cloud Functions
              </span>
              <span className="px-3 py-1.5 bg-white/5 backdrop-blur-md border border-teal-400/30 rounded-lg text-teal-300 text-xs hover:bg-white/10 hover:border-teal-400/50 transition-all duration-200">
                Firestore
              </span>
              <span className="px-3 py-1.5 bg-white/5 backdrop-blur-md border border-teal-400/30 rounded-lg text-teal-300 text-xs hover:bg-white/10 hover:border-teal-400/50 transition-all duration-200">
                Docker
              </span>
              <span className="px-3 py-1.5 bg-white/5 backdrop-blur-md border border-teal-400/30 rounded-lg text-teal-300 text-xs hover:bg-white/10 hover:border-teal-400/50 transition-all duration-200">
                AWS SES
              </span>
              <span className="px-3 py-1.5 bg-white/5 backdrop-blur-md border border-teal-400/30 rounded-lg text-teal-300 text-xs hover:bg-white/10 hover:border-teal-400/50 transition-all duration-200">
                Node.js
              </span>
              <span className="px-3 py-1.5 bg-white/5 backdrop-blur-md border border-teal-400/30 rounded-lg text-teal-300 text-xs hover:bg-white/10 hover:border-teal-400/50 transition-all duration-200">
                REST APIs
              </span>
              <span className="px-3 py-1.5 bg-white/5 backdrop-blur-md border border-teal-400/30 rounded-lg text-teal-300 text-xs hover:bg-white/10 hover:border-teal-400/50 transition-all duration-200">
                Elasticsearch
              </span>
              <span className="px-3 py-1.5 bg-white/5 backdrop-blur-md border border-teal-400/30 rounded-lg text-teal-300 text-xs hover:bg-white/10 hover:border-teal-400/50 transition-all duration-200">
                Genkit
              </span>
              <span className="px-3 py-1.5 bg-white/5 backdrop-blur-md border border-teal-400/30 rounded-lg text-teal-300 text-xs hover:bg-white/10 hover:border-teal-400/50 transition-all duration-200">
                ApexCharts
              </span>
              <span className="px-3 py-1.5 bg-white/5 backdrop-blur-md border border-teal-400/30 rounded-lg text-teal-300 text-xs hover:bg-white/10 hover:border-teal-400/50 transition-all duration-200">
                Playwright
              </span>
              <span className="px-3 py-1.5 bg-white/5 backdrop-blur-md border border-teal-400/30 rounded-lg text-teal-300 text-xs hover:bg-white/10 hover:border-teal-400/50 transition-all duration-200">
                Mocha
              </span>
              <span className="px-3 py-1.5 bg-white/5 backdrop-blur-md border border-teal-400/30 rounded-lg text-teal-300 text-xs hover:bg-white/10 hover:border-teal-400/50 transition-all duration-200">
                Chai
              </span>
              <span className="px-3 py-1.5 bg-white/5 backdrop-blur-md border border-teal-400/30 rounded-lg text-teal-300 text-xs hover:bg-white/10 hover:border-teal-400/50 transition-all duration-200">
                Sinon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
