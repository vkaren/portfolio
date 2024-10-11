import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-6xl mx-auto">
      <div className="flex space-x-4">
        <a href="#about" className="hover:font-bold">
          About Me
        </a>
        <a href="#projects" className="hover:font-bold">
          Projects
        </a>
        <a href="#contact" className="hover:font-bold">
          Contact
        </a>
      </div>
      <div className="flex space-x-2">
        <button className="w-3 h-3 rounded-full bg-gray-300"> a</button>
        <button className="w-3 h-3 rounded-full bg-gray-300"> b</button>
        <button className="w-3 h-3 rounded-full bg-gray-300"> c</button>
      </div>
    </nav>
  );
};

export default Navbar;
