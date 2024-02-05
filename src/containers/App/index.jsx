import Navbar from "@components/Navbar";
import Header from "@components/Header";
import About from "@containers/About";
import Benefits from "@containers/Benefits";
import Skills from "@containers/Skills";
import Projects from "@containers/Projects";
import Contact from "@containers/Contact";
import Footer from "@components/Footer";
import "./style.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <About />
        <Benefits />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
