import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import logoIcon from "@images/icon-logo.png";
import "./style.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img alt="logo" src={logoIcon} />
      </div>

      <ul className={`navbar__links ${showMenu && "show"}`}>
        <li onClick={toggleMenu}>
          <XMarkIcon className="links__close-icon" />
        </li>

        <li className="link">
          <a href="#about">About me</a>
        </li>
        <li className="link">
          <a href="#skills">Skills</a>
        </li>
        <li className="link">
          <a href="#projects">Projects</a>
        </li>
        <li className="link">
          <a href="#contact">Contact</a>
        </li>
        <li>
          <label htmlFor="switch" className="navbar_switch">
            <input
              className="switch-checkbox"
              id="switch"
              name="mode"
              type="checkbox"
              aria-label="enable or disable dark mode"
              //   onChange={toggleDarkTheme}
              //   checked={darkTheme}
            />
            <span className="switch-slider"></span>
          </label>
        </li>
      </ul>

      <Bars3Icon onClick={toggleMenu} className="navbar__menu-icon" />
    </nav>
  );
};

export default Navbar;
