import React, { useState, useEffect, useRef } from "react";
import './App.css';

function App() {

  const [bots, setBots] = useState([]);
  const [filteredBots, setFilteredBots] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8001/bots`)
      .then((response) => response.json())
      .then((data) => {
        setBots(data);
        setFilteredBots(data);
      });
  }, []);

  return (
    <div className="App">
  
    </div>
  );
}

export default App;
