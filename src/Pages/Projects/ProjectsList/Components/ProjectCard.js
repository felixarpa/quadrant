import React from "react";
import "../index.scss";

const navigateToProject = (projectId) => {
  const pathname = window.location.pathname;
  let appendingPath = `${projectId}`;
  if (pathname[pathname.length - 1] !== "/") {
    appendingPath = `/${appendingPath}`;
  }
  window.location.pathname += appendingPath;
};

const ProjectCard = (props) => (
  <div
    className="project-card-container project-clickable-element"
    onClick={() => navigateToProject(props.projectId)}>
    <div className="project-card-img-container">
      <img className="project-img project-card-img" src={props.placeholder}  alt={`Project: ${props.title}`}/>
    </div>
    <div className="project-card-content">
      <h5>{props.title}</h5>
      <p><span className="project-badge">{props.location}</span>{` ${props.description.substring(0, 140)}...`}</p>
    </div>
  </div>
);


export default ProjectCard;
