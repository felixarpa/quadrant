import { Row } from "react-bootstrap";
import React from "react";

const Header = (props) =>(
  <Row>
    <img
      className="project-details-image"
      src={props.placeholder}
      alt={`Project: ${props.placeholder}`}
    />
  </Row>
);

export default Header;
