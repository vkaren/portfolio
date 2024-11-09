import React from "react";
import data from "@data/projects/projects.json";
import Carousel from "@components/Carousel";
import Project from "@components/Project";

const { projects } = data;

const Projects = () => {
  return (
    <section id="projects" className="mb-12">
      <h2 className="text-2xl text-right font-medium tracking-wide mb-6">
        _recent_projects
      </h2>
      <Carousel
        items={projects.map((p, index) => (
          <Project key={`project-${index}`} {...p} />
        ))}
      />
    </section>
  );
};

export default Projects;
