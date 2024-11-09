import React from "react";
import MinIcon from "@assets/icons/icon-min.svg";
import WindowIcon from "@assets/icons/icon-window.svg";
import CloseIcon from "@assets/icons/icon-close.svg";

const Navbar = () => {
  return (
    <nav
      className="flex justify-end items-center gap-2 w-full
    p-3 border-b border-gray-500 sticky top-0 bg-white z-10"
    >
      <MinIcon className="w-4 h-4" />
      <WindowIcon className="w-4 h-4" />
      <CloseIcon className="w-4 h-4" />
    </nav>
  );
};

export default Navbar;
