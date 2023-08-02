import { useState } from "react";
import NavbarMenu from "@components/NavbarMenu";
import logoIcon from "@icons/icon-logo.png";
import menuIcon from "@icons/icon-menu.png";
import "./styles.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(window.innerWidth > 500);

  const onShowMenu = () => {
    setShowMenu(true);
  };

  const onCancelShowMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar_page">
      <div className="navbar_logo">
        <img src={logoIcon} alt="logo icon" />
      </div>

      {!showMenu && (
        <button onClick={onShowMenu} className="navbar_show-menu">
          <img src={menuIcon} alt="menu icon" />
        </button>
      )}

      {showMenu && <NavbarMenu onCancelShowMenu={onCancelShowMenu} />}
    </nav>
  );
};

export default Navbar;
