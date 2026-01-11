import type React from "react";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import { ThemeProvider } from "../../contexts/ThemeContext";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <NavBar />
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default Main;
