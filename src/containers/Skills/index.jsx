import { useTranslation } from "react-i18next";
import "./style.css";

const Skills = () => {
  const [t] = useTranslation("global");

  return (
    <section id="skills" className="skills_section">
      <div className="skills__content">
        <span className="skills__content_subheading">
          {t("main.skills.subheading")}
        </span>
        <h2 className="skills__content_heading">{t("main.skills.heading")}</h2>
        <p className="skills__content_text">{t("main.skills.content")}</p>
      </div>

      <ul className="skill__list">
        {t("main.skills.list", { returnObjects: true })?.map((skill, i) => (
          <li key={`skill-${i}`} className="skill">
            <h3 className="skill__heading">{skill.name}</h3>
            <p className="skill__text">{skill.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
