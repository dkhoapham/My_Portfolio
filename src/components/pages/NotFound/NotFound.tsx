import { motion } from "framer-motion";
import "./NotFound.css";
import notfoundGif from "../../../assets/gif/404.gif";

const NotFound = () => {
  return (
    <motion.div className="notfound-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="notfound-content">
        <img src={notfoundGif} alt="404 animation" className="notfound-gif" />
        <a href="/" className="home-btn">
          Go Home?
        </a>
      </div>
    </motion.div>
  );
};

export default NotFound;
