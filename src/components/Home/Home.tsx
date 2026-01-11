import "./home.css";
import { LuFileUser } from "react-icons/lu";
import { TbBrandLinkedin, TbMailbox, TbBrandGithub } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bodyHome">
      <div className="hero">
        <h2
          style={{
            fontWeight: "100",
            fontSize: "30px",
            margin: "0",
          }}
        >
          Hello World,
        </h2>
        <h1
          style={{
            fontWeight: "100",
            fontSize: "60px",
            margin: "0",
            marginTop: "3px",
          }}
        >
          I'm Khoa Pham!
        </h1>
        <div className="socialLinks">
          <button className="gmailBtn">
            <TbMailbox
              size={30}
              className="gmail"
              onClick={() =>
                (window.location.href = "mailto:pham.dangkhoa.se@gmail.com")
              }
            />
          </button>
          <button
            className="githubBtn"
            onClick={() =>
              window.open("https://github.com/dkhoapham", "_blank")
            }
          >
            <TbBrandGithub size={30} className="github" />
          </button>
          <button
            className="linkedinBtn"
            onClick={() =>
              window.open("https://www.linkedin.com/in/dkhoapham", "_blank")
            }
          >
            <TbBrandLinkedin size={30} className="linkedin" />
          </button>
          <button
            className="resumeBtn"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1AlzKkw0Y1pcZjp7jNk8hpJtXPfqqnrjG/view?usp=drive_link",
                "_blank"
              )
            }
          >
            <LuFileUser size={30} className="resume" />
          </button>
        </div>
        <button className="navToAbout" onClick={() => navigate("/about")}>
          Learn About Me?
        </button>
      </div>
    </div>
  );
}

export default Home;
