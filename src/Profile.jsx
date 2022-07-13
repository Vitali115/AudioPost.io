import React from "react";
import "./styles.scss";
import { useState } from "react";
import Header from "./Header";
import Menu from "./LeftMenu";
import Trend from "./RightMenu";
import Grid from "@material-ui/core/Grid";
import Microphone from "./components/Microphone/Microphone";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";

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

import IconButton from "@material-ui/core/IconButton";

function Profile() {
  return (
    <>
      <section className="post" id="profile--card">
        <div className="post--acc">
          <div className="post--data--user">
            <IconButton>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Solid_white_bordered.svg/600px-Solid_white_bordered.svg.png"
                alt="post--avatar"
                style={{ height: 45, width: 45, borderRadius: "100%" }}
              />
            </IconButton>

            <h3>Nome</h3>
          </div>

          <div className="post--interactions--option">
            <p>100K Followers</p>
          </div>

          <div className="post--interactions--option">
            <RiMicLine className="ico" />
            <p>2k Posts</p>
          </div>

          <div className="post--interactions--option">
            <RiPlayMiniLine className="ico" />
            <p>2 Bln </p>
          </div>

          <div className="post--interactions--option">
            <p>PRO </p>
          </div>
        </div>

        <div className="post--text">
          <h2 style={{ fontSize: 19 }}>This is my bio :D</h2>
        </div>

        <div style={{ display: "flex" }}>
          <div className="post--interactions--option">
            <div
              className="profile--interactions"
              style={{
                backgroundColor: "#00FFB1",
                color: "black",
                fontWeight: "bold"
              }}
            >
              <p>Follow </p>
            </div>
          </div>
          <div className="post--interactions--option">
            <div className="profile--interactions">
              <p>Message</p>
            </div>
          </div>
        </div>
        <div className="post--dynamic--comments">
          <div className="slider">
            <div className="slide-track">
              {Array.from({ length: 13 }).map((_, idx) => (
                <div className="slide">
                  <div className="post--comments">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/1024px-Solid_black.svg.png"
                      alt="comments--avatar"
                    />
                    <h4>Ev115</h4>
                    <p>im a Comments</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}
export default Profile;
