import { useTranslation } from "react-i18next";
import "./style.css";

const About = () => {
  const [t] = useTranslation("global");

  return (
    <section id="about" className="about_section">
      <div className="about__heading_container">
        <span className="subheading">{t("main.about.subheading")}</span>
        <h3 className="heading">{t("main.about.heading")}</h3>
      </div>
      <div className="about__content">
        <p className="content">{t("main.about.content")}</p>
      </div>
    </section>
  );
};

export default About;
