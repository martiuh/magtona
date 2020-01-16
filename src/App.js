import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
