import { Carousel, Container, Row } from "react-bootstrap";
import React from "react";

const Gallery = (props) => (
  <Container className="project-details-gallery-container">
    <Row className="project-details-section">
      <h2>Gallery</h2>
    </Row>
    <Row>
      <Carousel
        className="project-details-carousel"
        inteval={2000}>
        {props.images.map(imageName => (
          <Carousel.Item key={imageName}>
            <img
              alt="Project"
              className="d-block w-100"
              src={`/images/${props.projectId}/${imageName}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Row>
  </Container>
);

export default Gallery;
