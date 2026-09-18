import React from "react";
import TsImg from "@assets/skills/typescript.svg";
import ReactImg from "@assets/skills/react.svg";
import NextjsImg from "@assets/skills/nextjs.svg";
import TypeormImg from "@assets/skills/typeorm.svg";
import JestImg from "@assets/skills/jest.svg";
import GitImg from "@assets/skills/git.svg";
import NodeImg from "@assets/skills/nodejs.svg";
import PostgresqlImg from "@assets/skills/postgresql.svg";
import ExpressImg from "@assets/skills/expressjs.svg";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-extralight leading-loose tracking-wide">
        {t("technologies.title")}
      </h2>
      <p className="text-lg">{t("technologies.desc")}</p>

      <div className="flex flex-wrap order-2 sm:-order-none gap-4 max-w-lg mt-5">
        <div className="flex flex-col items-center gap-2">
          <TsImg className="w-20 h-20" aria-label="TypeScript" />
          <p className="text-xs">[TypeScript]</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <ReactImg className="w-20 h-20" aria-label="React" />
          <p className="text-xs">[React]</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <NextjsImg className="w-20 h-20" aria-label="Nextjs" />
          <p className="text-xs">[NextJS]</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <NodeImg className="w-20 h-20" aria-label="Node.js" />
          <p className="text-xs">[Node.js]</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <ExpressImg className="w-20 h-20" aria-label="Express.js" />
          <p className="text-xs">[Express.js]</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <PostgresqlImg className="w-20 h-20" aria-label="PostgreSQL" />
          <p className="text-xs">[PostgreSQL]</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <TypeormImg className="w-20 h-20" aria-label="TypeORM" />
          <p className="text-xs">[TypeORM]</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <JestImg className="w-20 h-20" aria-label="Jest" />
          <p className="text-xs">[Jest]</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <GitImg className="w-20 h-20" aria-label="Git" />
          <p className="text-xs">[Git]</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
