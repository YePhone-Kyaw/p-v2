import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Button = ({ href, children, boxStyle = "normal", className = "", ...props }) => {
  let baseClass = "w-full text-center rounded-md p-2 cursor-pointer  text-neutral-300 hover:text-teal-400 transition duration-300";
  if (boxStyle === "outline") {
    baseClass += " border-2 border-teal-300 bg-transparent text-teal-300";
  } else if (boxStyle === "normal") {
    baseClass += " bg-teal-300 text-white";
  }

  return typeof href === "string" ? (
    <a href={href} className={`${baseClass} ${className}`} {...props}>
      {children}
    </a>
  ) : (
    <button className={`${baseClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
