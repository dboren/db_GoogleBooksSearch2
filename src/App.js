import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchPage from "./pages/SearchPage";
import Saved from "./pages/Saved";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
      </div>
    </Router>
  );
}

export default App;
