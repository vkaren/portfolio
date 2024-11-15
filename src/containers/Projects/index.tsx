import React from "react";
import data from "@data/projects/projects.json";
import Carousel from "@components/Carousel";
import Project from "@components/Project";
import { useTranslation } from "react-i18next";

const { projects } = data;

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="mb-12">
      <h2 className="text-xl sm:text-2xl text-right font-medium tracking-wide mb-6">
        {t("projects.title")}
      </h2>
      <Carousel
        items={projects.map((p, index) => (
          <Project
            key={`project-${index}`}
            title={t(`projects.${p.title}`)}
            description={t(`projects.${p.description}`)}
            image={p.image}
            url={p.url}
          />
        ))}
      />
    </section>
  );
};

export default Projects;
