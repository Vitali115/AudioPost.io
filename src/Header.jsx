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
export default function Header() {
  return (
    <>
      <div className="header">
        <img src="https://i.ibb.co/mBP0YGb/Raggruppa-19.png" alt="logo" />
        {/* <div className="header__input">
					<RiSearchLine />
					<input placeholder="Search" type="text" />
				</div> */}
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
