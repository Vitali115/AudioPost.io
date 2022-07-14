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
                src="https://scontent.ftrn1-1.fna.fbcdn.net/v/t1.18169-9/408385_476637849071030_1912827395_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MfzZuxJPHngAX8AfoiW&_nc_ht=scontent.ftrn1-1.fna&oh=00_AT9OKhxi3GMaKp-KDkz1-T_3Ad6iNAv7siU1Pverpo9cmw&oe=62F52A26"
                alt="post--avatar"
                style={{ width: 90, borderRadius: "100%" }}
              />
            </IconButton>

            <h3>Nome</h3>
          </div>

          <div className="post--interactions--option">
            <p>PRO </p>
          </div>
        </div>

        <div className="account--data-info">
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
      <div className="demoo">
        {/* <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/ogre_1f479.png" />
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/sign-of-the-horns_light-skin-tone_1f918-1f3fb_1f3fb.png" />
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/nauseated-face_1f922.png" />
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/alien_1f47d.png" />
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/kissing-cat_1f63d.png" />
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/brain_1f9e0.png" />
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/zombie_1f9df.png" /> */}
        {/* <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/comet_2604-fe0f.png" /> */}
        {/* <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pinata_1fa85.png" />
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/large-green-circle_1f7e2.png" />
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/spiral-calendar_1f5d3-fe0f.png" />
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/new-moon-face_1f31a.png" />
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/lion_1f981.png" />
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/orangutan_1f9a7.png" />
<img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/mechanical-arm_1f9be.png"/>
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/compass_1f9ed.png" /> */}
      </div>
    </>
  );
}
export default Profile;
