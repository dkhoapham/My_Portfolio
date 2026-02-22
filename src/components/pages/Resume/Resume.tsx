import "./resume.css";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
export const resumeViewLink = "https://drive.google.com/file/d/1bZMpspYgzPKz0yJ2TQR6zR5JR9YvQvsr/preview";

function Resume() {
  const resumeDownLoadLink = "https://drive.google.com/uc?export=download&id=1bZMpspYgzPKz0yJ2TQR6zR5JR9YvQvsr";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}>
      <div className="bodyResume">
        <h1 className="titleResume">{`My Resume 🫡`}</h1>
        <button
          className="downloadBtnResume"
          onClick={() => {
            const a = document.createElement("a");
            a.href = resumeDownLoadLink;
            a.download = "Khoa's_Resume.pdf";
            a.click();
          }}>
          {`Download `}
          <FaDownload className="downloadIcon" />
        </button>
        <iframe className="frameResume" src={resumeViewLink} />
      </div>
    </motion.div>
  );
}

export default Resume;
