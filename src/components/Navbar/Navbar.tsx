import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../contexts/ThemeContext";
import { highlightNav, mobileNav, navHoverAnimation } from "./script";
import Logo from "../../assets/logo.svg?react";
import "./navbar.css";

function Navbar() {
  const { dark, toggleThemeSwitchBtn } = useTheme();
  const btnRef = navHoverAnimation();
  highlightNav();
  mobileNav();

  return (
    <header className="navClass">
      <nav className="nav">
        <div className="nav_left">
          <Link to="/">
            <Logo className="logo" />
          </Link>
        </div>

        <button className="nav_toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className="nav_links" ref={btnRef}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>

        <div className="nav_right">
          <button className="theme_toggle_btn" onClick={toggleThemeSwitchBtn}>
            {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
