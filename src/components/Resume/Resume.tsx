import "./resume.css";
import { FaDownload } from "react-icons/fa";
export const resumeViewLink =
  "https://drive.google.com/file/d/1bZMpspYgzPKz0yJ2TQR6zR5JR9YvQvsr/preview";

function Resume() {
  const resumeDownLoadLink =
    "https://drive.google.com/uc?export=download&id=1bZMpspYgzPKz0yJ2TQR6zR5JR9YvQvsr";

  return (
    <div className="bodyResume">
      <h1 className="titleResume">{`My Resume 🫡`}</h1>
      <button
        className="downloadBtnResume"
        onClick={() => {
          const a = document.createElement("a");
          a.href = resumeDownLoadLink;
          a.download = "Khoa's_Resume.pdf";
          a.click();
        }}
      >
        {`Download `}
        <FaDownload className="downloadIcon" />
      </button>
      <iframe className="frameResume" src={resumeViewLink} />
    </div>
  );
}

export default Resume;
