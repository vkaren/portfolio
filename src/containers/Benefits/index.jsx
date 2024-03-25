import { useTranslation } from "react-i18next";
import "./style.css";

const Benefits = () => {
  const [t] = useTranslation("global");

  return (
    <section className="benefits_section">
      <h2 className="benefits__heading">{t("main.benefits.heading")}</h2>
      <p className="benefits__text">{t("main.benefits.content")}</p>

      <ul className="benefits__list">
        <li className="list__benefit">
          <h3 className="benefit__heading">
            {t("main.benefits.list.expertise.heading")}
          </h3>
          <p className="benefit__text">
            {t("main.benefits.list.expertise.content")}
          </p>
        </li>

        <li className="list__benefit">
          <h3 className="benefit__heading">
            {t("main.benefits.list.quality.heading")}
          </h3>
          <p className="benefit__text">
            {t("main.benefits.list.quality.content")}
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Benefits;
