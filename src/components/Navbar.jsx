"use client";

import React, { useEffect, useRef, useState } from "react";
import { navLinks } from "../app/constants";
import { firaCode } from "@/fonts/fonts";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ZLogo from "./ZLogo";
import HamburgerIcon from "./HamburgerIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [previousScroll, setPreviousScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 400);
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

  useGSAP(
    () => {
      if (!isLoaded) return;

      gsap
        .timeline()
        .from("#logo", { y: -30, opacity: 0 })
        .from("#nav-links", { y: -30, opacity: 0, stagger: 0.3 });
    },
    { scope: container, dependencies: [isLoaded] },
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setVisible(previousScroll > currentScroll || currentScroll < 10);
      setPreviousScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [previousScroll]);

  return (
    <>
      <nav
        ref={container}
        className={`fixed top-0 left-0 right-0 transition-all duration-500 z-50 ${visible ? "translate-y-0" : "-translate-y-full"} ${isLoaded ? "opacity-100" : "opacity-0"} bg-slate-900/30 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20 `}
      >
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div id="logo">
                <Link
                  to="top"
                  smooth={true}
                  duration={300}
                  offset={0}
                  className="flex items-center py-4 px-2 cursor-pointer"
                >
                  <ZLogo size={36} autoAnimate={true} />
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <HamburgerIcon open={isOpen} onClick={toggleMenu} />
            </div>
            <div
              className={`${firaCode.className} hidden md:flex items-center space-x-1`}
            >
              <ul className=" flex space-x-4">
                {navLinks.map((item) => (
                  <li id="nav-links" key={item.id}>
                    <Link
                      to={item.href.replace("#", "")}
                      smooth={true}
                      duration={500}
                      offset={0}
                      className="py-4 px-2 text-neutral-300 hover:text-teal-400 transition duration-300 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={toggleMenu}
          ></div>
          <div
            id="mobile-nav"
            className={`fixed left-0 top-16 z-50 w-full bg-slate-900/40 backdrop-blur-xl shadow-2xl border-b border-white/10 px-6 py-8 ${isClosing ? "animate-fold-up" : "animate-slide-down"}`}
          >
            <ul className="flex flex-col space-y-3">
              {navLinks.map((item, index) => (
                <li
                  key={item.id}
                  className={`transform transition-all duration-500 ${!isClosing ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}
                  style={{
                    transitionDelay: isClosing ? "0ms" : `${index * 100}ms`,
                  }}
                >
                  <Link
                    to={item.href.replace("#", "")}
                    smooth={true}
                    duration={300}
                    offset={0}
                    className={`${firaCode.className} group relative block px-6 py-4 text-lg font-medium text-neutral-200 bg-white/5 hover:bg-teal-500/20 rounded-xl border border-white/10 hover:border-teal-400/50 transition-all duration-300 hover:translate-x-2`}
                    onClick={handleLinkClick}
                  >
                    <span className="flex items-center justify-between">
                      <span className="relative z-10">{item.name}</span>
                      <svg
                        className="w-5 h-5 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/10 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
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
