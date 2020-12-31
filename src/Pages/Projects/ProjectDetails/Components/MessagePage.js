import { Container, Row } from "react-bootstrap";
import React from "react";

const MessagePage = (props) => (
  <Container className="project-details-page-container">
    <Row>
      <h2>{props.message}</h2>
    </Row>
  </Container>
);

export default MessagePage;
