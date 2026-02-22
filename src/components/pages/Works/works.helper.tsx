import "./works.style.css";
import { GoDotFill } from "react-icons/go";
import { BsGearFill } from "react-icons/bs";
import { FaLink, FaGithub } from "react-icons/fa6";

export function liveStatus() {
  return (
    <>
      <span className="progress-dot-container">
        <GoDotFill className="progress-dot" />
        Live
      </span>
    </>
  );
}

export function buildingStatus() {
  return (
    <>
      <span className="progress-gear-container">
        <BsGearFill className="progress-gear" />
        Building
      </span>
    </>
  );
}

export function githubLink() {
  return (
    <>
      <FaGithub className="git-container" size={25} />
      GitHub
    </>
  );
}

export function liveWebLink() {
  return (
    <>
      <FaLink className="live-web-container" size={25} />
      Visit
    </>
  );
}
