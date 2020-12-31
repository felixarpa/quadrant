import { Carousel, Container, Row } from "react-bootstrap";
import React from "react";

const buildItems = (images, projectId) =>
  images.map(imageName => (
    <Carousel.Item key={imageName}>
      <img
        alt="Project"
        className="d-block w-100"
        src={`/images/${projectId}/${imageName}`}
      />
    </Carousel.Item>
  )
);

const Gallery = (props) => (
  <Container className="project-details-gallery-container">
    <Row className="project-details-section">
      <h2>Gallery</h2>
    </Row>
    <Row>
      <Carousel
        className="project-details-carousel"
        inteval={2000}>
        {buildItems(props.images, props.projectId)}
      </Carousel>
    </Row>
  </Container>
);

export default Gallery;
