import { useState } from "react";
import { projects } from "@data/projects";
import Project from "@components/Project";
import "./style.css";

const Projects = () => {
  const [projectList, setProjectList] = useState(projects.slice(0, 4));
  const [loadCount, setLoadCount] = useState(4);

  const onClickLoadBtn = () => {
    setProjectList([
      ...projectList,
      ...projects.slice(loadCount, loadCount + 4),
    ]);
    setLoadCount(loadCount + 4);
  };

  return (
    <section id="projects" className="projects_section">
      <div className="projects__content">
        <span className="projects__content_subheading">Portfolio</span>
        <h2 className="projects__content_title">Highlighting My Work</h2>
        <p className="projects__content_text">
          Explore my portfolio and see my latest projects.
        </p>
      </div>

      <ul className="project__list">
        {projectList.map((project, i) => (
          <Project key={`project-${i}`} {...project} />
        ))}
      </ul>

      {projectList.length !== projects.length && (
        <button onClick={onClickLoadBtn} className="projects__see_btn">
          See more
        </button>
      )}
    </section>
  );
};

export default Projects;
