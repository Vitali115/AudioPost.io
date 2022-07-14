import React from "react";
import "./styles.scss";
import { useState, Link } from "react";
import Header from "./Header";
import Menu from "./LeftMenu";
import Trend from "./RightMenu";
import Grid from "@material-ui/core/Grid";

import Profile from "./Profile";
export default function Homepage() {
  return (
    <>
      <section className="App">
        <Header />
        <section className="markup--page">
          <Menu />
          <section>
            <Profile />

            <br />
          </section>
          <Trend />
        </section>
      </section>
    </>
  );
}
