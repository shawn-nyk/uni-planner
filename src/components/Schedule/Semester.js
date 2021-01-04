import React from "react";
import "./Semester.css";

const semester = () => {
  const drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  const allowDrop = (ev) => {
    ev.preventDefault();
  }

  return (
    <div id="semester-container">
      <div className="mod-slot" onDrop={drop} onDragOver={allowDrop}></div>
      <div className="mod-slot" onDrop={drop} onDragOver={allowDrop}></div>
      <div className="mod-slot" onDrop={drop} onDragOver={allowDrop}></div>
      <div className="mod-slot" onDrop={drop} onDragOver={allowDrop}></div>
      <div className="mod-slot" onDrop={drop} onDragOver={allowDrop}></div>
    </div>
  );
};

export default semester;
