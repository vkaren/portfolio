import { useContext } from "react";
import { ThemeContext } from "@context/themeContext";
import ProjectsSlider from "@components/ProjectsSlider";

const ProjectsSection = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <section
      id="projects"
      className={`projects_section ${darkTheme && "dark-theme"}`}
    >
      <h2 className="projects_section__title">Projects</h2>

      <ProjectsSlider />
    </section>
  );
};

export default ProjectsSection;
