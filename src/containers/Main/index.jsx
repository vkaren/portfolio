import { useContext } from "react";
import { ThemeContext } from "@context/themeContext";
import About from "@containers/About";
import Benefits from "@containers/Benefits";
import Skills from "@containers/Skills";
import Projects from "@containers/Projects";
import Contact from "@containers/Contact";
import "./style.css";

const Main = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <main className={darkTheme ? "dark-mode" : null}>
      <About />
      <Benefits />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Main;
