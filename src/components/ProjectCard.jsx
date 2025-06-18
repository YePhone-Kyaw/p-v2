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
  <div className="flex flex-col items-center p-3 border-2 border-teal-300 bg-teal-600/20 w-[300px] rounded-xl hover:scale-[1.02] transition-transform hover:bg-teal-400/40">
    <div className="h-40 w-full items-center">
    <img src={image} alt={alt} className="object-cover w-full h-full rounded-xl" />
    </div>
    <div className={`${poppins.className}flex flex-col items-center mt-3`}>
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="mb-2 text-md">{description}</p>
    <ul className="flex flex-wrap gap-2">
      {(languages || []).map((lang, i) => (
        <li
          key={lang + i}
          className="px-2 py-1 bg-teal-600/30 rounded text-teal-300 text-xs"
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
