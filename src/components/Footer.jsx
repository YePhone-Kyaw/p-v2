import React from 'react'
import ZLogo from './ZLogo'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-4 border-t border-gray-700/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-center">
            <p className="text-gray-400 text-sm font-medium">
              © {currentYear} Ye Phone Kyaw. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-500 text-xs">
            <span>Designed & Developed by</span>
            <ZLogo size={16} className="mx-1" autoAnimate={true} />
            <span className="font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200">
              Zayden
            </span>
          </div>
          
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;