import { useContext, useEffect } from "react";
import { ThemeContext } from "@context/themeContext";
import "./style.css";

const Header = () => {
  const { darkTheme } = useContext(ThemeContext);

  useEffect(() => {
    import("./style.bckg.css");
  }, []);

  return (
    <header id="header" className={`header ${darkTheme ? "dark-mode" : null}`}>
      <div className="header__content">
        <h1 className="content__title">Hello, World! I'm Karen Varela🌟</h1>
        <p className="content__text">
          Welcome to my portfolio website. Explore my projects and experience.
        </p>
      </div>
    </header>
  );
};

export default Header;
