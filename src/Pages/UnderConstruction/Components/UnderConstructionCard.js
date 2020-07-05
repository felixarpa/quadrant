import React from "react";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import "../index.scss";

const Styles = {
  container: {
    marginTop: '2em',
    marginBottom: '2em',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
  },
  image: {
    paddingLeft: '1em',
    paddingRight: '1em',
    paddingBottom: '1em',
    height: 'auto',
  }
};

const contactLinks = [
  { url: 'tel:+34936745559', text: '(+34) 936 745 559' },
  { url: 'mailto:derzu@quadrant12.com', text: 'derzu@quadrant12.com' },
  { url: 'https://goo.gl/maps/jQkJF2Bpe4Ek4qUw7', text: 'Dr. Murillo 3 · 08172 St. Cugat · Barcelona' },
  { url: 'https://goo.gl/maps/vrMhWqGXxfdfkhdj9', text: 'Major 64, 3r · 25100 Almacelles · Lleida' },
];

const UnderConstructionCard = () => (
  <Card style={Styles.container} className="text-center">
    <Card.Body><Card.Text><i>Pàgina web en construcció...</i></Card.Text></Card.Body>
    <Card.Img variant="top" src="logo.png" style={Styles.image} />
    <ListGroup className="list-group-flush text-justify-left">
      {contactLinks.map(link => (
        <ListGroup.Item key={link.url}>
          <a className="under-construction-link" href={link.url} target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
        </ListGroup.Item>
      ))}
    </ListGroup>
  </Card>
);

export default UnderConstructionCard;
