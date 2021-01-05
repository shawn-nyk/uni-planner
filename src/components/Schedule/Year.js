import React from "react";
import "./Year.css";
import Semester from "./Semester";

const year = (props) => {
  return (
    <div id="year-parent-container">
      <p>Year {props.year}</p>
      <div id="year-container">
        <Semester />
        <Semester />
      </div>
    </div>
  );
};

export default year;