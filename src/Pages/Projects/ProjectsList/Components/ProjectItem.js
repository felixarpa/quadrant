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

const ProjectItem = (props) => (
  <div
    className="project-item-container project-clickable-element"
    onClick={() => navigateToProject(props.projectId)}>
    <div className="project-item-img-container">
      <img className="project-img project-item-img" src={props.placeholder}  alt={`Project: ${props.title}`}/>
    </div>
    <div className="project-item-content">
      <h5>{props.title}</h5>
      <p><span className="project-badge">{props.location}</span>{` ${props.description.substring(0, 140)}...`}</p>
    </div>
  </div>
);


export default ProjectItem;
