import { Suspense, lazy, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import LogoIcon from "@components/LogoIcon";
import "./style.css";

const NavbarLinkList = lazy(() => import("./NavbarLinkList"));

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <LogoIcon className="navbar__logo" />

      <Suspense>
        <NavbarLinkList showMenu={showMenu} toggleMenu={toggleMenu} />
      </Suspense>

      <Bars3Icon onClick={toggleMenu} className="navbar__menu-icon" />
      <div
        onClick={toggleMenu}
        className={`navbar__overlay ${showMenu && "show"}`}
      ></div>
    </nav>
  );
};

export default Navbar;
