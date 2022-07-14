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
  RiPauseMiniFill,
  RiShareLine,
  RiChat3Line,
  RiChat2Line,
  RiMore2Fill,
  RiShareForwardLine
} from "react-icons/ri";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DoneIcon from "@material-ui/icons/Done";
import "../../styles.scss";

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

  const [show, setShow] = useState(false);

  return (
    <>
      <section className="post" stlye={{ backgroundColor: "black" }}>
        <div className="post--acc">
          <div className="post--data--user">
            <IconButton>
              <img
                src="https://scontent.ftrn1-1.fna.fbcdn.net/v/t1.18169-9/408385_476637849071030_1912827395_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MfzZuxJPHngAX8AfoiW&_nc_ht=scontent.ftrn1-1.fna&oh=00_AT9OKhxi3GMaKp-KDkz1-T_3Ad6iNAv7siU1Pverpo9cmw&oe=62F52A26"
                alt="post--avatar"
              />
            </IconButton>
            <div>
              <h3>Nome</h3>

              <p>1 sec fà</p>
              {/* <RiPlayMiniLine className="ico" /> */}
            </div>
          </div>

          <div className="post--interactions--option">
            <RiMore2Fill className="option" />
          </div>
        </div>

        <div className="post--text">
          <h2 style={{ fontSize: 19 }}>Questo è un Audiopost!🔥🔥🔥</h2>
        </div>

        {/* <img style={{ width:"80px" }}  src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/sign-of-the-horns_light-skin-tone_1f918-1f3fb_1f3fb.png" /> */}

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
                      src="https://scontent.ftrn1-1.fna.fbcdn.net/v/t1.18169-9/408385_476637849071030_1912827395_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MfzZuxJPHngAX8AfoiW&_nc_ht=scontent.ftrn1-1.fna&oh=00_AT9OKhxi3GMaKp-KDkz1-T_3Ad6iNAv7siU1Pverpo9cmw&oe=62F52A26"
                      alt="comments--avatar"
                    />
                    <h4>Nome</h4>
                    <p>Sono un commento</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="post--interactions">
          <div className="post--interactions--option">
            <RiHeart3Line className="ico" />
            <p>Mi piace</p>
          </div>

          <div
            onClick={() => setShow((prev) => !prev)}
            className="post--interactions--option"
          >
            <RiChat2Line className="ico" />
            <p>Commenta</p>
          </div>

          <div className="post--interactions--option">
            <RiShareForwardLine className="ico" />
            <p>Condividi</p>
          </div>
          <div className="post--interactions--option">
            <RiBookmarkLine className="ico" />
            <p>Salva</p>
          </div>
        </div>
      </section>
      {show && (
        <section className="post--user--option">
          <Link to="/user/">
            <img
              style={{
                width: 35,
                borderRadius: "100%",
                marginRight: "-35px",
                marginLeft: 10
              }}
              src="https://scontent.ftrn1-1.fna.fbcdn.net/v/t1.18169-9/408385_476637849071030_1912827395_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MfzZuxJPHngAX8AfoiW&_nc_ht=scontent.ftrn1-1.fna&oh=00_AT9OKhxi3GMaKp-KDkz1-T_3Ad6iNAv7siU1Pverpo9cmw&oe=62F52A26"
              alt="comments--avatar"
            />
          </Link>
          <div>
            <input
              className="comment-post"
              placeholder="Scrivi un commento"
            ></input>
            <IconButton>
              <div className="done--comment-button">
                <DoneIcon className="ico--com" />
              </div>
            </IconButton>
          </div>
          <IconButton>
            <div className="record--comment-button">
              <RiMicLine className="ico--rec" />
            </div>
          </IconButton>
        </section>
      )}
      <hr />
    </>
  );
}

export default AudioPlayer;
