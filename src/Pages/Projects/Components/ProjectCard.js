import React from "react";
import { Card } from "react-bootstrap";
import "../index.scss";

const ProjectCard = (props) => (
  <Card>
    <Card.Img variant="top" src={props.project.imageURL} />
    <Card.Body>
      <Card.Title>{props.project.title}</Card.Title>
      <Card.Text>{`${props.project.description.substring(0, 140)}...`}</Card.Text>
    </Card.Body>
  </Card>
);


export default ProjectCard;
