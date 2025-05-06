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
          <div className="flex gap-3 mb-3">
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
        <div className="flex flex-col gap-3">
        <div className=" bg-gray-500/20 p-6 rounded-lg">
          <p className={`${poppins.className} max-w-full md:max-w-[600px] lg:max-w-[800px] mt-5 md:mt-0`}>
            As a key contributor to the PowerShift React Scheduler capstone project, I helped develop an enterprise-grade workforce management solution for restaurant operations. This full-stack application features a modern Vite + React frontend paired with Firebase authentication and cloud storage, containerized with Docker for deployment flexibility. The system implements a dual-role architecture (employer/employee) with granular access controls, enabling managers to:
          </p>

          <div className={`${poppins.className} p-4 mt-5`}>
            <h4 className="text-teal-300">Core Functionalities:</h4>
            <ul className="list-disc marker:text-teal-400 pl-5 mt-2 space-y-2">
              <li>Employee lifecycle management (onboarding, role updates, and offboarding)</li>
              <li>Visual shift scheduling via interactive calendar interface</li>
              <li>Automatic schedule generation with configurable parameters:
                <ul className="list-[circle] marker:text-blue-400 pl-5 mt-1">
                  <li>Planning horizon</li>
                  <li>Role-specific staffing requirements</li>
                  <li>Departmental allocations (Dining: Host/Server/Busser, Kitchen: Cook)</li>
                </ul>
              </li>
              <li>Real-time shift notifications and conflict resolution</li>
            </ul>
          </div>
        </div>
        <div id='tech' className={`${poppins.className} hidden md:block`}>
                      <ul className="flex md:flex gap-3 text-teal-400 md:text-xs lg:text-sm">
                        <li className="bg-gray-500/20 p-2 rounded-md">Vite + React</li>
                        <li className="bg-gray-500/20 p-2 rounded-md">React Beautiful DnD</li>
                        <li className="bg-gray-500/20 p-2 rounded-md">Firebase Auth</li>
                        <li className="bg-gray-500/20 p-2 rounded-md">Firebase Storage</li>
                        <li className="bg-gray-500/20 p-2 rounded-md">Docker</li>
                        <li className="bg-gray-500/20 p-2 rounded-md">Day.js</li>
                      </ul>
                    </div>
                    <div>
                    <div className={`${poppins.className} flex gap-10 md:hidden`}>
                            <ul className="flex flex-col gap-2 text-teal-400 text-xs">
                              <li className="bg-gray-500/20 p-2 rounded-md">Vite + React</li>
                              <li className="bg-gray-500/20 p-2 rounded-md">React Beautiful DnD</li>
                            </ul>
                            <ul className="flex flex-col gap-2 text-teal-400 text-xs">
                              <li className="bg-gray-500/20 p-2 rounded-md">Firebase Auth</li>
                              <li className="bg-gray-500/20 p-2 rounded-md">Firebase Storage</li>
                            </ul>
                            <ul className="flex flex-col gap-2 text-teal-400 text-xs">
                              <li className="bg-gray-500/20 p-2 rounded-md">Docker</li>
                              <li className="bg-gray-500/20 p-2 rounded-md">Day.js</li>
                            </ul>
                          </div>
                    </div>
        </div>
        
      </div>
    </div>
  );
};


export default ReactScheduler;
