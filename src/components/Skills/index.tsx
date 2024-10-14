import React from "react";
import TsImg from "@assets/skills/typescript.svg";
import ReactImg from "@assets/skills/react.svg";
import NextjsImg from "@assets/skills/nextjs.svg";
import TypeormImg from "@assets/skills/typeorm.svg";
import JestImg from "@assets/skills/jest.svg";
import GitImg from "@assets/skills/git.svg";

const Skills = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-5">
      <TsImg />
      <ReactImg />
      <NextjsImg />
      <TypeormImg />
      <JestImg />
      <GitImg />
    </div>
  );
};

export default Skills;
