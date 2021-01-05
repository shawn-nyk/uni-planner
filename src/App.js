import React from "react";
import './App.css';
import ModuleCollection from "./components/ModuleCollection/ModuleCollection";
import Schedule from "./components/Schedule/Schedule";
import AuxSched from "./components/Schedule/AuxSched";

function App() {

  return (
    <div className="App">
      <div className="col">
        <h1>UNI PLANNER</h1>
        <div className="row">
          <ModuleCollection />
          <Schedule />
        </div>
        <AuxSched />
      </div>
    </div>
  );
}

export default App;
