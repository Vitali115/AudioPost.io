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
  RiChat3Line
} from "react-icons/ri";

import IconButton from "@material-ui/core/IconButton";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
export default function Header() {
  return (
    <>
      <div className="header">
        <img src="https://i.ibb.co/mBP0YGb/Raggruppa-19.png" alt="logo" />
        <div style={{ marginTop: "-5px" }}>
          <div className="header--interactions">
            <input className="header--input" placeholder="Cerca" />
            <IconButton className="header--search">
              <RiSearchLine style={{ color: "white" }} />
            </IconButton>
          </div>
        </div>

        <div className="header--user--interactions">
          <RiNotificationLine className="ico" />

          <RiChat3Line className="ico" />
          <Link to="/user/">
            <img
              style={{
                borderRadius: 100
              }}
              src="https://scontent.ftrn1-1.fna.fbcdn.net/v/t1.18169-9/408385_476637849071030_1912827395_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MfzZuxJPHngAX8AfoiW&_nc_ht=scontent.ftrn1-1.fna&oh=00_AT9OKhxi3GMaKp-KDkz1-T_3Ad6iNAv7siU1Pverpo9cmw&oe=62F52A26"
              alt="comments--avatar"
            />
          </Link>
        </div>
        {/* <div
              className="header--option"
              style={{
                backgroundColor: "#00FFB1",
                color: "black",
                fontWeight: "bold",
               
              }}
            >
          
              <p>Create Account</p>
            </div> */}
      </div>
    </>
  );
}
