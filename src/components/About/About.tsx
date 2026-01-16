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
  useRotatingText,
  quotes,
} from "./aboutSuprt";

function About() {
  const navigate = useNavigate();
  const title = useRotatingText(["Software Engineer", "Full Stack Developer", "Problem Solving Enthusiast", "Lifelong Learner"]);
  const todayIndex = new Date().getDate() % quotes.length;
  const quote = quotes[5];

  return (
    <div className="bodyAbout">
      <div className="biography">
        <div className="profileCard">
          <p className="dailyQuote">
            <span className="quoteLine">
              “{quote.text}” — {quote.author}
            </span>
          </p>
          <img className="profilePicture" src={profilePicture}></img>
          <h1 className="profileName">Khoa Pham</h1>
          <h3 className="profileNamePrefer">(Kevin)</h3>
          <span className="profileHighlight" data-text={title} key={title}></span>
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
          <p className="profileAboutPara">
            Hi there! I'm <strong>Khoa Pham</strong>, a sophomore at <strong>San Jose State University</strong>, majoring in{" "}
            <strong>Software Engineering</strong>. I'm passionate about building <strong>clean, intuitive, and reliable applications</strong>. My idea
            was driven by <em>curiosity</em> and <em>innovation</em>, and at the end of the day, I'm happy to turn it into a{" "}
            <strong>real, working product</strong>. Moreover, I aim to apply cutting-edge technology to solve real-world problems, such as{" "}
            <u>healthcare</u> and <u>financial technology</u>, and beyond.
            <br />
            Although technology is advancing at the blink of an eye, that progress comes with{" "}
            <strong>new complexity, inefficiency, and unintended consequences</strong> that can be reduced through <strong>careful thinking</strong>{" "}
            and <strong>intentional design</strong>. As a software engineering student, I use my growing knowledge of <strong>software design</strong>
            ,<strong>problem-solving</strong>, and <strong>systems thinking</strong> to break down issues and create solutions that improve how people
            interact with technology.
            <br />
            I'm seeking teams that <strong>support engineering growth</strong> and <strong>empower builders</strong> to create products centered
            around <strong>real customer needs</strong>.
            <br />
            I'm currently seeking <strong>new opportunities</strong>. If you're interested in working together, <em>I'd love to connect!</em>
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
