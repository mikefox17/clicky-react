import React from "react";

const Card = props => (
  <div className="container">
    <div className="col l3">
      <div
        className="card-panel teal fluid"
        id="rcard"
        onClick={() => props.clickCount(props.id)}
      >
        <img className="responsive-img" alt={props.name} src={props.image} />
      </div>
    </div>
  </div>
);

export default Card;
