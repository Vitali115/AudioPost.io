import React from "react";
import "../styles.scss";

import Header from "../components/Header";
import Menu from "../components/LeftMenu";
import Trend from "../components/RightMenu";
import Grid from "@material-ui/core/Grid";

import RadioProfile from "../components/RadioProfile";
export default function RadioUser() {
  return (
    <>
      <section className="App">
        <Header />
        <section className="markup--page">
          <Menu />
          <section>
            <RadioProfile />

            <br />
          </section>
          <Trend />
        </section>
      </section>
    </>
  );
}
