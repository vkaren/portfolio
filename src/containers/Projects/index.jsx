import { useEffect, useState } from "react";
import { projects } from "@data/projects";
import Project from "@components/Project";
import "./style.css";

const Projects = () => {
  const [projectList, setProjectList] = useState(projects.slice(0, 4));
  const [projectImages, setProjectImages] = useState([]);
  const [loadCount, setLoadCount] = useState(8);

  useEffect(() => {
    const loadProjectFiles = async () => {
      try {
        const files = import.meta.glob("../../data/projects/images/*.png");

        const promises = Object.keys(files).map(async (path) => {
          const module = await files[path]();
          return module;
        });

        const data = await Promise.all(promises);

        setProjectImages(data);
      } catch (error) {
        console.error("Error loading JSON files:", error);
      }
    };

    loadProjectFiles();
  }, []);

  const onClickLoadBtn = () => {
    setProjectList([...projects.slice(0, loadCount)]);
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
        {projectList.map((project, i) => {
          const image = projectImages.find((image) => {
            const imageName = project.image.split(".")[0];

            return image.default.includes(imageName);
          })?.default;

          return <Project key={`project-${i}`} {...project} image={image} />;
        })}
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
