import { Container, Row } from "react-bootstrap";
import React from "react";

const buildDescription = (description) => {
  const paragraphs = description.split("\n");
  return (
    <Row className="project-details-section">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </Row>
  );
};

const Content = (props) => (
  <Container className="project-details-page-container">
    <Row>
      <h1>{props.title}</h1>
    </Row>
    <Row>
      <h5>{props.location}</h5>
    </Row>
    {buildDescription(props.description)}
  </Container>
);

export default Content;
