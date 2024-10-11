import React from "react";
// import { ThemeProvider } from "@context/themeContext";
import Navbar from "@components/Navbar";
import About from "@containers/About";
import Projects from "@containers/Projects";
import Contact from "@containers/Contact";
import Header from "@containers/Header";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <header className="p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
        <Navbar />
      </header>
      <main className="max-w-6xl mx-auto p-8">
        <Header />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
