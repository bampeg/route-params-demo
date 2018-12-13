import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Comp from "./Comp";
import Linker from "./Linker";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Linker} />
            <Route path="/comp/:num" component={Comp} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
