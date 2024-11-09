import React from "react";
import TsImg from "@assets/skills/typescript.svg";
import ReactImg from "@assets/skills/react.svg";
import NextjsImg from "@assets/skills/nextjs.svg";
import TypeormImg from "@assets/skills/typeorm.svg";
import JestImg from "@assets/skills/jest.svg";
import GitImg from "@assets/skills/git.svg";

const Skills = () => {
  return (
    <div className="flex flex-wrap order-2 sm:-order-none gap-4 mt-5">
      <TsImg className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
      <ReactImg className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
      <NextjsImg className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
      <TypeormImg className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
      <JestImg className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
      <GitImg className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
    </div>
  );
};

export default Skills;
