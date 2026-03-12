import React from "react";

const TextCard = ({ ref, children, icon, title }) => {
  return (
    <div ref={ref} className="flex gap-3 p-4 border border-teal-300/40 bg-white/5 backdrop-blur-md rounded-xl w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-500/20 hover:bg-white/10 hover:border-teal-400/60">
      <span className="flex-shrink-0">{icon}</span>
      <div>
        <div className="text-lg font-bold text-teal-300">{title}</div>
        <div className="text-sm md:text-md text-neutral-300">{children}</div>
      </div>
    </div>
  );
};

export default TextCard;
