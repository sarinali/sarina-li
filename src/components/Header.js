import "./css/Header.css";
import ToggleButton from "./ToggleButton";

function Header() {
  return (
    <div className="headerwrapper">
      <div className="toggledisplaymode">
        <ToggleButton></ToggleButton>
      </div>
      <div className="headermain">
        <a href="#">Home</a>
        <a href="#">Experience</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}

export default Header;
