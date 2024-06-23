// AppContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

import data from "../assets/data.json";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");
  const [userLocation, setUserLocation] = useState(null);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        language,
        setLanguage,
        userLocation,
        setUserLocation,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
