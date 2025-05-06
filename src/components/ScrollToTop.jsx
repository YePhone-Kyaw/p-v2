'use client'

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import IconHandUp from "./icons/hand-up"; // Adjust path as needed

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Link
      to="top"
      smooth={true}
      duration={300}
      offset={0}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 cursor-pointer  text-teal-500 p-3 shadow-lg "
    >
      <IconHandUp className="w-6 h-6" />
    </Link>
  );
};

export default ScrollToTop;
