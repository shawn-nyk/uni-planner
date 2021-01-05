import React from "react";
import "./Schedule.css";
import Year from "./Year";

const schedule = () => {

  return (
    <div className="full-schedule-container">
      <div className="half-schedule-container">
        <Year year="1"/>
        <Year year="2"/>
      </div>
      <div className="half-schedule-container">
        <Year year="3"/>
        <Year year="4"/>
      </div>
    </div>
  );
};

export default schedule;
