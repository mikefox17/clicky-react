import React from "react";

const Card = props => (
  <div className="container">
    <div className="col l3">
      <div
        className="card-panel teal fluid"
        id="rcard"
        //onClick calls the clickCount function
        onClick={() => props.clickCount(props.id)}
      >
        {/* Commenting in JSX is confusing, setting the name and image of the card based off the card.json */}
        <img className="responsive-img" alt={props.name} src={props.image} />
      </div>
    </div>
  </div>
);

export default Card;
