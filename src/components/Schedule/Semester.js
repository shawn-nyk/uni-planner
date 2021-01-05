import React from "react";
import "./Semester.css";

const semester = () => {
  const drop = (ev) => {
    var data = ev.dataTransfer.getData("text");
    if (document.getElementById(data).outerHTML === ev.target.innerHTML) {
      // do nothing
    } else {
      ev.target.appendChild(document.getElementById(data));
    }
  }

  const allowDrop = (ev) => {
    ev.preventDefault();
  }

  return (
    <div id="semester-container">
      <div id="div1" className="mod-slot" onDrop={drop} onDragOver={allowDrop}></div>
      <div id="div2" className="mod-slot" onDrop={drop} onDragOver={allowDrop}></div>
      <div id="div3" className="mod-slot" onDrop={drop} onDragOver={allowDrop}></div>
      <div id="div4" className="mod-slot" onDrop={drop} onDragOver={allowDrop}></div>
      <div id="div5" className="mod-slot" onDrop={drop} onDragOver={allowDrop}></div>
    </div>
  );
};

export default semester;
