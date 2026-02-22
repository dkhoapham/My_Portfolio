import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Works from "../pages/Works/Works";
import Resume from "../pages/Resume/Resume";
import { ThemeProvider } from "../../contexts/ThemeContext";
import { AnimatePresence } from "framer-motion";

const Main = () => {
  const location = useLocation();

  return (
    <ThemeProvider>
      <NavBar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </ThemeProvider>
  );
};

export default Main;
