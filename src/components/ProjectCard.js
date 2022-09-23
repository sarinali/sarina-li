import "./css/HomeDisplay.css";
import {AiFillGithub} from "react-icons/ai";
import MarkhamTrails from "./assets/trailsmockup.png";


function ProjectCard() {
    return (
        <div className="project-card-container">
            <div className="project-card">
                <div className="image-container"></div>
                {/* <div className="button-row"> */}
                    {/* <div className="button-container"> */}
                    <img src={MarkhamTrails} alt = "" className="markham-trails"></img>
                    <div className="title"></div>
                        {/* <a href="#"><AiFillGithub color="#a68069" size = {30}></AiFillGithub></a> */}
                    {/* </div> */}
                {/* </div> */}
            </div>
        </div>
    );
}

export default ProjectCard;