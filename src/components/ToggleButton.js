import styled from 'styled-components';
import './css/ToggleButton.css';
import './Themes.js';

const Button = styled.button`
    background: ${({ theme }) => theme.button_colour};
    border-color: ${({ theme }) => theme.border_colour};
    border: none;
    box-shadow: ${({ theme }) => theme.button_boxshadow};
`;

function ToggleButton() {
    return <Button className = "displayMode" onClick={toggleDisplay}></Button>
}

export default ToggleButton;

function toggleDisplay() {
    console.log("hello");
}