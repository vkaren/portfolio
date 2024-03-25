import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Project from "@components/Project";
import "./style.css";

const Projects = () => {
  const [t] = useTranslation("global");
  const projects = t("main.projects.list", { returnObjects: true });
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
        <span className="projects__content_subheading">
          {t("main.projects.subheading")}
        </span>
        <h2 className="projects__content_heading">
          {t("main.projects.heading")}
        </h2>
        <p className="projects__content_text">{t("main.projects.text")}</p>
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
          {t("main.projects.see-more-btn")}
        </button>
      )}
    </section>
  );
};

export default Projects;
