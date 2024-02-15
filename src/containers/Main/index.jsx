import { Suspense, lazy, useContext } from "react";
import { ThemeContext } from "@context/themeContext";
import About from "@containers/About";
import "./style.css";

const Benefits = lazy(() => import("../Benefits"));
const Skills = lazy(() => import("../Skills"));
const Projects = lazy(() => import("../Projects"));
const Contact = lazy(() => import("../Contact"));

const Main = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <main className={darkTheme ? "dark-mode" : null}>
      <About />
      <Suspense fallback={<div className="fallback"></div>}>
        <Benefits />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>
    </main>
  );
};

export default Main;
