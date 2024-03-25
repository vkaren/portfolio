import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "@context/themeContext";
import "./style.css";

const Header = () => {
  const [t] = useTranslation("global");
  const { darkTheme } = useContext(ThemeContext);

  useEffect(() => {
    import("./style.bckg.css");
  }, []);

  return (
    <header id="header" className={`header ${darkTheme ? "dark-mode" : null}`}>
      <div className="header__content">
        <h1 className="content__heading">{t("header.content.heading")}</h1>
        <p className="content__text">{t("header.content.text")}</p>
      </div>
    </header>
  );
};

export default Header;
