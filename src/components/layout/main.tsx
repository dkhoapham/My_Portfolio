import type React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import About from "../About/About";
import Works from "../Works/Works";
import Resume from "../Resume/Resume";
import { ThemeProvider } from "../../contexts/ThemeContext";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default Main;
