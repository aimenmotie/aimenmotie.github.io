import React, { useEffect, useState } from "react";
import Preloader from "./Components/Preloader";
import { GlobalStyle } from "./GlobalStyle/Globalstyle";
import Cursor from "./Components/Cursor";
import Content from "./Content";
import Particle from "./Components/Particle";
import { useGlobalContext } from "./Context";
import { ThemeProvider } from "styled-components";

import { SELECTED_LAYOUT } from "./Config/Config";
import { getActiveTheme } from "./Config/LayoutPresets";

const App = () => {
  const [loading, setLoading] = useState(false);
  const { isdarkMode } = useGlobalContext();

  // Dynamically select theme based on Config.js settings
  const theme = getActiveTheme(SELECTED_LAYOUT, isdarkMode);

  // Add calculated properties for backward compatibility with GlobalStyle
  const activeTheme = {
    ...theme,
    colors: {
      black: "#000",
      white: "#fff",
      darkgrey: "#323232",
      grey: "#999999",
      lightgrey: "#cccccc",
    },
    highlight: {
      primary: theme.highlight,
      secondary: isdarkMode ? "rgb(50, 50, 50)" : "#f5f5f5",
      rgb: {
        primary: theme.highlightRgb,
        secondary: isdarkMode ? "50, 50, 50" : "245, 245, 245"
      }
    },
    title: {
      primary: theme.titlePrimary,
      secondary: theme.titleSecondary,
    },
    bg: {
      primary: theme.bg
    },
    gradient: {
      bgGradient: theme.bgGradient,
      gradient1: `linear-gradient(to bottom right, ${theme.highlight}, ${theme.bg})`,
      gradient2: isdarkMode 
        ? "radial-gradient(ellipse at left, #333 0%, rgba(26, 26, 29, 0) 70%)"
        : "radial-gradient(ellipse at left, #e0e0e0 0%, rgba(255, 255, 255, 0) 70%)",
    },
    border: {
      gradient1: `radial-gradient(ellipse at top, ${theme.highlight}4d 0%, rgba(255, 255, 255, 0) 70%)`,
      gradient2: `radial-gradient(at left center, ${theme.highlight}33 0%, rgba(255, 255, 255, 0) 70%)`,
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyle />
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Cursor />
          <div className={`app ${isdarkMode ? "dark" : "light"} overflow-hidden`}>
            <Particle />
            <Content />
          </div>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
