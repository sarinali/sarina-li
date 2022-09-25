/* eslint-disable jsx-a11y/anchor-has-content */
import "./css/HomeDisplay.css";
import {GrAppleAppStore} from "react-icons/gr";
import {RiGooglePlayFill} from "react-icons/ri";
import {FiLink2} from "react-icons/fi";


function ProjectCard(props) {
    const technologiesList = props.technologies.split(" ");
    return (
        <div className="project-card-container">
            <div className="project-card">
                <img src={props.imgsrc} alt = "" className="image"></img>
                <div className="title">{props.projectName}</div>
                <div className="project-description">{props.tagLine}</div>
                <div className="button-row">
                    {props.iOS !== "/" &&
                        <a href={props.iOS} className="external-link">
                            <GrAppleAppStore size={30}></GrAppleAppStore>
                        </a>
                    }
                    {props.android !== "/" && 
                        <a href={props.android} className="external-link">
                            <RiGooglePlayFill size={30}></RiGooglePlayFill>
                        </a>
                    }
                    {props.web !== "/" &&
                        <a href={props.web} className = "external-link">
                            <FiLink2 size = {30}></FiLink2>
                        </a>
                    } 
                </div>
                <div className="technologies-row">
                    {technologiesList.map(function(name, index){
                    return <div key={index} className ="technology-item">{name}</div>;
                  })}
                </div>
                <div className="project-text">{props.description}</div>
            </div>
        </div>
    );
}

export default ProjectCard;