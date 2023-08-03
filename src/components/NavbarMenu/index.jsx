import { useContext } from "react";
import { ThemeContext } from "@context/themeContext";
import cancelIcon from "@icons/icon-cancel.png";
import "./styles.css";

const NavbarMenu = ({ onCancelShowMenu }) => {
  const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);

  return (
    <>
      <ul className="navbar_menu">
        <li>
          <button onClick={onCancelShowMenu} className="navbar_cancel-button">
            <img src={cancelIcon} alt="cancel icon" />
          </button>
        </li>
        <li>
          <a className="navbar_link" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="navbar_link" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="navbar_link" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="navbar_link" href="#contact">
            Contact
          </a>
        </li>
        <li>
          <label htmlFor="switch" className="navbar_switch">
            <input
              className="switch-checkbox"
              id="switch"
              name="mode"
              type="checkbox"
              aria-label="enable or disable dark mode"
              onChange={toggleDarkTheme}
              checked={darkTheme}
            />
            <span className="switch-slider"></span>
          </label>
        </li>
      </ul>
      <div onClick={onCancelShowMenu} className="overlay"></div>
    </>
  );
};

export default NavbarMenu;
