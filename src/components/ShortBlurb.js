import "./css/HomeDisplay.css";
import styled from "styled-components";
import Plant from "./assets/plant.jpg"

const TextParagraph = styled.div`
    padding: 20px;
    border-radius: 30px;
    margin: 20px;
    background-color: ${props => props.theme.cardColor};
    color: ${props => props.theme.textColor};
    
    
`;

function ShortBlurb() {
    return (
        <div className="blurb-container">
            <TextParagraph className="blurb">
                <div className="text-plant-container">
                hello visitor, hope you enjoy your stay here at sarinali.me \ (•◡•) / <br></br> <br></br>i am a student at UofT studying computer science with an interest in graphics. i like coding in JavaScript, Python, Java and Dart using the Flutter or ReactJS frameworks. you can find me at robarts studying or at the climbing gym and badminton court. i'm currently learning: chinese, blender, ray tracing, how to beat my friend in badminton singles and how to solve the most basic ctf challenges ᕙ(⇀‸↼‶)ᕗ <br></br> <br></br>please feel free to scroll through my website to explore some of my work. i am working hard on adding more. enjoy!~
                <img src={Plant} alt="plant" className="plant"></img>

                </div>
                
            </TextParagraph>
            {/* <div className="plant-container"> */}
            
            {/* </div> */}
        </div>
    );
}

export default ShortBlurb;