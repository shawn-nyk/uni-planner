import React from "react";
import "./Module.css";

const mod = (props) => {
  const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
    props.onModDragHandler();
  }

  return (
    <div id={props.modName} draggable="true" onDragStart={drag} className={["module-block", props.modCategory].join(" ")}>
      <p>{props.modName}</p>
    </div>
  );
};

export default mod;
