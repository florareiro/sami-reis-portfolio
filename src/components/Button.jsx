import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../hooks/AppContext";

const Button = ({ text, link, style, children }) => {
  const { darkMode } = useAppContext();
  return (
    <button
      className={`  ${
        darkMode ? "bg-darkmode-200" : "bg-lightmode-300 "
      } p-3 text-white flex items-center  rounded-full`}
    >
      <Link to={link} target="_blank" className={`${style} `}>
        {text}
      </Link>
      {children}
    </button>
  );
};

export default Button;
