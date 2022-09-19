import styled from "styled-components";
import LofiGirl from "./assets/lofigirl.png";
import "./css/HomeDisplay.css";

const Name = styled.div`
    margin-left: 5%;
    display: flex;
    width: 100%;
    align-items: start;
    justify-content:start;
    font-weight: bold;
    font-size: calc(4vw + 4vh + 2vmin);
    // -webkit-text-fill-color: transparent;
    color: ${props => props.theme.tagLineColor};
    -webkit-text-stroke-color: ${props => props.theme.tagLineColor};
    text-shadow: 15px 15px 10px ${props => props.theme.shadowColor};
`;

const IntroMessage = styled.div`
    margin-left: 5%;
    width: 100%;
    display: flex;
    justify-content: start;
    // margin-left: 5%;
    font-size: calc(2vw + 2vh + 1vmin);;
    font-weight: bold;
    color: ${props => props.theme.textColor};
`;




function HomeDisplay() {
    return (
        <div className= "home-container">
            <div className= "lofi-girl-container">
                <img  src={LofiGirl}  alt="fireSpot" className="lofi-girl"/>
            </div>
            <div className= "name-container">
                <IntroMessage>hi new friend. i'm</IntroMessage>
                <Name>sarina li</Name>
            </div>
        </div>
    );
}

export default HomeDisplay;