import type React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Works from "../pages/Works/Works";
import Resume from "../pages/Resume/Resume";
import { ThemeProvider } from "../../contexts/ThemeContext";

const Main = () => {
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
