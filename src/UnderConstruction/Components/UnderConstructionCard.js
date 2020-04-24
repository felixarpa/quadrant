import React from "react";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import aBlank from "../../Utils/aBlank";
import "../index.css";

const Styles = {
  container: {
    marginTop: '2em',
    marginBottom: '2em',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
    <Card.Img variant="top" src="logo.png" style={Styles.image} />
    <Card.Body>
      <Card.Subtitle>Contacta amb nosaltres</Card.Subtitle>
    </Card.Body>
    <ListGroup className="list-group-flush text-justify-left">
      <ListGroup.Item>
        <aBlank href={"tel:+34936745559"}>(+34) 936 745 559</aBlank>
      </ListGroup.Item>
      <ListGroup.Item>
        <aBlank href={"https://goo.gl/maps/jQkJF2Bpe4Ek4qUw7"}>Dr. Murillo 3 · 08172 St. Cugat · Barcelona</aBlank>
      </ListGroup.Item>
      <ListGroup.Item>
        <aBlank href={"mailto:derzu@quadrant12.com"}>derzu@quadrant12.com</aBlank>
      </ListGroup.Item>
    </ListGroup>
  </Card>
);

export default UnderConstructionCard;
