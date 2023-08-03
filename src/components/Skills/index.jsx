import skillsData from "@data/skills/skills.json";
import "./styles.css";

const Skills = () => {
  const { skills } = skillsData;

  return (
    <section id="#skills" className="skills_section">
      <h2 className="skills_title">Skills</h2>

      <div className="skills_container">
        {skills.map((skill, i) => {
          const skillImg = require(`@data/${skill.image}`);
          return (
            <article key={`skill${i}`} className="skill">
              <div className="skill_img">
                <img src={skillImg} alt={skill.name} />
              </div>{" "}
              <span className="skill_name">{skill.name}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
