import React from "react";
import { Provider } from "react-redux";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "pages";
import NotFound from 'pages/NotFound';
import configureStore from "store";
import "./App.css";

const store = configureStore({
  cart: { items: ["Perrito", "Perrito Bonito", "Perrito Wow"] }
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
