import React from "react";
// import minIcon from "../../assets/icons/icon-min.svg";
// import windowIcon from "../../assets/icons/icon-window.svg";
// import closeIcon from "../../assets/icons/icon-close.svg";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center w-full
    py-3 px-8 border-b border-gray-500 sticky top-0 bg-white z-10"
    >
      <div className="flex space-x-6">
        <a href="#about" className="text-sm hover:font-bold">
          <span className="underline">A</span>bout me
        </a>
        <a href="#projects" className="text-sm hover:font-bold">
          <span className="underline">P</span>rojects
        </a>
        <a href="#contact" className="text-sm hover:font-bold">
          <span className="underline">C</span>ontact
        </a>
      </div>
      <div className="flex space-x-2">
        {/* <img src={minIcon} alt="icon" />
        <img src={windowIcon} alt="icon" />
        <img src={closeIcon} alt="icon" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
