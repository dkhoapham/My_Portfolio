import { useNavigate } from "react-router-dom";
import "./about.css";
import {
  CssIcon,
  ExpressIcon,
  GitIcon,
  GithubIcon,
  HtmlIcon,
  JavaIcon,
  JavaScriptIcon,
  MongoIcon,
  MySqlIcon,
  NodeJsIcon,
  PostgresqlIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
  profilePicture,
  FaArrowRight,
} from "./iconImporter";

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
            &emsp;Hi there! I'm Khoa Pham, a sophomore at San Jose State University, majoring in Software Engineering. I'm passionate about building
            clean, intuitive, and reliable applications. My idea was driven by curiosity and innovation, and at the end of the day, I'm happy to turn
            it into a real, working product. Moreover, I aim to apply cutting-edge technology to solve real-world problems, such as healthcare and
            financial technology, and beyond.
            <br />
            <br />
            &emsp;Although technology is advancing at the blink of an eye, that progress comes with new complexity, inefficiency, and unintended
            consequences that can be reduced through careful thinking and intentional design. As a software engineering student, I use my growing
            knowledge of software design, problem-solving, and systems thinking to break down issues and create solutions that improve how people
            interact with technology.
            <br />
            <br />
            &emsp;I'm seeking teams that support engineering growth and empower builders to create products centered around real customer needs.
            <br />
            <br />
            &emsp;I'm currently seeking new opportunities. If you're interested in working together, I'd love to connect!
          </p>
        </div>
      </div>
      <div className="technology">
        <h1 className="technologyTitle">.my-Tech-Stack</h1>
        <div className="techStack">
          <div className="carouselLang">
            <div className="techStackLang">
              <span className="java">
                <JavaIcon className="icon" />
                Java
              </span>
              <span className="ts">
                <TypeScriptIcon className="icon" />
                TypeScript
              </span>
              <span className="js">
                <JavaScriptIcon className="icon" />
                JavaScript
              </span>
              <span className="html">
                <HtmlIcon className="icon" />
                HTML
              </span>
              <span className="css">
                <CssIcon className="icon" />
                CSS
              </span>
            </div>

            <div aria-hidden className="techStackLang">
              <span className="java">
                <JavaIcon className="icon" />
                Java
              </span>
              <span className="ts">
                <TypeScriptIcon className="icon" />
                TypeScript
              </span>
              <span className="js">
                <JavaScriptIcon className="icon" />
                JavaScript
              </span>
              <span className="html">
                <HtmlIcon className="icon" />
                HTML
              </span>
              <span className="css">
                <CssIcon className="icon" />
                CSS
              </span>
            </div>
          </div>

          <div className="carouselFramW">
            <div className="techStackFramW">
              <span className="react">
                <ReactIcon className="icon" />
                React.js
              </span>
              <span className="nodeJs">
                <NodeJsIcon className="icon" />
                Node.js
              </span>
              <span className="express">
                <ExpressIcon className="icon" fill="var(--express)" />
                Express.js
              </span>
              <span className="tailwindCss">
                <TailwindIcon className="icon" />
                TailwindCSS
              </span>
              <span className="git">
                <GitIcon className="icon" />
                Git
              </span>
              <span className="gitHub">
                <GithubIcon className="icon" fill="var(--git)" />
                GitHub
              </span>
              <span className="mySql">
                <MySqlIcon className="icon" />
                MySQL
              </span>
              <span className="postgreSql">
                <PostgresqlIcon className="icon" />
                PostgreSQL
              </span>
              <span className="mongoDb">
                <MongoIcon className="icon" />
                MongoDB
              </span>
            </div>

            <div aria-hidden className="techStackFramW">
              <span className="react">
                <ReactIcon className="icon" />
                React.js
              </span>
              <span className="nodeJs">
                <NodeJsIcon className="icon" />
                Node.js
              </span>
              <span className="express">
                <ExpressIcon className="icon" fill="var(--express)" />
                Express.js
              </span>
              <span className="tailwindCss">
                <TailwindIcon className="icon" />
                TailwindCSS
              </span>
              <span className="git">
                <GitIcon className="icon" />
                Git
              </span>
              <span className="gitHub">
                <GithubIcon className="icon" fill="var(--git)" />
                GitHub
              </span>
              <span className="mySql">
                <MySqlIcon className="icon" />
                MySQL
              </span>
              <span className="postgreSql">
                <PostgresqlIcon className="icon" />
                PostgreSQL
              </span>
              <span className="mongoDb">
                <MongoIcon className="icon" />
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
