import { useNavigate } from "react-router-dom";
import "./about.css";
import profilePicture from "../../assets/profilePicture.jpg";
import {
  FaArrowRight,
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

function About() {
  const navigate = useNavigate();

  return (
    <div className="bodyAbout">
      <div className="biography">
        <div className="profileCard">
          <img className="profilePicture" src={profilePicture}></img>
          <h1 className="profileName">Khoa Pham</h1>
          <h3 className="profileNamePrefer">(Kevin)</h3>
          <span className="profileHighlight"></span>
          <div className="profileDirectory">
            <button className="toResume" onClick={() => navigate("/resume")}>
              .my-Resume
              <FaArrowRight />
            </button>
            <button className="toPortfolio" onClick={() => navigate("/works")}>
              .my-Portfolio
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="profileAbout">
          <h1 className="profileAboutTitle">.about-Me</h1>
          <p className="profileAboutPara1">
            &emsp;Hi there! I'm Khoa Pham, a sophomore at San Jose State
            University, majoring in Software Engineering. I'm passionate about
            building clean, intuitive, and reliable applications. My idea was
            driven by curiosity and innovation, and at the end of the day, I'm
            happy to turn it into a real, working product. Moreover, I aim to
            apply cutting-edge technology to solve real-world problems, such as
            healthcare and financial technology, and beyond.
            <br />
            <br />
            &emsp;Although technology is advancing at the blink of an eye, that
            progress comes with new complexity, inefficiency, and unintended
            consequences that can be reduced through careful thinking and
            intentional design. As a software engineering student, I use my
            growing knowledge of software design, problem-solving, and systems
            thinking to break down issues and create solutions that improve how
            people interact with technology.
            <br />
            <br />
            &emsp;I'm seeking teams that support engineering growth and empower
            builders to create products centered around real customer needs.
            <br />
            <br />
            &emsp;I'm currently seeking new opportunities. If you're interested
            in working together, I'd love to connect!
          </p>
        </div>
      </div>
      <div className="technology">
        <h1 className="technologyTitle">.my-Tech-Stack</h1>
        <div className="techStack">
          <div className="carouselLang">
            <div className="techStackLang">
              <span className="java">
                <FaJava size={35} /> Java
              </span>
              <span className="ts">
                <SiTypescript size={35} /> TypeScript
              </span>
              <span className="js">
                <SiJavascript size={35} /> JavaScript
              </span>
              <span className="html">
                <SiHtml5 size={35} /> HTML
              </span>
              <span className="css">
                <SiCss3 size={35} />
                CSS
              </span>
            </div>

            <div aria-hidden className="techStackLang">
              <span className="java">
                <FaJava size={35} /> Java
              </span>
              <span className="ts">
                <SiTypescript size={35} /> TypeScript
              </span>
              <span className="js">
                <SiJavascript size={35} /> JavaScript
              </span>
              <span className="html">
                <SiHtml5 size={35} /> HTML
              </span>
              <span className="css">
                <SiCss3 size={35} />
                CSS
              </span>
            </div>
          </div>

          <div className="carouselFramW">
            <div className="techStackFramW">
              <span className="react">
                <FaReact size={35} />
                React.js
              </span>
              <span className="nodeJs">
                <FaNodeJs size={35} />
                Node.js
              </span>
              <span className="express">
                <SiExpress size={35} />
                Express.js
              </span>
              <span className="tailwindCss">
                <SiTailwindcss size={35} />
                TailwindCSS
              </span>
              <span className="git">
                <FaGitAlt size={35} />
                Git
              </span>
              <span className="gitHub">
                <FaGithub size={35} />
                GitHub
              </span>
              <span className="mySql">
                <SiMysql size={35} />
                MySQL
              </span>
              <span className="postgreSql">
                <SiPostgresql size={35} />
                PostgreSQL
              </span>
              <span className="mongoDb">
                <SiMongodb size={35} />
                MongoDB
              </span>
            </div>

            <div aria-hidden className="techStackFramW">
              <span className="react">
                <FaReact size={35} />
                React.js
              </span>
              <span className="nodeJs">
                <FaNodeJs size={35} />
                Node.js
              </span>
              <span className="express">
                <SiExpress size={35} />
                Express.js
              </span>
              <span className="tailwindCss">
                <SiTailwindcss size={35} />
                TailwindCSS
              </span>
              <span className="git">
                <FaGitAlt size={35} />
                Git
              </span>
              <span className="gitHub">
                <FaGithub size={35} />
                GitHub
              </span>
              <span className="mySql">
                <SiMysql size={35} />
                MySQL
              </span>
              <span className="postgreSql">
                <SiPostgresql size={35} />
                PostgreSQL
              </span>
              <span className="mongoDb">
                <SiMongodb size={35} />
                MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
