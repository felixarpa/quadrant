import React from "react";
import "../index.scss";

const TeamItem = (props) => (
  <div className="team-member-container">
    <div className="team-member-img-container">
      <img className="team-member-img" src={props.imageURL}  alt={`Project: ${props.title}`}/>
    </div>
    <div className="team-member-content-container">
      <h5>{props.name}</h5>
      <p>{props.title}</p>
    </div>
  </div>
);


export default TeamItem;
