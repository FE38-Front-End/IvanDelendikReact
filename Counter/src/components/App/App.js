import React from "react";
import "../App/App.scss";
import Header from "../Header/Header";
import Counter from "../../pages/Counter/components/Counter";
import Converter from "../../pages/Converter/components/Converter";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/Counter">
            <div className="app-counter">
              <Counter />
              <Counter />
            </div>
          </Route>
          <Route exact path="/Converter">
            <Converter />
          </Route>
          <Route exact path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
