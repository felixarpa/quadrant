import React from "react";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import "../index.css";

const Styles = {
  container: {
    marginTop: '2em',
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
      <ListGroup.Item>
        <a href={"tel:+34936745559"} target={"_blank"}>(+34) 936 745 559</a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a href={"https://goo.gl/maps/jQkJF2Bpe4Ek4qUw7"} target={"_blank"}>Dr. Murillo 3 · 08172 St. Cugat · Barcelona</a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a href={"mailto:jbalanya@quadrant12.com"} target={"_blank"}>jbalanya@quadrant12.com</a>
      </ListGroup.Item>
    </ListGroup>
  </Card>
);

export default UnderConstructionCard;
