import { poppins } from "@/fonts/fonts";
import React from "react";

const ProjectCard = ({
  image,
  alt,
  title,
  description,
  languages,
  children,
}) => (
  <div className="flex flex-col items-center p-3 border border-teal-300/40 bg-white/5 backdrop-blur-lg w-[300px] rounded-xl hover:scale-[1.02] hover:bg-white/10 hover:border-teal-400/60 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300">
    <div className="h-40 w-full items-center">
      <img
        src={image}
        alt={alt}
        className={
          title === "PowerShift Scheduler"
            ? "object-contain w-[260px] h-full mx-auto rounded-xl bg-white p-2"
            : "object-cover w-full h-full rounded-xl"
        }
      />
    </div>
    <div className={`${poppins.className} flex flex-col items-center mt-3`}>
      <h3 className="text-lg font-bold text-teal-300">{title}</h3>
      <p className="mb-2 text-md text-neutral-300">{description}</p>
      <ul className="flex flex-wrap gap-2 justify-center">
        {(languages || []).map((lang, i) => (
          <li
            key={lang + i}
            className="px-2 py-1 bg-white/5 backdrop-blur-md border border-teal-400/30 rounded-lg text-teal-300 text-xs hover:bg-white/10 hover:border-teal-400/50 transition-all duration-200"
          >
            {lang}
          </li>
        ))}
      </ul>
      {children}
    </div>
  </div>
);

export default ProjectCard;
