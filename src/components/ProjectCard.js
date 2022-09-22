import "./css/HomeDisplay.css";
import {AiFillGithub} from "react-icons/ai";


function ProjectCard() {
    return (
        <div className="project-card-container">
            <div className="project-card">
                <div className="image-container"></div>
                <div className="button-row">
                    <div className="button-container">
                        <a href="#"><AiFillGithub size = {30}></AiFillGithub></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;