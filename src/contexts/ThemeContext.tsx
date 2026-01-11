import { createContext, useContext, useState } from "react";

type ThemeContextType = {
  dark: boolean;
  toggleTheme: () => void;
  toggleThemeSwitchBtn: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    const html = document.documentElement;
    const newDark = html.classList.toggle("dark");
    localStorage.theme = newDark ? "dark" : "light";
    setDark(newDark);
  };

  const toggleThemeSwitchBtn = () => {
    toggleTheme();
    const btn = document.querySelector(".theme_toggle_btn") as HTMLElement;
    if (btn) {
      btn.classList.remove("animate");
      void btn.offsetWidth;
      btn.classList.add("animate");
    }
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme, toggleThemeSwitchBtn }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};
