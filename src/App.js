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
  titleColor: "#dc658b",
  tagLineColor: "black",
  textColor: "black",
  
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender"
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
