import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
//               css            //
import "bootstrap/dist/css/bootstrap.min.css";
//               comp          //

//              screen         //
import HomePage from "./pages/HomePage";
import User from "./pages/User";
import Explore from "./pages/Explore";
import RadioUser from "./pages/RadioUser";

//               app            //
export default function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch />
          <Route path="/" exact component={HomePage} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/user" exact component={User} />
          <Route path="/explore" exact component={Explore} />
          <Route path="/radio" exact component={RadioUser} />
          <Switch />
        </div>
      </Router>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
