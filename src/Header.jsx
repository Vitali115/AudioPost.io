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

import IconButton from "@material-ui/core/IconButton";

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
            <input className="header--input" placeholder="Search" />
            <IconButton className="header--search">
              <RiSearchLine style={{ color: "white" }} />
            </IconButton>
          </div>
        </div>

        <div className="header--user--interactions">
          <RiNotificationLine className="ico" />

          <RiChat1Line className="ico" />
          <img
            style={{
              borderRadius: 100
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Solid_white_bordered.svg/600px-Solid_white_bordered.svg.png"
            alt="comments--avatar"
          />
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
