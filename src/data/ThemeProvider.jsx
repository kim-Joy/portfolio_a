import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

// ThemeProvider 컴포넌트
export const ThemeProvider = ({ children }) => {
  const [defaultTheme, setDefaultTheme] = useState("theme_light");
  const [fontWeight, setFontWeight] = useState(false);

  // 테마 변경 핸들러
  const radioHandleThemeChange = (e) => {
    setDefaultTheme(e.target.value);
  };

  // 폰트 굵기 변경 핸들러
  const switchHandlerClick = () => {
    setFontWeight((prevState) => !prevState);
    if (!fontWeight) {
      document.body.classList.add("font--weight");
    } else {
      document.body.classList.remove("font--weight");
    }
  };

   const fontSettingHandler = () => {
    if (!fontWeight) {
      document.body.classList.add("font--setting");
    } else {
      document.body.classList.remove("font--setting");
    }

  };

  return (
    <ThemeContext.Provider
      value={{ defaultTheme, radioHandleThemeChange, fontWeight, switchHandlerClick, fontSettingHandler }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// useTheme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
