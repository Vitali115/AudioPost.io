import React from "react";
import "../styles.scss";
import { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/LeftMenu";
import Trend from "../components/RightMenu";
import Grid from "@material-ui/core/Grid";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import Profile from "../components/Profile";
import RadioProfile from "../components/RadioProfile";
export default function User() {
  return (
    <>
      <section className="App">
        <Header />
        <section className="markup--page">
          <Menu />
          <section>
            <Profile />
            <AudioPlayer />

            <br />
          </section>
          <Trend />
        </section>
      </section>
    </>
  );
}
