import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer";
import uuidv4 from "uuid/v4";

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
  RiPauseMiniFill
} from "react-icons/ri";

import "./style.scss";

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

//               app            //

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { green, red, blue } from "@material-ui/core/colors";

import PauseIcon from "@material-ui/icons/Pause";
import Grid from "@material-ui/core/Grid";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4"
];

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    minWidth: 240,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    width: "100%"
  },
  list: {
    padding: 0
  },
  listItem: {
    //paddingBottom: 0
  },
  buttons: {
    padding: theme.spacing(1)
  },
  controls: {
    minWidth: "100px"
  },
  icon: {
    height: 18,
    width: 18,
    color: "white"
  },
  avatar: {
    display: "inline-block"
  }
}));
/*
avatar username ostalo layout sa grid

*/
function AudioPlayer({ file }) {
  const wavesurfer = useRef(null);

  const [playerReady, setPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const wavesurferId = `wavesurfer--${uuidv4()}`;

  useEffect(() => {
    wavesurfer.current = WaveSurfer.create({
      container: `#${wavesurferId}`,

      progressColor: "#00FFB1",
      cursorWidth: 2,
      barRadius: 0,
      barWidth: 2,
      barMaxHeight: 10,

      normalize: true
    });

    const wav = require("../../static/12346 3203.ogg");

    // console.log("wav", wav);
    wavesurfer.current.load(wav);

    wavesurfer.current.on("ready", () => {
      setPlayerReady(true);
    });

    const handleResize = wavesurfer.current.util.debounce(() => {
      wavesurfer.current.empty();
      wavesurfer.current.drawBuffer();
    }, 150);

    wavesurfer.current.on("play", () => setIsPlaying(true));
    wavesurfer.current.on("pause", () => setIsPlaying(false));
    window.addEventListener("resize", handleResize, false);
  }, []);

  useEffect(() => {
    console.log("file", file);
    if (file) {
      wavesurfer.current.load(file.blobURL);
    }
  }, [file]);

  const togglePlayback = () => {
    if (!isPlaying) {
      wavesurfer.current.play();
    } else {
      wavesurfer.current.pause();
    }
  };

  const stopPlayback = () => wavesurfer.current.stop();

  const classes = useStyles();

  let transportPlayButton;

  if (!isPlaying) {
    transportPlayButton = (
      <IconButton onClick={togglePlayback}>
        <RiPlayMiniLine className="post--play" />
      </IconButton>
    );
  } else {
    transportPlayButton = (
      <IconButton onClick={togglePlayback}>
        <RiPauseMiniFill
          style={{ backgroundColor: "#00FFB1" }}
          className="post--play"
        />
      </IconButton>
    );
  }

  return (
    <>
      <section className="post">
        <div className="post--acc">
          <div className="post--data--user">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Solid_white_bordered.svg/600px-Solid_white_bordered.svg.png"
              alt="post--avatar"
            />
            <h3>Nome</h3>
            <p>1 hr ago</p>
          </div>

          <div className="post--data--played">
            <RiPlayMiniLine className="ico" />
            <p></p>
          </div>
        </div>

        <div className="post--text">
          <h2></h2>
        </div>
        <hr />

        <div className="post--audio--player">
          <div className="post--audio--progress--interactions">
            <div className="post--audio--progressBar">
              <div>
                <Grid item xs={5}>
                  {transportPlayButton}
                </Grid>
              </div>
            </div>
            <p> 0.00 </p>
            {/* <div className="post--audio--interaction">
                   
                    </div> */}

            <Grid item style={{ width: "100%" }} id={wavesurferId} />

            <p>1.15 </p>
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

export default AudioPlayer;
