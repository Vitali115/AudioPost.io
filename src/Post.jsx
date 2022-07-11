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
  const audioPosts = [
    {
      id: 1,
      user: "name",
      posted: "1 day ago",
      view: "100",
      text: "I Love it, pararapaapah",
      audio: "",
      time: "1.15",
      comments: 2,
      like: 2,
      saved: 0
    }
  ];

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: "#waveform",

      progressColor: "#00FFB1",
      cursorWidth: 2,
      barRadius: 0,
      barWidth: 2,
      barMaxHeight: 10,

      normalize: true
    });

    wavesurfer.load("stream.mp3");

    wavesurfer.on("ready", function () {
      wavesurfer.play();

      // const togglePlayback = () => {
      //   if (!isPlaying) {
      //     wavesurfer.current.play();
      //   } else {
      //     wavesurfer.current.pause();
      //   }
      // };
    });
  }, []);
  return (
    <>
      <section className="post">
        <div className="post--acc">
          <div className="post--data--user">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Solid_white_bordered.svg/600px-Solid_white_bordered.svg.png"
              alt="post--avatar"
            />
            <h3>{user}</h3>
            <p>{posted}</p>
          </div>

          <div className="post--data--played">
            <RiPlayMiniLine className="ico" />
            <p>{view}</p>
          </div>
        </div>

        <div className="post--text">
          <h2>{text}</h2>
        </div>
        <hr />
        <div className="post--audio--player">
          <div className="post--audio--progress--interactions">
            <div className="post--audio--progressBar">
              <div>
                <RiPlayMiniLine className="post--play" />
              </div>
            </div>
            <p> 0.00 </p>
            {/* <div className="post--audio--interaction">
                   
                    </div> */}
            <div id="waveform"></div>
            <p>{time} </p>
          </div>
        </div>
        <hr />

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

        <div className="post--interactions">
          <div className="post--interactions--option">
            <RiHeart3Line className="ico" />
            <p>like</p>
          </div>
          <div className="post--interactions--option">
            <RiChat1Line className="ico" />
            <p>reply</p>
          </div>

          <div className="post--interactions--option">
            <RiMicLine className="ico" />
            <p>record</p>
          </div>

          <div className="post--interactions--option">
            <RiBookmarkLine className="ico" />
            <p>Save</p>
          </div>
        </div>
      </section>
    </>
  );
}
