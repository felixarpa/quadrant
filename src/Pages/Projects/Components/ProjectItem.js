import React from "react";
import { Badge, Card } from "react-bootstrap";
import "../index.scss";

const ProjectItem = (props) => (
  <div className="item-container">
    <div className="item-img-container">
      <img className="project-img" src={props.imageURL}  alt={`Project: ${props.title}`}/>
    </div>
    <div className="item-content-container">
      <Card.Title>{props.title}</Card.Title>
      <p><Badge variant="secondary">{props.location}</Badge>{` ${props.description.substring(0, 140)}...`}</p>
    </div>
  </div>
);


export default ProjectItem;
