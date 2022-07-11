import React from "react";
import ReactDOM from "react-dom";

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
import Header from "./Header";
import Menu from "./LeftMenu";
import Trend from "./RightMenu";
//
import Grid from "@material-ui/core/Grid";
import Microphone from "./components/Microphone/Microphone";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";

//
// import Feed from "./Feed";
export default function Homepage() {
  const [files, setFiles] = useState([null]);

  const pushFile = (file) => {
    setFiles([...files, file]);
  };
  return (
    <>
      <section className="App">
        <Header />

        <section className="markup--page">
          <Menu />

          {/* <Feed /> */}
          <section>
            <Microphone pushFile={pushFile} />
            {files.map((file, index) => (
              <Grid key={index} item>
                <AudioPlayer file={file} />
              </Grid>
            ))}
          </section>
          <Trend />
        </section>
      </section>
    </>
  );
}
