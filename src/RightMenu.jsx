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

export default function Homepage() {
  return (
    <>
      <section className="trend--feed">
        <div>
          <h2>Trends from world</h2>
          <section>
            <div className="trend--option">
              {/* <RiBookmarkLine /> */}
              <p>#Trend</p>
              {/* <div className="post--data--played">
        <RiPlayMiniLine />
        <p>2mln</p>
      </div> */}
            </div>
            <div className="trend--option">
              {/* <RiBookmarkLine /> */}
              <p>#Trend</p>
              {/* <div className="post--data--played">
        <RiPlayMiniLine />
        <p>2mln</p>
      </div> */}
            </div>
            <div className="trend--option">
              {/* <RiBookmarkLine /> */}
              <p>#Trend</p>
              {/* <div className="post--data--played">
        <RiPlayMiniLine />
        <p>2mln</p>
      </div> */}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
