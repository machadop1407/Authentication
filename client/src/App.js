import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Registration from "./pages/Registration";

function App() {
  return (
    <Router>
      <Route path="/registration" exact render={(props) => <Registration />} />
      <Route path="/" exact render={(props) => <Main />} />
    </Router>
  );
}

export default App;
