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
  RiArrowLeftRightLine,
  RiMic2Line,
  RiRadio2Line,
  RiDiscLine
} from "react-icons/ri";

import "./styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
        <hr />
        <Link to="/">
          <div className="menu--option">
            <RiHome2Line className="ico" />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/explore">
          <div className="menu--option">
            <RiEarthLine className="ico" />
            <p>Esplora</p>
          </div>
        </Link>
        <hr />
        <div className="menu--option">
          <RiRadio2Line className="ico" />
          <p>Radio</p>
        </div>
        <div className="menu--option">
          <RiMic2Line className="ico" />
          <p>Podcast</p>
        </div>
        {/* <div className="menu--option">
          <RiNotificationLine className="ico" />
          <p>Notifications</p>
        </div> */}

        <div className="menu--option">
          <RiDiscLine className="ico" />
          <p>Musica</p>
        </div>
        <hr />
        <div className="menu--option">
          <RiBookmarkLine className="ico" />
          <p>Salvati</p>
        </div>
        {/* <div className="menu--option">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Solid_white_bordered.svg/600px-Solid_white_bordered.svg.png"
            alt="comments--avatar"
          />
          <p>Profile</p>
        </div> */}
        <div className="menu--option">
          <RiSettings4Line className="ico" />
          <p>Impostazioni</p>
        </div>

        <div
          className="menu--option"
          style={{
            backgroundColor: "#00FFB1",
            color: "black",
            fontWeight: "bold"
            // marginTop: "100px"
          }}
        >
          <RiMicLine className="ico" />

          <p>Registra</p>
        </div>
      </section>
    </>
  );
}
