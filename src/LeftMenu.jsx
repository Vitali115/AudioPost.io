import React from "react";
//               css       //
import "swiper/css";
import "swiper/css/pagination";
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
  RiArrowLeftRightLine
} from "react-icons/ri";

import "./styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
//               icon           //
//               ext comp         //
import { Button, Container, Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { Redirect } from "react-router-dom";
//               comp         //
import { useEffect, useState } from "react";
import WaveSurfer from "wavesurfer";
//               app            //
export default function LeftMenu() {
  return (
    <>
      <section className="user--menu--interactions">
        <div className="menu--option">
          <RiHome2Line className="ico" />
          <p>Home</p>
        </div>
        <div className="menu--option">
          <RiEarthLine className="ico" />
          <p>Explore</p>
        </div>

        <div className="menu--option">
          <RiNotificationLine className="ico" />
          <p>Notifications</p>
        </div>
        <div className="menu--option">
          <RiBookmarkLine className="ico" />
          <p>Saved</p>
        </div>
        <div className="menu--option">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Solid_white_bordered.svg/600px-Solid_white_bordered.svg.png"
            alt="comments--avatar"
          />
          <p>Profile</p>
        </div>
        <div className="menu--option">
          <RiSettings4Line className="ico" />
          <p>Settings</p>
        </div>
        <div
          className="menu--option"
          style={{
            backgroundColor: "#00FFB1",
            color: "black",
            fontWeight: "bold",
            marginTop: "100px"
          }}
        >
          <RiMicLine className="ico" />
          <p>Post</p>
        </div>
      </section>
    </>
  );
}
