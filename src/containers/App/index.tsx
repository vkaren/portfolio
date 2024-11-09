import React from "react";
import Navbar from "@containers/Navbar";
import Header from "@containers/Header";
import About from "@containers/About";
import Projects from "@containers/Projects";
import Contact from "@containers/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <Navbar />
      <main className="flex flex-col gap-8 max-w-6xl mx-auto p-8 sm:p-16">
        <Header />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
