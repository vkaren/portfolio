import { useTranslation } from "react-i18next";
import "./style.css";

const Benefits = () => {
  const [t] = useTranslation("global");

  return (
    <section className="benefits_section">
      <div className="benefits__my-picture"></div>

      <div className="benefits__content">
        <h2 className="benefits__content_heading">
          {t("main.benefits.heading")}
        </h2>
        <p className="benefits__content_text">{t("main.benefits.content")}</p>

        <ul className="benefits__content_list">
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
      </div>
    </section>
  );
};

export default Benefits;
