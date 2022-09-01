import './css/ToggleButton.css';

function ToggleButton() {
    return <a className = "displayMode" onClick={toggleDisplay}></a>
}

export default ToggleButton;

function toggleDisplay() {
    console.log("hello");
}