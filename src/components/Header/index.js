import React from "react";

const Header = props => (
  <nav>
    <div className="nav-wrapper">
      <div className="score center-align #1565c0 blue darken-3">
        Score: {props.score} High Score: {props.highscore}
      </div>
    </div>
  </nav>
);

export default Header;
