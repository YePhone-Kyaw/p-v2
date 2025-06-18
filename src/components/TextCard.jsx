import React from "react";

const TextCard = ({ children, icon, title }) => {
  return (
    <div className="flex gap-3 p-3 bg-teal-300 opacity-80 rounded-lg w-full">
      {icon}
      <div>
        <div>{title}</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default TextCard;
