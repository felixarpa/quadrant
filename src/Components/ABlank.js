import React from "react";
import './ABlank.css';

const ABlank = (props) => (
  <a href={props.href} target={"_blank"} rel={"noopener noreferrer"}>{props.children}</a>
);

export default ABlank;
