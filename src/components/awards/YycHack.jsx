import { poppins } from '@/fonts/fonts'
import React from 'react'

const YycHack = () => {
  return (
    <div>
        
        <div className='bg-gray-500/20 p-6 rounded-lg backdrop-blur-sm'>
  <p className={`${poppins.className} max-w-full md:max-w-[600px] lg:max-w-[800px] mt-5 md:mt-0`}>
    Developed <span className="text-teal-300 font-medium">YYC Scan</span>, our <span className="underline decoration-teal-300/30">First Prize-winning solution</span> at YYC Hacks 2024, 
    empowering newcomers and tourists through:
  </p>

  <div className={`${poppins.className} flex flex-col bg-gray-500/10 p-4 rounded-md max-w-[500px] mt-5`}>
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

                    <a href='https://livewirecalgary.com/2024/02/05/yyc-hacks-2024-hackathon-winner-gives-newcomers-info-right-after-they-land-in-calgary/' target='_blank'>
        <img src="/yyc-hack.png" alt="yyc-hack" className='image h-60'/>
        </a>
    </div>
  )
}

export default YycHack