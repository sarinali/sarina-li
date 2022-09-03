import logo from './logo.svg';
import './App.css';
import './components/Header.js'
import Header from './components/Header.js';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
// import './Header.css';
import {useState} from 'react';

function App() {
  // document.body.style = 'background: #F3F3F3;'
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
    <div>
      <Header></Header>
    </div>
    </>
    </ThemeProvider>
  );
}

export default App;
