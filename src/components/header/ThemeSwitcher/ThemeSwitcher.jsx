import React from "react";
import { useAppContext } from "../../../hooks/AppContext";
import { FiSun, FiMoon } from "react-icons/fi";
const ThemeSwitcher = () => {
  const { darkMode, setDarkMode } = useAppContext();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex items-center">
      <button onClick={toggleDarkMode}>
        {darkMode ? <FiSun size={30} /> : <FiMoon size={30} />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
