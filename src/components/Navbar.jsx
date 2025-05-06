"use client";

import React, { useEffect, useRef, useState } from "react";
import { navLinks } from "../app/constants";
import { firaCode } from "@/fonts/fonts";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [previousScroll, setPreviousScroll] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const handleLinkClick = () => {
    setIsOpen(false);
  }

  const container = useRef();
  
  useGSAP(() => {
    gsap.timeline().from('#logo', {y: -30, opacity: 0})
    .from('#nav-links', {y: -30, opacity: 0, stagger: 0.3})
  }, {scope: container})

  // useGSAP(() => {
  //     gsap.from('#mobile-nav', {})
  // }, {scope: container})

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
                <span className="font-semibold text-neutral-300 text-lg">
                  YPK
                </span>
              </Link>
            </div>
          </div>
          <div className={`${firaCode.className} hidden md:flex items-center space-x-1`}>
            {/* Desktop menu */}
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
            <button
              className="outline-none relative w-6 h-6"
              onClick={toggleMenu}
            >
              <img
                src="/menu.svg"
                alt="menu"
                className={`absolute inset-0 w-6 h-6 duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <img
                src="/close.svg"
                alt="close"
                className={`absolute inset-0 w-6 h-6 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
      {/* Mobile menu */} 
      {isOpen && (
        <div ref={container} id="mobile-nav" className="fixed inset-0 z-50 bg-black bg-opacity-75 backdrop-blur-md">
          <div
            id='mobile-nav' className={`fixed inset-y-0 right-0 w-2/3 md:hidden bg-blue-950 shadow-xl  ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="absolute top-4 right-4 z-50"
              onClick={toggleMenu}
            >
              <img src="/close.svg" alt="close" className="w-6 h-6" />
            </button>
            <ul className="pt-16 pb-6 flex flex-col items-center space-y-6">
              {navLinks.map((item) => (
                <li id="mobile-links" key={item.id}>
                  <Link
                    to={item.href.replace("#", "")}
                    smooth={true}
                    duration={300}
                    offset={0}
                    className="text-lg font-medium text-neutral-300 hover:text-teal-400 transition duration-300"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
    
  );
};

export default Navbar;
