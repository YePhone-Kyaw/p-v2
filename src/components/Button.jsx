import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Button = ({ href, children, boxStyle = "normal", ...props }) => {
  const className = `text-center rounded-md p-2 cursor-pointer w-full sm:w-[300px] ${
    boxStyle === "outline"
      ? "border-2 border-teal-300 bg-transparent text-teal-300"
      : "bg-teal-300 text-white"
  }`;

  if (typeof href === "string" && href.startsWith("#")) {
    return (
      <ScrollLink
        to={href.replace("#", "")}
        smooth={true}
        duration={300}
        offset={0}
        className={className}
        {...props}
      >
        {children}
      </ScrollLink>
    );
  }

  if (typeof href === "string" ) {
    return (
      <a target="_blank" href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
