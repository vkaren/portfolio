import React from "react";
import data from "@data/projects/projects.json";
import Project from "@components/Project";
import { useTranslation } from "react-i18next";

const { projects } = data;

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="mt-12">
      <h2 className="text-3xl font-medium tracking-wide mb-6">
        {t("projects.title")}
      </h2>
      <div className="flex gap-8">
        {projects.map((p) => (
          <Project
            key={p.title}
            title={t(`projects.${p.title}`)}
            description={t(`projects.${p.description}`)}
            image={p.image}
            url={p.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
