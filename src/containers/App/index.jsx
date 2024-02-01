import Navbar from "@components/Navbar";
import Header from "@components/Header";
import About from "@containers/About";
import "./style.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <About />
      </main>
    </>
  );
};

export default App;
