import React from "react";
import "./ModuleCollection.css";
import Module from "./Module";

class modCollection extends React.Component {
  state = {
    modsImmutable: [
      {
        name:"CS1231S",
        category:"foundation",
        bgcolor:"skyblue"
      }, {
        name:"CS3243",
        category:"ai",
        bgcolor:"yellow"
      }, {
        name:"CS2030",
        category:"foundation",
        bgcolor:"yellow"
      }
    ],

    mods: [
      {
        name:"CS1231S",
        category:"foundation",
        bgcolor:"skyblue"
      }, {
        name:"CS3243",
        category:"ai",
        bgcolor:"yellow"
      }, {
        name:"CS2030",
        category:"foundation",
        bgcolor:"yellow"
      }
    ]
  }

  onModDragHandler(modName) {
    var index = -1;
    for (var i = 0; i < this.state.mods.length; i++) {
      if (this.state.mods[i].name === modName) {
          index = i;
      }
    }

    if (index > -1) {
      this.state.mods.splice(index, 1);
    }
    console.log(this.state.mods);
  }

  render() {
    const drop = (ev) => {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text"); // data == module name
      ev.target.appendChild(document.getElementById(data));
      var index = -1;
      for (var i = 0; i < this.state.modsImmutable.length; i++) {
        if (this.state.modsImmutable[i].name === data) {
            index = i;
        }
      }
      this.state.mods.push(this.state.modsImmutable[index]);
      console.log(this.state.mods);
    }

    const allowDrop = (ev) => {
      ev.preventDefault();
    }

    var mods = {
      foundation: [],
      ai: []
    }

    this.state.mods.forEach((m) => {
      mods[m.category].push(
        <div key={m.name} className="mod-slot" onDrop={drop} onDragOver={allowDrop}>
          <Module modName={m.name} modCategory={m.category} onModDragHandler={() => this.onModDragHandler(m.name)} />
        </div>
      );
    });

    return (
      <div id="module-collection-container">
        {mods.foundation}
        {mods.ai}
      </div>
    )
  }
};

export default modCollection;
