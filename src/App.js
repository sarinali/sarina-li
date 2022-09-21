import './App.css';
import './components/Header.js'
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import MainScreen from './components/MainScreen';
import Particles from 'react-tsparticles';
import ParticlesComponent from './components/Particles';

const LightTheme = {
  pageBackground: "white",
  titleColor: "rgb(2, 43, 35)",
  tagLineColor: "#8f4d39",
  textColor: "black",
  shadowColor: "#8a8a8a",
  cardColor: "#fff4d9",
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "rgb(0, 95, 78)",
  tagLineColor: "#d3ddab",
  shadowColor: "#1c1c1c",
  textColor: "white",
  cardColor: "#171c46"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

function App() {
  const [theme, setTheme] = useState("dark")

  
  return (
    <div className='App'>
      <ThemeProvider theme={themes[theme]}>
        <ParticlesComponent/>

          <MainScreen theme={theme} setTheme={setTheme} />
      </ThemeProvider>

    </div>
    
  );
}

export default App;