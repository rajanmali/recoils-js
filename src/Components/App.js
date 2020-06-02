import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import CharacterCounter from "./CharacterCounter";
import ToDo from "./ToDo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/character-counter" component={CharacterCounter} />
        <Route exact path="/to-do" component={ToDo} />
      </Switch>
    </div>
  );
}

export default App;
