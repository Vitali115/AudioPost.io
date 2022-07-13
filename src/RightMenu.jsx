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
      tag: "#BETA"
    },
    {
      id: 2,
      tag: "#IWASWONDERING"
    },
    {
      id: 3,
      tag: "#BLACKLIVESMATTER"
    }
  ];

  const update = [
    {
      id: 1,
      tag: "MVP",
      date: "10/07/2022"
    }
  ];

  return (
    <>
      <section className="trend--feed">
        <div>
          <br />
          <h2>Update</h2>
          <hr />

          {update.map((el) => {
            const { tag, date } = el;
            return (
              <div className="trend--option">
                {/* <RiBookmarkLine /> */}
                <p>{tag}</p>
                <p>{date}</p>
                <div className="post--data--played"></div>
              </div>
            );
          })}
          <br />
          <br />
          <h2>Trends from world</h2>
          <hr />

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
          <br />
          <br />
          <h2>Alpha v.0.0.0</h2>
          <hr />
          <div className="update--box">
            <img src="https://i.ibb.co/BCnfzG6/card.png" alt="updateimg" />
          </div>
          <br />
          <br />
          <br />
        </div>
      </section>
    </>
  );
}
