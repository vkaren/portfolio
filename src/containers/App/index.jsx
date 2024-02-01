import Navbar from "@components/Navbar";
import Header from "@components/Header";
import About from "@containers/About";
import Benefits from "@containers/Benefits";
import "./style.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <About />
        <Benefits />
      </main>
    </>
  );
};

export default App;
