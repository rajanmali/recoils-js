import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import CharacterCounter from "./CharacterCounter";
import ToDo from "./ToDo";
import NotFoundPage from "./NotFoundPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/character-counter" component={CharacterCounter} />
        <Route exact path="/to-do" component={ToDo} />
        <Route exact path="/not-found" component={NotFoundPage} />
        <Redirect to="not-found" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
