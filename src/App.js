import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
//               css            //
import "bootstrap/dist/css/bootstrap.min.css";
//               comp          //

//              screen         //
import HomePage from "./HomePage";

//               app            //
export default function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch />
          <Route path="/" exact component={HomePage} />
          <Switch />
        </div>
      </Router>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
