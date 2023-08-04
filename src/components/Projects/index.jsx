import projectsData from "@data/projects/projects.json";
import "./styles.css";

const Projects = ({ projectsContainerRef }) => {
  const { projects } = projectsData;

  return (
    <div ref={projectsContainerRef} className="projects_container">
      {projects.map((project, i) => {
        const projectImg = require(`@data/${project.image}`);

        return (
          <article key={`project-${i}`} className="project">
            <img
              className="project_image"
              src={projectImg}
              alt={project.title}
              width="150"
              height="250"
              loading="lazy"
            />

            <div className="project_content">
              <span className="project_content__title">{project.title}</span>
              <span className="project_content__info">{project.info}</span>
              <a
                className="project_content__url"
                href={project.url}
                target="__blank"
              >
                See project
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Projects;
