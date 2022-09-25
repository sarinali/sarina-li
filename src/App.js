import './App.css';
import './components/Header.js'
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import MainScreen from './components/MainScreen';
import ParticlesComponent from './components/Particles';

const LightTheme = {
  pageBackground: "white",
  titleColor: "rgb(2, 43, 35)",
  tagLineColor: "#a68069",
  textColor: "black",
  shadowColor: "#684736",
  // cardColor: "#fff4d9",
  cardColor: "#eadecf",
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
  const [theme, setTheme] = useState("light")

  
  return (
    <div className='App'>
      <ThemeProvider theme={themes[theme]}>
        <ParticlesComponent/>

          <MainScreen theme={theme} setTheme={setTheme} />
          <div className="footer">
            <div className='footer-content'>u reached the end. (ಥ﹏ಥ)<br></br>Sarina 2022</div>
          </div>
      </ThemeProvider>

    </div>
    
  );
}

export default App;