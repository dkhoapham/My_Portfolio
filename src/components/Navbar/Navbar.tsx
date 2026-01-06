import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo.svg?react";
import "./navbar.css";

function Navbar() {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    const html = document.documentElement;
    const newDark = html.classList.toggle("dark");
    localStorage.theme = newDark ? "dark" : "light";
    setDark(newDark);

    const btn = document.querySelector(".theme_toggle_btn") as HTMLElement;
    if (btn) {
      btn.classList.remove("animate");
      void btn.offsetWidth;
      btn.classList.add("animate");
    }
  };

  const btnRef = useRef<HTMLUListElement | null>(null);
  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };

    const handleLeave = () => {
      el.style.setProperty("--x", `-9999px`);
      el.style.setProperty("--y", `-9999px`);
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  useEffect(() => {
    const navbarToggle = document.querySelector(".nav_toggle");
    const navbarLinks = document.querySelector(".nav_links");
    const navDarkMode = document.querySelector(".nav_right");

    if (!navbarToggle || !navbarLinks || !navDarkMode) return;

    const handleClick = () => {
      navbarToggle.classList.toggle("active");
      navbarLinks.classList.toggle("active");
      navDarkMode.classList.toggle("active");
    };

    navbarToggle.addEventListener("click", handleClick);

    return () => {
      navbarToggle.removeEventListener("click", handleClick);
    };
  }, []);

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
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="nav_right">
          <button className="theme_toggle_btn" onClick={toggleTheme}>
            {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
