import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchPage from "./pages/SearchPage";
import Saved from "./pages/Saved";

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Jumbotron>
          <h1>(React) Google Books Search</h1>
          <h3>Search for a book you're interested in and save it to your reading list!</h3>
        </Jumbotron>
        <Switch>
          <Route exact path={["/", "/SearchPage"]}>
            <SearchPage></SearchPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
