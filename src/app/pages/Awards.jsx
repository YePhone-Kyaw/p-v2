import YycHack from "@/components/awards/YycHack";
import { firaCode } from "@/fonts/fonts";
import React from "react";

const Awards = () => {
  return (
    <section className="flex flex-col h-screen w-full items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
      <div className="w-full max-w-5xl">
        <div className={`${firaCode.className} flex items-center gap-5 mb-10`}>
          <h1 className="flex text-2xl text-teal-300">Awards</h1>
          <span className="bg-teal-300 w-[100px] h-[1px]"></span>
        </div>
        <div>
            <YycHack />
        </div>
      </div>
    </section>
  );
};

export default Awards;
