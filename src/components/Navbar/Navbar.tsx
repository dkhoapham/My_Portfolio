import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { LuFileUser } from "react-icons/lu";
import { useTheme } from "../../contexts/ThemeContext";
import {
  highlightNav,
  mobileNav,
  navHoverAnimation,
  autoCloseNav,
} from "./script";
import Logo from "../../assets/logo.svg?react";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const { dark, toggleThemeSwitchBtn } = useTheme();

  const btnRef = navHoverAnimation();
  const [open, setOpen] = useState(false);

  const navRef = autoCloseNav(setOpen);
  highlightNav();
  mobileNav();

  return (
    <header className="navClass">
      <nav className="nav" ref={navRef}>
        <div className="nav_left">
          <Link to="/">
            <Logo className="logo" onClick={() => setOpen(false)} />
          </Link>
        </div>

        <button
          className={`nav_toggle ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav_links ${open ? "active" : ""}`} ref={btnRef}>
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              .home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setOpen(false)}>
              .about
            </Link>
          </li>
          <li>
            <Link to="/works" onClick={() => setOpen(false)}>
              .works
            </Link>
          </li>
        </ul>

        <div className={`nav_right ${open ? "active" : ""}`}>
          <div className="theme_toggle_bg">
            <button className="theme_toggle_btn" onClick={toggleThemeSwitchBtn}>
              {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>

          <div className="resume_bg">
            <button className="resume_btn" onClick={() => navigate("/resume")}>
              <LuFileUser
                size={20}
                className="resume"
                onClick={() => setOpen(false)}
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
