import { ThemeProvider } from "@context/themeContext";
import Navbar from "@components/Navbar";
import Header from "@components/Header";
import Main from "@containers/Main";
import { Suspense, lazy } from "react";

const Footer = lazy(() => import("../../components/Footer"));

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Header />
      <Main />

      <Suspense>
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
