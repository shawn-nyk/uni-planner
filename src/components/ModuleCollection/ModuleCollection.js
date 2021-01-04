import React from "react";
import "./ModuleCollection.css";
import Module from "./Module";

class modCollection extends React.Component {
  state = {
    mcCountsImmutable: [
      {
        category:"foundation",
        count:36
      }, {
        category:"itp",
        count:12
      }, {
        category:"mns",
        count:16
      }
    ],

    mcCounts: [
      {
        category:"foundation",
        count:0
      }, {
        category:"itp",
        count:0
      }
    ],

    modsImmutable: [
      {
        name:"CS1101S",
        category:"foundation",
        mcs:4
      }, {
        name:"CS1231S",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2030",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2040S",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2100",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2103T",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2105",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2106",
        category:"foundation",
        mcs:4
      }, {
        name:"CS3230",
        category:"foundation",
        mcs:4
      }, {
        name:"IS1103",
        category:"itp",
        mcs:4
      }, {
        name:"CS2101",
        category:"itp",
        mcs:4
      }, {
        name:"ES2660",
        category:"itp",
        mcs:4
      }, {
        name:"MA1521",
        category:"mns",
        mcs:4
      }, {
        name:"MA1101R",
        category:"mns",
        mcs:4
      }, {
        name:"ST2334",
        category:"mns",
        mcs:4
      }, {
        name:"Science",
        category:"mns",
        mcs:4
      }
    ],

    mods: [
      {
        name:"CS1101S",
        category:"foundation",
        mcs:4
      }, {
        name:"CS1231S",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2030",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2040S",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2100",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2103T",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2105",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2106",
        category:"foundation",
        mcs:4
      }, {
        name:"CS3230",
        category:"foundation",
        mcs:4
      }, {
        name:"IS1103",
        category:"itp",
        mcs:4
      }, {
        name:"CS2101",
        category:"itp",
        mcs:4
      }, {
        name:"ES2660",
        category:"itp",
        mcs:4
      }, {
        name:"MA1521",
        category:"mns",
        mcs:4
      }, {
        name:"MA1101R",
        category:"mns",
        mcs:4
      }, {
        name:"ST2334",
        category:"mns",
        mcs:4
      }, {
        name:"Science",
        category:"mns",
        mcs:4
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
    console.log(this.state.mods); // DELETE
  }

  // updateStats() {
  //   var total = 0;
  //   console.log(total);
  //   for (var i = 0; i < this.state.mods.length; i++) {
  //     total += parseInt(this.state.mods.mcs);
  //   }
  //   console.log(total);
  // }

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
      console.log(this.state.mods); // DELETE
    }

    const allowDrop = (ev) => {
      ev.preventDefault();
    }

    var mods = {
      foundation: [],
      itp: [],
      mns: []
    }

    this.state.modsImmutable.forEach((m) => {
      var isPresent = false;
      for (var i = 0; i < this.state.mods.length; i++) {
        if (this.state.mods[i].name === m.name) {
          isPresent = true;
          break;
        }
      }

      if (isPresent) {
        mods[m.category].push(
          <div key={m.name} className="mod-slot" onDrop={drop} onDragOver={allowDrop}>
            <Module modName={m.name} modCategory={m.category} onModDragHandler={() => this.onModDragHandler(m.name)} />
          </div>
        );
      } else {
        mods[m.category].push(
          <div key={m.name} className="mod-slot" onDrop={drop} onDragOver={allowDrop}>
          </div>
        );
      }
    });

    return (
      <div>
        <div className="module-collection-container">
          <p>Foundation</p>
          <div className="module-collection-grid" id="foundation-modules">
            {mods.foundation}
          </div>
        </div>

        <div className="module-collection-container">
          <p>IT Professionalism</p>
          <div className="module-collection-grid" id="itp-modules">
            {mods.itp}
          </div>
        </div>

        <div className="module-collection-container">
          <p>Math and Science</p>
          <div className="module-collection-grid" id="mns-modules">
            {mods.mns}
          </div>
        </div>
      </div>
    )
  }
};

export default modCollection;
