import { skills } from "@data/skills";
import "./style.css";

const Skills = () => {
  return (
    <section id="skills" className="skills_section">
      <div className="skills__content">
        <span className="skills__content_subheading">Frontend</span>
        <h2 className="skills__content_title">
          Skills and Technologies I Specialize In
        </h2>
        <p className="skills__content_text">
          As a junior frontend developer, I specialize in a range of skills and
          technologies that allow me to create dynamic and user-friendly
          websites.
        </p>
      </div>

      <ul className="skill__list">
        {skills?.map((skill, i) => (
          <li key={`skill-${i}`} className="skill">
            <h3 className="skill__title">{skill.name}</h3>
            <p className="skill__text">{skill.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
