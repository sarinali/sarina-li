import "./css/HomeDisplay.css";
import { AiOutlineArrowDown } from "react-icons/ai";

function DownArrow() {
    return (
        <div className="arrow-container">
            <div className="down-arrow"><AiOutlineArrowDown size = {30}></AiOutlineArrowDown></div>
        </div>
        
    );
}

export default DownArrow;