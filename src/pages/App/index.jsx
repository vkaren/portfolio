import Navbar from "@components/Navbar";
import Header from "@components/Header";
import Main from "@components/Main";
import Footer from "@components/Footer";
import { ThemeProvider } from "@context/themeContext";
import "./styles.css";

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
