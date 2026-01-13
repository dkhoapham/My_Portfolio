import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

export function highlightNav() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname || "/";
    const oldActive = document.querySelector(".nav_links li.active");
    const newActive = [...document.querySelectorAll(".nav_links li")].find(
      (li) => {
        const a = li.querySelector("a");
        return a && a.getAttribute("href") === currentPath;
      }
    );

    if (oldActive && oldActive !== newActive) {
      oldActive.classList.add("fade-out");

      setTimeout(() => {
        oldActive.classList.remove("fade-out");
        oldActive.classList.remove("active");

        if (newActive) newActive.classList.add("active");
      }, 150);

      return;
    }
    if (newActive) newActive.classList.add("active");
  }, [location.pathname]);
}

export function mobileNav() {
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
}

export function autoCloseNav(setOpen: (v: boolean) => void) {
  const navRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [setOpen]);

  return navRef;
}

export function navHoverAnimation() {
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

  return btnRef;
}
