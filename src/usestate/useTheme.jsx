import { useContext } from "react";
import ThemeContext from "data/ThemeProvider";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
