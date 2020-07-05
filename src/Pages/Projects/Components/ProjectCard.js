import React from "react";
import "../index.scss";

const ProjectCard = (props) => (
  <div className="project-card-container">
    <div className="project-card-img-container">
      <img className="project-card-img" src={props.imageURL}  alt={`Project: ${props.title}`}/>
    </div>
    <div className="project-card-content">
      <h5>{props.title}</h5>
      <p><div className="project-card-badge">{props.location}</div>{` ${props.description.substring(0, 140)}...`}</p>
    </div>
  </div>
);


export default ProjectCard;
