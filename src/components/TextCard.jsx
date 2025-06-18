import React from "react";

const TextCard = ({ children, icon, title }) => {
  return (
    <div className="p-3 bg-gray-300">
      {icon}
      <div>
        <div>{title}</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default TextCard;
