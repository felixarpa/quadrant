import React from "react";
import "../index.scss";

const ProjectCard = (props) => (
  <div className="project-card-container project-clickable-element">
    <div className="project-card-img-container">
      <img className="project-img project-card-img" src={props.imageURL}  alt={`Project: ${props.title}`}/>
    </div>
    <div className="project-card-content">
      <h5>{props.title}</h5>
      <p><span className="project-badge">{props.location}</span>{` ${props.description.substring(0, 140)}...`}</p>
    </div>
  </div>
);


export default ProjectCard;
