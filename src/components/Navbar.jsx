"use client";

import React, { useEffect, useRef, useState } from "react";
import { navLinks } from "../app/constants";
import { firaCode } from "@/fonts/fonts";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ZLogo from "./ZLogo";
import HamburgerIcon from "./HamburgerIcon";
import ChevronRightIcon from "./ChevronRightIcon";
import CloseIcon from "./CloseIcon";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [previousScroll, setPreviousScroll] = useState(0);
  const [visible, setVisible] = useState(true);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 400); // match animation duration
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      setIsOpen(true);
    }
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  const container = useRef();
  
  useGSAP(() => {
    gsap.timeline().from('#logo', {y: -30, opacity: 0})
    .from('#nav-links', {y: -30, opacity: 0, stagger: 0.3})
  }, {scope: container})

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setVisible(previousScroll > currentScroll || currentScroll < 10);
      setPreviousScroll(currentScroll);
    };
    
    window.addEventListener('scroll', handleScroll);

    return() => window.removeEventListener('scroll', handleScroll);
  }, [previousScroll]);

  return (
    <>
    <nav ref={container} className={`fixed top-0 left-0 right-0 transition-transform duration-300 z-50 ${visible ? 'translate-y-0' : '-translate-y-full'}  bg-opacity-50 shadow-md backdrop-filter backdrop-blur-md `}>
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div id='logo'>
              <Link to="top" smooth={true} duration={300} offset={0} className="flex items-center py-4 px-2 cursor-pointer">
                <ZLogo size={36} autoAnimate={true} />
              </Link>
            </div>
          </div>
          <div className={`${firaCode.className} hidden md:flex items-center space-x-1`}>
            <ul className=" flex space-x-4">
              {navLinks.map((item) => (
                <li id="nav-links" key={item.id}>
                  <Link
                    to={item.href.replace('#', '')}
                    smooth={true}
                    duration={300}
                    offset={0}
                    className="py-4 px-2 text-neutral-300 hover:text-teal-400 transition duration-300 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:hidden flex items-center">
            <HamburgerIcon open={isOpen} onClick={toggleMenu} />
          </div>
        </div>
      </div>
    </nav>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={toggleMenu}></div>
          <div
            id='mobile-nav'
            className={`fixed left-0 top-16 z-50 w-full h-[65vh] bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-purple-900/90 shadow-2xl rounded-b-3xl border-b border-white/20 px-6 pt-6 flex flex-col items-center ${isClosing ? 'animate-fold-up' : 'animate-slide-down'}`}
          >
            {/* Z Logo at the top center */}
            {/* <div className="flex justify-center items-center w-full mb-6 mt-2">
              <ZLogo size={40} autoAnimate={true} />
            </div> */}
            {/* Close button (no background/blur) */}
            {/* <button
              className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center transition"
              onClick={toggleMenu}
              aria-label="Close menu"
              type="button"
            >
              <HamburgerIcon open={true} className="w-10 h-10 text-white"/>
            </button> */}
            {/* Nav links */}
            <ul className="flex-1 w-full flex flex-col items-center justify-center space-y-4">
              {navLinks.map((item) => (
                <li id="mobile-links" key={item.id} className="w-full">
                  <Link
                    to={item.href.replace("#", "")}
                    smooth={true}
                    duration={300}
                    offset={0}
                    className="group w-full text-lg font-semibold text-neutral-100 rounded-xl px-4 py-3 text-center hover:bg-white/10 hover:text-teal-400 transition-all duration-200 shadow-sm backdrop-blur-md flex items-center justify-between"
                    onClick={handleLinkClick}
                  >
                    <span className="mx-auto">{item.name}</span>
                    
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
    
  );
};

export default Navbar;
