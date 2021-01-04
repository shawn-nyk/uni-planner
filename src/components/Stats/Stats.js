import React from "react";
import "./Stats.css";

const stats = (props) => {

  return (
    <div id="stats-container">
      <p>Foundation:</p>
      {props.num}
    </div>
  );
};

export default stats;
