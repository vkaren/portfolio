import { ChevronRightIcon } from "@heroicons/react/24/outline";
import "./style.css";

const Project = ({ title, info, image, tags, url }) => {
  return (
    <li className="project">
      <div className="project__img">
        <img src={image} alt={title} />
      </div>

      <h3 className="project__title">{title}</h3>
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
        View project
        <ChevronRightIcon className="project__link_chevron-icon" />
      </a>
    </li>
  );
};

export default Project;
