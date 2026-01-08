import type React from "react";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <Footer />
    </>
  );
};

export default Main;
