import { firaCode, poppins } from "@/fonts/fonts";
import React from "react";
import Icon from "../icon";

const ReactScheduler = ({ onDemoClick }) => {
  return (
    <div className="flex flex-col h-screen">
      <h3 className={`${firaCode.className} text-xl text-teal-300 mb-4`}>
        PowerShift React Scheduler 
      </h3>
      <div className="flex flex-col md:flex-row items-start md:gap-10">
        <div className="flex md:flex-col items-center gap-10 md:gap-3">
          <div className="flex gap-3">
            <img src="/logo.png" alt="scheduler" className=" w-40" />
          </div>
          <div className="flex items-baseline gap-5 md:gap-10">
            <a
              href="https://github.com/YePhone-Kyaw/React-Scheduler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-teal-400 transition-colors duration-300"
            >
              <Icon name="GitHub" />
            </a>
            <button
              onClick={() => onDemoClick('scheduler')}
              className="mb-2 text-neutral-300 hover:text-teal-400 transition-colors duration-300"
            >
              <Icon name="Demo" />
            </button>
          </div>
        </div>
        <div className=" bg-gray-500/20 p-6 rounded-lg">
          <p className={`${poppins.className} max-w-full md:max-w-[600px] lg:max-w-[800px] mt-5 md:mt-0`}>
            As a key contributor to the PowerShift React Scheduler capstone project, I helped develop an enterprise-grade workforce management solution for restaurant operations. This full-stack application features a modern Vite + React frontend paired with Firebase authentication and cloud storage, containerized with Docker for deployment flexibility. The system implements a dual-role architecture (employer/employee) with granular access controls, enabling managers to:
          </p>

          <div className={`${poppins.className} bg-gray-500/10 p-4 rounded-md mt-5`}>
            <h4 className="text-teal-300">Core Functionalities:</h4>
            <ul className="list-disc marker:text-teal-400 pl-5 mt-2 space-y-2">
              <li>Employee lifecycle management (onboarding, role updates, and offboarding)</li>
              <li>Visual shift scheduling via interactive calendar interface</li>
              <li>AI-driven automatic schedule generation with configurable parameters:
                <ul className="list-[circle] marker:text-blue-400 pl-5 mt-1">
                  <li>Planning horizon</li>
                  <li>Role-specific staffing requirements</li>
                  <li>Departmental allocations (Dining: Host/Server/Busser, Kitchen: Cook)</li>
                </ul>
              </li>
              <li>Real-time shift notifications and conflict resolution</li>
            </ul>
          </div>

          <div className={`${poppins.className} flex flex-col bg-gray-500/10 p-4 rounded-md max-w-[500px] mt-5`}>
            <h4 className="text-teal-300">Technical Implementation:</h4>
            <div className="text-sm flex gap-32 md:gap-40 mt-3">
              <ul className="list-disc marker:text-blue-500 pl-5">
                <li>Vite + React</li>
                <li>Firebase Auth</li>
                <li>Firebase Storage</li>
              </ul>
              <ul className="list-disc marker:text-green-500 pl-5">
                <li>Docker</li>
                <li>React Beautiful DnD</li>
                <li>Day.js</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ReactScheduler;
