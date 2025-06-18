import React from "react";

const TextCard = ({ children, icon, title }) => {
  return (
    <div className="flex gap-3 p-3 border-2 border-teal-300 rounded-lg w-full">
      <span>{icon}</span>
      <div>
        <div className="text-lg font-bold">{title}</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default TextCard;
