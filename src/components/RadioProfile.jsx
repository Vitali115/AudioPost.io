import React from "react";
import "../styles.scss";
import { useState } from "react";
import Header from "./Header";
import Menu from "./LeftMenu";
import Trend from "./RightMenu";
import Grid from "@material-ui/core/Grid";

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

function RadioProfile() {
  return (
    <>
      <section className="post" id="profile--card">
        <div className="post--acc">
          <div className="post--data--user">
            <IconButton>
              <img
                className="radio--img"
                src="https://static.mytuner.mobi/media/radios-150px/GWr5zZYDRm.jpg"
                alt="post--avatar"
                style={{ width: 100, borderRadius: "12px" }}
              />
            </IconButton>

            <div className="radio--data-info">
              <h2 className="radio--name">Radio m2o</h2>
              <div className="radio--options">
                <IconButton>
                  <RiPlayMiniFill className="ico" />
                </IconButton>
                <div className="radio--datas">
                  <h3>10k Followers</h3>
                  <h3 style={{ color: "#00FFB1" }}>290 Ascoltatori</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="post--interactions--option">
            <p>Verified </p>
          </div>
        </div>

        <div className="host--box">
          <p style={{ marginBottom: "5px" }}>Now speaking</p>
          <div className="speaker--hosts">
            <div className="post--comments">
              <img
                src="https://cdn.gelestatic.it/m2o/sites/2/2021/03/prinzivalliR-320x320.jpg"
                alt="comments--avatar"
              />
              <h4>Patrizia Prinzivalli</h4>
            </div>
            <div className="post--comments">
              <img
                src="https://cdn.gelestatic.it/m2o/sites/2/2021/03/molellaR-320x320.jpg"
                alt="comments--avatar"
              />
              <h4>Molella</h4>
            </div>
          </div>
        </div>
        {/* <div className="account--data-info">
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
        </div> */}

        {/* <div className="post--text">
          <h2 style={{ fontSize: 19 }}>This is my bio :D</h2>
        </div> */}

        <div style={{ display: "flex" }}>
          <div className="post--interactions--option">
            <div className="profile--interactions">
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
              <p>Trasmissione live </p>
            </div>
          </div>
          <div className="post--interactions--option">
            <div className="profile--interactions">
              <p>Schedule</p>
            </div>
          </div>
        </div>
      </section>
      <h4>Recently Activity</h4>
      <hr />
    </>
  );
}
export default RadioProfile;
