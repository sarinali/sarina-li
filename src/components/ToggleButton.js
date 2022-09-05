import styled from 'styled-components';
import './css/ToggleButton.css';
import './Themes.js';
import {useState} from 'react';

const Button = styled.button`
    background: ${({ theme }) => theme.button_colour};
    border-color: ${({ theme }) => theme.border_colour};
    border: none;
    box-shadow: ${({ theme }) => theme.button_boxshadow};
`;

function ToggleButton() {
    const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    console.log("hello");
    theme === 'light' ? setTheme('dark') : setTheme('light') }
    return <Button className = "displayMode" onClick={themeToggler}></Button>
}

export default ToggleButton;
