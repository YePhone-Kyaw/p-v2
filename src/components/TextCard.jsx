import React from "react";

const TextCard = ({ children, icon, title }) => {
  return (
    <div className="flex gap-3 p-3 border-2 border-teal-300 bg-teal-600/10 rounded-lg w-[500px] transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-teal-600/40">
      <span>{icon}</span>
      <div>
        <div className="text-lg font-bold">{title}</div>
        <div className="text-sm md:text-md">{children}</div>
      </div>
    </div>
  );
};

export default TextCard;
