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
  const trends = [
    {
      id: 1,
      tag: "#Trend1"
    },
    {
      id: 2,
      tag: "#Trend2"
    },
    {
      id: 3,
      tag: "#Trend3"
    },
    {
      id: 4,
      tag: "#Trend4"
    },
    {
      id: 5,
      tag: "#Trend5"
    },
    {
      id: 6,
      tag: "#Trend6"
    }
  ];
  return (
    <>
      <section className="trend--feed">
        <div>
          <h2>Trends from world</h2>
         <br/>
         <section>
            {trends.map((el) => {
              const { tag } = el;
              return (
                <div className="trend--option">
                  {/* <RiBookmarkLine /> */}
                  <p>{tag}</p>
                  <div className="post--data--played"></div>
                </div>
              );
            })}
          </section>
        </div>
      </section>
    </>
  );
}
