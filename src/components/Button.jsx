import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Button = ({ href, children, boxStyle = "normal", className = "", ...props }) => {
  let baseClass = "w-full text-center rounded-md p-2 cursor-pointer";
  if (boxStyle === "outline") {
    baseClass += " border-2 border-teal-300 bg-transparent text-teal-300";
  } else if (boxStyle === "normal") {
    baseClass += " bg-teal-300 text-white";
  }
  // If boxStyle is "none" or "", don't add any extra classes

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
