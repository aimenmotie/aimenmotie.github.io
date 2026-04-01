import React, { useEffect, useState } from "react";
import Preloader from "./Components/Preloader";
import { GlobalStyle } from "./GlobalStyle/Globalstyle";
import Cursor from "./Components/Cursor";
import Content from "./Content";
import Particle from "./Components/Particle";
import { useGlobalContext } from "./Context";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [loading, setLoading] = useState(false);

  const { isdarkMode } = useGlobalContext();
  // console.log(isdarkMode);

  const lightTheme = {
    colors: {
      black: "#000",
      white: "#fff",
      fandango: "#C13584",
      chambreyblue: "#3a559f",
      gold: "gold",
      darkgrey: "#323232",
      grey: "#999999",
      lightgrey: "#cccccc",
      varylightgrey: " #eeeeee",
      deepskyblue : "#00BFFF",
    },
    bg: {
      primary: "#fff"
    },
    highlight: {
      primary: "#d32f2f", /* Professional Academic Red */
      secondary: "#f5f5f5",
      rgb: {
        primary: "211, 47, 47",
        secondary: "245, 245, 245"
      }
    },
    title: {
      primary: "0,0,0",
      secondary: "60, 60, 60",
    },
    icon: {
      primary: "#fff",
    },
    gradient: {
      bgGradient: "linear-gradient(to bottom right, #f8f9fa 0%, #e0e0e0 100%)",
      gradient1: "linear-gradient(135deg, rgba(211, 47, 47, 0.2) 0%, rgba(211, 47, 47, 0.01) 100%)",
      gradient2: "radial-gradient(ellipse at left, #e0e0e0 0%, rgba(255, 255, 255, 0) 70%)",
    },
    border: {
      gradient1: "radial-gradient(ellipse at center, #d32f2f 0%, rgba(255, 255, 255, 0) 70%)",
      gradient2: "radial-gradient(ellipse at left, #d32f2f 0%, rgba(255, 255, 255, 0) 70%)",
    }
  };

  const darkTheme = {
    colors: {
      black: "#000",
      white: "#fff",
      fandango: "#C13584",
      chambreyblue: "#3a559f",
      gold: "gold",
      darkgrey: "#323232",
      grey: "#999999",
      lightgrey: "#cccccc",
      varylightgrey: " #eeeeee",
      deepskyblue: "#00BFFF",
    },
    bg: {
      primary: "#1a1a1d" /* Deep Black-Grey */
    },
    highlight: {
      primary: "#ff5252", /* High-contrast Vibrant Red */
      secondary: "rgb(50, 50, 50)",
      rgb: {
        primary: "255, 82, 82",
        secondary: "50, 50, 50"
      }
    },
    title: {
      primary: "255, 255, 255",
      secondary: "160, 160, 160",
    },
    icon: {
      primary: "#fff",
    },
    gradient: {
      bgGradient: "linear-gradient(to bottom right, #0f0f12 0%, #1a1a1d 100%)",
      gradient1: "linear-gradient(to bottom right, #ff5252 0%, #1a1a1d 100%)",
      gradient2: "radial-gradient(ellipse at left, #333 0%, rgba(26, 26, 29, 0) 70%)",
    },
    border: {
      gradient1: "radial-gradient(ellipse at top, rgba(255, 82, 82, 0.3) 0%, rgba(255, 255, 255, 0) 70%)",
      gradient2: "radial-gradient(at left center, rgba(255, 82, 82, 0.2) 0%, rgba(255, 255, 255, 0) 70%);",
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <ThemeProvider theme={isdarkMode ? darkTheme : lightTheme}>
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
