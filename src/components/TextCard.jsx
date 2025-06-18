import React from "react";

const TextCard = ({ children, icon, title }) => {
  return (
    <div className="flex gap-3 p-3 border-2 border-teal-300 opacity-80 rounded-lg w-full">
      <div>{icon}</div>
      <div>
        <div className="text-">{title}</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default TextCard;
