import React from "react";
import "./AuxSched.css";
import Semester from "./Semester";

const schedule = () => {

  return (
    <div className="parent-container">
      <p>Other Time Periods / Extras</p>
      <div className="aux-schedule-container">
        <Semester />
        <Semester />
        <Semester />
        <Semester />
        <Semester />
      </div>
    </div>
  );
};

export default schedule;
