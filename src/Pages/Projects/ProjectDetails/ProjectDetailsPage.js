import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import "./index.scss";

const images = [
  "/images/zmramis/04.jpg",
  "/images/zmramis/10.jpg",
  "/images/zmramis/17.jpg"
];

const ProjectDetailsPage = () => (
  <div>
    {/* HEADER */}
    <Row>
      <img
        className="project-details-image"
        src="https://quadrant12.netlify.app/images/zmramis/10.jpg"
        alt={`Project: `}
      />
    </Row>

    {/* CONTENT */}
    <Container className="project-details-page-container">
      <Row>
        <h1>Lorem ipsum dolor sit amet</h1>
      </Row>
      <Row>
        <h5>consectetur adipiscing elit</h5>
      </Row>
      <Row className="project-details-section">
        <p>
          Curabitur sodales auctor ante dapibus efficitur. Duis consectetur efficitur velit at condimentum. In volutpat dolor eget cursus faucibus. Maecenas ut sapien nibh. Duis commodo metus ornare gravida consectetur. Aenean turpis ipsum, porttitor nec sagittis quis, pharetra vel risus. Fusce arcu lacus, molestie id placerat a, placerat in turpis. Sed eu quam augue. Nunc non dapibus eros. Etiam dapibus, nisl sit amet feugiat cursus, felis leo finibus massa, quis congue nisi ligula ac ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut nec sapien eget erat vestibulum ullamcorper. Mauris consequat odio sed tempus fermentum. Maecenas est purus, condimentum quis risus gravida, suscipit lobortis massa. Aliquam erat volutpat.
        </p>
        <p>
          Phasellus varius malesuada tortor sit amet pellentesque. Integer at egestas mauris. Curabitur finibus condimentum ante, finibus molestie turpis ultricies tincidunt. Pellentesque pretium volutpat quam non mattis. Proin et erat ultrices urna blandit sagittis a non erat. Integer congue, velit eget rutrum venenatis, enim enim egestas tortor, nec volutpat purus odio non risus. Quisque dignissim, odio a ultrices rhoncus, erat libero suscipit eros, ut sollicitudin felis metus pellentesque neque. Sed eu lacinia velit. Integer rutrum congue mi et mollis. Cras posuere tellus cursus ipsum cursus ultricies. Pellentesque scelerisque aliquam massa. Nulla eget elementum orci.
        </p>
        <p>
          Vestibulum ut nisi ut dolor commodo laoreet a ut sapien. Duis interdum, orci ut facilisis congue, massa magna porttitor felis, ac efficitur dui magna id leo. Donec fringilla fringilla volutpat. Quisque quis tincidunt nisl, quis tincidunt tellus. Suspendisse consectetur luctus nisi eget pretium. Ut vestibulum, ante vitae malesuada ullamcorper, ligula lorem interdum quam, quis pulvinar elit tellus a lacus. Nulla facilisi. Nulla erat nulla, posuere eget posuere ut, volutpat eget eros. Vestibulum malesuada consectetur sodales. Sed sed lobortis sem. Sed vitae enim finibus, feugiat libero id, aliquam sapien. Nullam interdum risus sed ex ultrices fermentum.
        </p>
      </Row>
    </Container>

    {/* GALLERY */}
    <Container className="project-details-gallery-container">
      <Row className="project-details-section">
        <h2>Gallery</h2>
      </Row>
      <Row>
        <Carousel
          className="project-details-carousel"
          inteval={2000}>
          {images.map(imagePath => (
            <Carousel.Item key={imagePath}>
              <img
                alt="project"
                className="d-block w-100"
                src={imagePath}
              />
            </Carousel.Item>
              ))}
        </Carousel>
      </Row>
    </Container>
  </div>
);

export default ProjectDetailsPage;
