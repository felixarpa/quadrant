import React from "react";
import "../index.scss";

const ProjectItem = (props) => (
  <div className="project-item-container project-clickable-element">
    <div className="project-item-img-container">
      <img className="project-img project-item-img" src={props.imageURL}  alt={`Project: ${props.title}`}/>
    </div>
    <div className="project-item-content">
      <h5>{props.title}</h5>
      <p><span className="project-badge">{props.location}</span>{` ${props.description.substring(0, 140)}...`}</p>
    </div>
  </div>
);


export default ProjectItem;
