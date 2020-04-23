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
    <Card.Body>
      <Card.Text><i>Pàgina web en construcció...</i></Card.Text>
    </Card.Body>
    <Card.Img variant="top" src="logob.jpg" style={Styles.image} />
    <Card.Body>
      <Card.Subtitle>Contacta amb nosaltres</Card.Subtitle>
    </Card.Body>
    <ListGroup className="list-group-flush text-justify-left">
      <ListGroup.Item>(+34) 936 745 559</ListGroup.Item>
      <ListGroup.Item>Dr. Murillo 3 · 08172 St. Cugat · Barcelona</ListGroup.Item>
      <ListGroup.Item>jbalanya@quadrant12.com</ListGroup.Item>
    </ListGroup>
  </Card>
);

export default UnderConstructionCard;
