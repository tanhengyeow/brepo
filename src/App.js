import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./routes/Pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Pages />
      </Router>
    </div>
  );
}

export default App;
