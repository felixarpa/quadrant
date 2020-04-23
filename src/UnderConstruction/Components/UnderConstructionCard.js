import React from "react";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const Styles = {
  container: {
    marginBottom: '2em',
    backgroundColor: 'white',
  },
  image: {
    paddingLeft: '1em',
    paddingRight: '1em',
    height: 'auto',
  }
};

const UnderConstructionCard = () => (
  <Card style={Styles.container} className="text-center">
    <Card.Header>En construcció</Card.Header>
    <Card.Img variant="top" src="header-image.png" style={Styles.image} />
    <Card.Body>
      <Card.Subtitle>Contacta</Card.Subtitle>
    </Card.Body>
    <ListGroup className="list-group-flush text-justify-left">
      <ListGroup.Item>(+34) 936 745 559</ListGroup.Item>
      <ListGroup.Item>Dr. Murillo 3 · 08172 St. Cugat · Barcelona</ListGroup.Item>
      <ListGroup.Item>jbalanya@quadrant12.com</ListGroup.Item>
    </ListGroup>
  </Card>
);

export default UnderConstructionCard;
