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
  { url: 'https://goo.gl/maps/2hrA9odYb5QsZE1V8', text: 'Passeig del Vapor Gran, 29, 2ª Planta, Oficina-B · 08221 Terrassa · Barcelona' },
  { url: 'https://goo.gl/maps/BfqdHpwCQK9sedFfA', text: 'Carrer de la Mercè 55, baix 2 · 25100 Almacelles · Lleida' },
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
