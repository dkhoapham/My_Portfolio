import "./home.css";
import { TbBrandLinkedin, TbMailbox, TbBrandGithub } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}>
      <div className="bodyHome">
        <div className="hero">
          <h2
            style={{
              fontWeight: "100",
              fontSize: "30px",
              margin: "0",
            }}>
            Hello World,
          </h2>
          <h1
            style={{
              fontWeight: "100",
              fontSize: "60px",
              margin: "0",
            }}>
            I'm Khoa Pham!
          </h1>
          <div className="socialLinks">
            <button className="gmailBtn">
              <TbMailbox size={30} className="gmail" onClick={() => (window.location.href = "mailto:pham.dangkhoa.se@gmail.com")} />
            </button>
            <button className="githubBtn" onClick={() => window.open("https://github.com/dkhoapham", "_blank")}>
              <TbBrandGithub size={30} className="github" />
            </button>
            <button className="linkedinBtn" onClick={() => window.open("https://www.linkedin.com/in/dkhoapham", "_blank")}>
              <TbBrandLinkedin size={30} className="linkedin" />
            </button>
          </div>
          <button className="navToAbout" onClick={() => navigate("/about")}>
            .learn-About-Me?
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
