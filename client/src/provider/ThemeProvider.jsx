import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { node } from "prop-types";

const ThemeContext = React.createContext(null);

const ThemeProvider = ({ children }) => {
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useState(prefersDarkMode);

  const toggleDarkMode = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  useEffect(() => {
    setIsDark(prefersDarkMode);
  }, [prefersDarkMode]);

  const theme = useMemo(
    () => createTheme({ palette: { mode: isDark ? "dark" : "light" } }),
    [isDark]
  );

  const value = useMemo(
    () => ({ isDark, toggleDarkMode }),
    [isDark, toggleDarkMode]
  );

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: node.isRequired,
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be within a MuiThemeProvider");
  return context;
};

export default ThemeProvider;
