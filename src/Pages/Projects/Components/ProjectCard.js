import React from "react";
import { Card, Badge } from "react-bootstrap";
import "../index.scss";

const ProjectCard = (props) => (
  <Card className="project-card">
    <Card.Img variant="top" src={props.imageURL} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text><Badge variant="secondary">{props.location}</Badge>{` ${props.description.substring(0, 140)}...`}</Card.Text>
    </Card.Body>
  </Card>
);


export default ProjectCard;
