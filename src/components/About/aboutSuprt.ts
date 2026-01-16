import { useState, useEffect } from "react";

import { FaArrowRight } from "react-icons/fa";
import profilePicture from "../../assets/profilePicture.jpg";
import CssIcon from "../../assets/techStackIcon/css3.svg?react";
import ExpressIcon from "../../assets/techStackIcon/express.svg?react";
import GitIcon from "../../assets/techStackIcon/git.svg?react";
import GithubIcon from "../../assets/techStackIcon/github.svg?react";
import HtmlIcon from "../../assets/techStackIcon/html5.svg?react";
import JavaIcon from "../../assets/techStackIcon/java.svg?react";
import JavaScriptIcon from "../../assets/techStackIcon/javascript.svg?react";
import MongoIcon from "../../assets/techStackIcon/mongodb.svg?react";
import MySqlIcon from "../../assets/techStackIcon/mysql.svg?react";
import NodeJsIcon from "../../assets/techStackIcon/nodejs.svg?react";
import PostgresqlIcon from "../../assets/techStackIcon/postgresql.svg?react";
import ReactIcon from "../../assets/techStackIcon/react.svg?react";
import TailwindIcon from "../../assets/techStackIcon/tailwindcss.svg?react";
import TypeScriptIcon from "../../assets/techStackIcon/typescript.svg?react";

export {
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
};

export const useRotatingText = (items: string[], delay = 3000) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, delay);
    return () => clearInterval(id);
  }, [items, delay]);
  return items[index];
};

export const quotes = [
  { text: "If you can't make it good, at least make it look good.", author: "Bill Gates" },
  { text: "Never stop asking questions and seeking answers. Curiosity fuels progress.", author: "Jensen Huang" },
  { text: "You can’t connect the dots looking forward; you can only connect them looking backward.", author: "Steve Jobs" },
  { text: "Failure is not the end, it’s an opportunity to learn and grow.", author: "Jensen Huang" },
  { text: "Quality is more important than quantity. One home run is much better than two doubles.", author: "Steve Jobs" },
  {
    text: "Success is a work in progress. It’s not about achieving a goal; it’s about constantly improving and pushing boundaries.",
    author: "Jensen Huang",
  },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
];
