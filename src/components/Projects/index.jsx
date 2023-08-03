import { createRef } from "react";
import projectsData from "@data/projects/projects.json";
import arrowBackIcon from "@icons/icon-arrow-back.svg";
import arrowForwardIcon from "@icons/icon-arrow-forward.svg";
import "./styles.css";

const Projects = () => {
  const { projects } = projectsData;
  const projectsContainerRef = createRef();
  let slideInterval;

  const onSlideBack = () => {
    slideInterval = setInterval(
      () => (projectsContainerRef.current.scrollLeft -= 10),
      12
    );
  };

  const onSlideForward = () => {
    slideInterval = setInterval(
      () => (projectsContainerRef.current.scrollLeft += 10),
      12
    );
  };

  const onStopSlide = () => clearInterval(slideInterval);

  return (
    <section className="projects_section">
      <h2 className="projects_section__title">Projects</h2>

      <div className="projects_slider">
        <button
          onMouseDown={onSlideBack}
          onMouseUp={onStopSlide}
          onTouchStart={onSlideBack}
          onTouchEnd={onStopSlide}
          onTouchCancel={onStopSlide}
          className="projects__slide-back"
        >
          <img src={arrowBackIcon} alt="arrow back icon" />
        </button>

        <div ref={projectsContainerRef} className="projects_container">
          {projects.map((project, i) => {
            const projectImg = require(`@data/${project.image}`);

            return (
              <article key={`project${i}`} className="project">
                <img
                  className="project_image"
                  src={projectImg}
                  alt={project.title}
                />

                <div className="project_content">
                  <span className="project_content__title">
                    {project.title}
                  </span>
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

        <button
          onMouseDown={onSlideForward}
          onMouseUp={onStopSlide}
          onTouchStart={onSlideForward}
          onTouchEnd={onStopSlide}
          onTouchCancel={onStopSlide}
          className="projects__slide-forward"
        >
          <img src={arrowForwardIcon} alt="arrow forward icon" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
