import React from "react";
import "../styles.scss";
import { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/LeftMenu";
import Trend from "../components/RightMenu";
import Grid from "@material-ui/core/Grid";
import Microphone from "../components/Microphone/Microphone";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";

import {
  RiLinkedinBoxFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiFacebookFill,
  RiHeart3Line,
  RiBookmarkLine,
  RiChat1Line,
  RiPlayMiniLine,
  RiPlayMiniFill,
  RiHome2Line,
  RiMicLine,
  RiEarthLine,
  RiSearchLine,
  RiSettings4Line,
  RiNotificationLine,
  RiArrowLeftRightLine,
  RiPauseMiniFill
} from "react-icons/ri";

import { Button, Row, Col } from "react-bootstrap";

import IconButton from "@material-ui/core/IconButton";

function Explore() {
  return (
    <>
      <section className="App">
        <Header />
        <section className="markup--page">
          <Menu />
          <section>
            <Row className="explore--grid">
              <section className="post">
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/comet_2604-fe0f.png" />
                <p>Post di Tendenza</p>
              </section>

              <section className="post">
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/kissing-cat_1f63d.png" />
                <p>Audio più amati</p>
              </section>

              <section className="post">
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/new-moon-face_1f31a.png" />
                <p>Late Night Post</p>
              </section>

              <section className="post">
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/alien_1f47d.png" />
                <p>From Another World</p>
              </section>

              <section className="post">
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/sign-of-the-horns_light-skin-tone_1f918-1f3fb_1f3fb.png" />
                <p>Rock!!!</p>
              </section>

              <section className="post">
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/brain_1f9e0.png" />
                <p>Smart Talks</p>
              </section>
            </Row>
            <hr />
          </section>
          <Trend />
        </section>
      </section>
    </>
  );
}
export default Explore;
