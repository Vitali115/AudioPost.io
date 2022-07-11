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
  return <></>;
}
