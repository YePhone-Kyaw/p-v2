import { firaCode, poppins } from '@/fonts/fonts'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const YycHack = () => {
  const tweenRef = useRef();

  useGSAP(() => {
    tweenRef.current = gsap.to('#img', {
      x:4,
      y:4, 
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut"})
  }, {dependencies: []});

  const handleMouseEnter = () => {
    tweenRef.current && tweenRef.current.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current && tweenRef.current.resume();
  };

  return (
    <div className='md:flex justify-around items-center gap-3'>
        
        <div className='bg-gray-500/20 p-6 rounded-lg backdrop-blur-sm max-w-full md:max-w-[300px] lg:max-w-[600px] '>
  <p className={`${poppins.className}mt-5 md:mt-0`}>
    Developed <span className="text-teal-300 font-medium">YYC Scan</span>, our First Prize-winning solution at YYC Hacks 2024, 
    empowering newcomers and tourists through:
  </p>

  <div className={`${poppins.className} flex flex-col p-4 rounded-md max-w-[500px] mt-5`}>
    <h4 className="text-teal-300 font-semibold">Core Innovations:</h4>
    <div className="text-sm flex gap-20 md:gap-32 mt-3">
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
    <span className="font-medium text-teal-300">AI Chatbot:</span> Implemented conversational AI to answer Calgary-related queries 
    (e.g., "Where to get ID cards?", "Best local events"), enhancing accessibility through natural language interaction.
  </div>
</div>

<div className="md:flex flex-col items-center gap-3 hidden">

  <a
    href="https://livewirecalgary.com/2024/02/05/yyc-hacks-2024-hackathon-winner-gives-newcomers-info-right-after-they-land-in-calgary/"
    target="_blank"
    className={`${poppins.className} text-white hover:text-teal-300 transition`}
  >
      <div className="relative w-fit">
    <div className="absolute top-4 left-4 w-full h-full rounded-xl border-2 border-teal-400 z-0"></div>
    <img 
      id='img'
      src="/yyc-hack.png"
      alt="yyc-hack"
      className="relative z-10 rounded-xl md:w-[600px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  </div>
  </a>
</div>

    </div>
  )
}

export default YycHack