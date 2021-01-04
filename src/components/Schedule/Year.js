import React from "react";
import "./Year.css";
import Semester from "./Semester";

const year = () => {
  return (
    <div id="year-container">
      <Semester />
      <Semester />
    </div>
  );
};

export default year;