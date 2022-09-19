import logo from './logo.svg';
import './App.css';
import './components/Header.js'
import Header from './components/Header.js';
import {useState} from "react";
import Splash from "./components/MainScreen";
import {ThemeProvider} from "styled-components";
import MainScreen from './components/MainScreen';

const LightTheme = {
  pageBackground: "white",
  titleColor: "rgb(2, 43, 35)",
  tagLineColor: "#8f4d39",
  textColor: "black",
  shadowColor: "#8a8a8a",
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "rgb(0, 95, 78)",
  tagLineColor: "#d3ddab",
  shadowColor: "#1c1c1c",
  textColor: "white"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <ThemeProvider theme={themes[theme]}>
      <MainScreen theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
