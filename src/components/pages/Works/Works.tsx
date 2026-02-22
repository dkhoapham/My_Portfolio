import "./works.style.css";
import { projects } from "../../../data/works.data";
import { liveStatus, buildingStatus, githubLink, liveWebLink } from "./works.helper";

function Works() {
  return (
    <div className="work-container">
      {/*<section className="experiences-section"></section> ==> To be updated*/}
      <section className="projects-section">
        <h1 className="projects-heading">.things-I've-Made</h1>
        <div className="projects">
          {projects.map((p, i) => (
            <div className={`project-cards ${p.status === "building" ? "disabled-card" : ""}`}>
              <div className="project-image" style={{ cursor: "default" }}>
                {p.status === "live" ? liveStatus() : buildingStatus()}
              </div>
              <div className="project-description">
                <h1>{p.title}</h1> <p>{p.description}</p>
              </div>
              <div className="project-tech-stack">
                {p.tech.map((t) => (
                  <span key={t} style={{ cursor: "pointer" }}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="divider"></div>
              <div className="project-links">
                <span className={p.disabledGit === "true" ? "disabled" : ""} onClick={() => window.open(p.github, "_blank")}>
                  {githubLink()}
                </span>
                <span className={p.disabledWeb === "true" ? "disabled" : ""} onClick={() => window.open(p.live, "_blank")}>
                  {liveWebLink()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Works;
