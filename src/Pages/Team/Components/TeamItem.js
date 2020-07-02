import React from "react";
import { Card } from "react-bootstrap";
import "../index.scss";

const TeamItem = (props) => (
  <div className="member-container">
    <div className="member-img-container">
      <img className="member-img" src={props.imageURL}  alt={`Project: ${props.title}`}/>
    </div>
    <div className="member-content-container">
      <Card.Title>{props.name}</Card.Title>
      <p>{props.title}</p>
    </div>
  </div>
);


export default TeamItem;
