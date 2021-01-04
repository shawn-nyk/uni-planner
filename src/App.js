import React from 'react';
import './App.css';
import Year from "./components/Schedule/Year";
import ModuleCollection from "./components/ModuleCollection/ModuleCollection";

function App() {
  return (
    <div className="App">
      <ModuleCollection />
      <Year />
    </div>
  );
}

export default App;
