import React from "react";

const Button = ({ href, children, boxStyle = "normal", className = "", ...props }) => {
  let baseClass = "w-full text-center rounded-md p-2 cursor-pointer  text-neutral-300 hover:text-teal-400 transition duration-300";
  if (boxStyle === "outline") {
    baseClass += " border-2 border-teal-300/50 bg-slate-800/30 backdrop-blur-md text-teal-300 hover:bg-slate-700/40 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/25 hover:scale-105";
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
