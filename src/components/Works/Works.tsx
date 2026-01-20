import "./works.css";

import { BsGearFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { FaLink, FaGithub } from "react-icons/fa6";

function Works() {
  return (
    <div className="bodyWorks">
      {/*<section className="displayExperiences"></section> ==> To be updated*/}
      <section className="displayProjects">
        <h1
          style={{
            margin: "0",

            width: "765px",
            textAlign: "start",
            textIndent: "10px",
            fontFamily: "'Chewy', system-ui",
            fontWeight: "500",
            lineHeight: "normal",
          }}>
          .things-I've-Made
        </h1>
        <div className="projects">
          <div className="project-card">
            <div className="projectImage">
              <span className="progressDotContainer">
                <GoDotFill className="progressDot" />
                Live
              </span>
            </div>
            <div className="projectDescription">
              <h1>Project 1</h1>
              <p>This is an example</p>
            </div>
            <div className="projectTechStack">
              <span>html</span>
              <span>css</span>
              <span>javascript</span>
            </div>
            <div className="divider"></div>
            <div className="proofLinks">
              <span className="disabled" onClick={() => window.open("https://google.com/", "_blank")}>
                <FaGithub className="gitLink" size={25} />
                GitHub
              </span>
              <span className="disabled" onClick={() => window.open("https://google.com/", "_blank")}>
                <FaLink className="webLink" size={25} />
                Visit
              </span>
            </div>
          </div>
          <div className="project-card coming-soon">
            <div className="projectImage">
              <span className="progressGearContainer">
                <BsGearFill className="progressGear" />
                Building
              </span>
            </div>
            <div className="projectDescription">
              <h1>Project 2</h1>
              <p>This is an example</p>
            </div>
            <div className="projectTechStack">
              <span>html</span>
              <span>css</span>
              <span>javascript</span>
            </div>
            <div className="divider"></div>
            <div className="proofLinks">
              <span className="disabled" onClick={() => window.open("https://google.com/", "_blank")}>
                <FaGithub className="gitLink" size={25} />
                GitHub
              </span>
              <span className="disabled" onClick={() => window.open("https://google.com/", "_blank")}>
                <FaLink className="webLink" size={25} />
                Visit
              </span>
            </div>
          </div>
          <div className="project-card coming-soon">
            <div className="projectImage">
              <span className="progressGearContainer">
                <BsGearFill className="progressGear" />
                Building
              </span>
            </div>
            <div className="projectDescription">
              <h1>Project 3</h1>
              <p>This is an example</p>
            </div>
            <div className="projectTechStack">
              <span>html</span>
              <span>css</span>
              <span>javascript</span>
            </div>
            <div className="divider"></div>
            <div className="proofLinks">
              <span className="disabled" onClick={() => window.open("https://google.com/", "_blank")}>
                <FaGithub className="gitLink" size={25} />
                GitHub
              </span>
              <span className="disabled" onClick={() => window.open("https://google.com/", "_blank")}>
                <FaLink className="webLink" size={25} />
                Visit
              </span>
            </div>
          </div>
          <div className="project-card coming-soon">
            <div className="projectImage">
              <span className="progressGearContainer">
                <BsGearFill className="progressGear" />
                Building
              </span>
            </div>
            <div className="projectDescription">
              <h1>Project 4</h1>
              <p>This is an example</p>
            </div>
            <div className="projectTechStack">
              <span>html</span>
              <span>css</span>
              <span>javascript</span>
            </div>
            <div className="divider"></div>
            <div className="proofLinks">
              <span className="disabled" onClick={() => window.open("https://google.com/", "_blank")}>
                <FaGithub className="gitLink" size={25} />
                GitHub
              </span>
              <span className="disabled" onClick={() => window.open("https://google.com/", "_blank")}>
                <FaLink className="webLink" size={25} />
                Visit
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Works;
