import { ThemeProvider } from "@context/themeContext";
import Navbar from "@components/Navbar";
import Header from "@components/Header";
import Main from "@containers/Main";
import Footer from "@components/Footer";
import "./style.css";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
