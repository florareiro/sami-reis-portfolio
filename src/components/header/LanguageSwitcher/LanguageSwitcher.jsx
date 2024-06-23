import React from "react";
import { useAppContext } from "../../../hooks/AppContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useAppContext();

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "pt" : "en";
    setLanguage(newLanguage);
  };

  return (
    <div className="flex items-center">
      <button onClick={toggleLanguage}>
        {language === "pt" ? (
          <img src="./images/header/brasil.png" width={30} alt="" />
        ) : (
          <img src="./images/header/eua.png" width={30} alt="" />
        )}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
