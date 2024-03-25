import { useTranslation } from "react-i18next";
import { XMarkIcon } from "@heroicons/react/24/outline";
import LanguageSwitch from "@components/LanguageSwitch";
import DarkModeSwitch from "@components/DarkModeSwitch";
import "./style.css";

const NavbarLinkList = ({ showMenu, toggleMenu }) => {
  const [t] = useTranslation("global");

  return (
    <ul className={`navbar__links ${showMenu && "show"}`}>
      <li onClick={toggleMenu}>
        <XMarkIcon className="links__close-icon" />
      </li>

      <li className="link">
        <a href="#about">{t("navbar.links.about")}</a>
      </li>
      <li className="link">
        <a href="#skills">{t("navbar.links.skills")}</a>
      </li>
      <li className="link">
        <a href="#projects">{t("navbar.links.projects")}</a>
      </li>
      <li className="link">
        <a href="#contact">{t("navbar.links.contact")}</a>
      </li>
      <li className="link">
        <LanguageSwitch />
      </li>
      <li className="link">
        <DarkModeSwitch />
      </li>
    </ul>
  );
};

export default NavbarLinkList;
