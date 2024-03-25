import { useTranslation } from "react-i18next";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import "./style.css";

const Project = ({ title, info, image, tags, url }) => {
  const [t] = useTranslation("global");

  return (
    <li className="project">
      <div className="project__img">
        <img src={image} alt={title} fetchpriority="low" loading="lazy" />
      </div>

      <h3 className="project__heading">{title}</h3>
      <p className="project__info">{info}</p>

      <div className="project__tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <a
        href={url}
        target="__blank"
        rel="noopener noreferrer"
        className="project__link"
      >
        {t("main.projects.view-project-btn")}
        <ChevronRightIcon className="project__link_chevron-icon" />
      </a>
    </li>
  );
};

export default Project;
