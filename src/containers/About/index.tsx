import React from "react";
import Skills from "@components/Skills";
import TechImg from "@assets/skills/tech.svg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="flex flex-col sm:flex-row mb-12">
      <div className="flex flex-col gap-4">
        <h2 className="order-1 sm:-order-none text-2xl font-medium tracking-wide">
          {t("about.title")}
        </h2>
        <p className="order-3 sm:-order-none text-lg font-extralight leading-loose tracking-wide">
          {t("about.desc")}
        </p>
        <Skills />
      </div>

      <div className="w-fit h-fit self-center">
        <TechImg className="w-[245px] h-[218px] sm:w-[305px] sm:h-[278px]" />
      </div>
    </section>
  );
};

export default About;
