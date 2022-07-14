import React, { useState, useRef, useEffect } from "react";

import { ReactMic } from "react-mic";

import WaveSurfer from "wavesurfer";

import Grid from "@material-ui/core/Grid";

import StopIcon from "@material-ui/icons/Stop";

import ArrowBackIcon from "@material-ui/icons//ArrowBack";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import DoneIcon from "@material-ui/icons/Done";

import CloseIcon from "@material-ui/icons/Close";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import PauseIcon from "@material-ui/icons/Pause";

import Dialog from "@material-ui/core/Dialog";

import DialogActions from "@material-ui/core/DialogActions";

import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";

import { RiMicLine, RiMic2Line } from "react-icons/ri";

import "./microphone.scss";

import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";

import UploadIcon from "@mui/icons-material/Upload";

const useStyles = makeStyles((theme) => ({
  icon: {
    height: 38,
    width: 38,
    color: "white"
  },
  iconmic: {
    height: 22,
    width: 22,
    color: "white"
  },
  reactmic: {
    width: "100%",
    height: 200,

    backgroundColor: "black"
  },
  wavesurfer: {
    width: "100%"
  },
  flex: {
    flex: 1
  }
}));

export default function Microphone({ pushFile }) {
  const [record, setRecord] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [tempFile, setTempFile] = React.useState(null);

  const [playerReady, setPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const wavesurfer = useRef(null);

  useEffect(() => {
    if (!open || (open && !tempFile)) return;

    wavesurfer.current = WaveSurfer.create({
      container: "#wavesurfer-id",
      waveColor: "grey",
      progressColor: "#00FFB1",
      height: 200,
      cursorWidth: 9,
      cursorColor: "#00FFB1",
      barWidth: 3,
      normalize: true,
      responsive: true,
      fillParent: true
    });

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
  }, [open, tempFile]);

  useEffect(() => {
    console.log("tempFile", tempFile);
    if (tempFile) {
      wavesurfer.current.load(tempFile.blobURL);
    }
  }, [tempFile]);

  const togglePlayback = () => {
    if (!isPlaying) {
      wavesurfer.current.play();
    } else {
      wavesurfer.current.pause();
    }
  };
  const stopPlayback = () => wavesurfer.current.stop();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDone = () => {
    if (tempFile) {
      pushFile(tempFile);
      setTempFile(null);
      setRecord(false);
      setOpen(false);
    }
  };

  const handleCancel = () => {
    setRecord(false);
    setTempFile(null);
    setOpen(false);
  };

  const startRecording = () => {
    setTempFile(null);
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = (recordedBlob) => {
    //console.log("chunk of real-time data is: ", recordedBlob);
  };

  const onStop = (recordedBlob) => {
    setTempFile(recordedBlob);
  };

  const classes = useStyles();

  return (
    <>
      <Grid container justify="center">
        <Grid item>
          <IconButton onClick={handleClickOpen}>
            <div className="record--button">
              <RiMicLine className={classes.iconmic} />
              <p>Registra</p>
            </div>
          </IconButton>
        </Grid>
      </Grid>
      <hr />
      <Dialog
        className="dialog--create-post"
        open={open}
        onClose={handleCancel}
      >
        <div
          style={{
            backgroundColor: "black",
            textAlign: "center",
            border: "2px solid white",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          {!record && tempFile && (
            <IconButton onClick={startRecording}>
              <ArrowBackIcon className={classes.icon} />
            </IconButton>
          )}
          <img
            style={{
              height: 30,
              marginBottom: 15,
              marginTop: 16,
              marginLeft: 15
            }}
            src="https://i.ibb.co/mBP0YGb/Raggruppa-19.png"
            alt="logo"
          />{" "}
          <IconButton onClick={handleCancel}>
            <CloseIcon
              style={tempFile && !record ? { color: "#FF0066" } : {}}
              className={classes.icon}
            />
          </IconButton>
        </div>

        <DialogTitle
          className="target"
          style={{ fontWeight: "bold", fontFamily: "inter" }}
        >
          {!record && tempFile && (
            <div className="post--data--user">
              <IconButton>
                <img
                  src="https://scontent.ftrn1-1.fna.fbcdn.net/v/t1.18169-9/408385_476637849071030_1912827395_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MfzZuxJPHngAX8AfoiW&_nc_ht=scontent.ftrn1-1.fna&oh=00_AT9OKhxi3GMaKp-KDkz1-T_3Ad6iNAv7siU1Pverpo9cmw&oe=62F52A26"
                  alt="post--avatar"
                />
              </IconButton>
              <input
                type="text"
                placeholder="Titolo del post"
                style={{
                  width: "84%",
                  // backgroundColor: "black",
                  // color: "white",
                  height: 45,
                  fontSize: 18,
                  borderRadius: 8,

                  paddingLeft: 10,
                  marginTop: 13,
                  marginLeft: 1,
                  marginBottom: 13
                }}
              />
            </div>
          )}
          {/* <div>
          <h3>Nome</h3>

          <p>1 sec fà</p>
  
        </div> */}
        </DialogTitle>

        <DialogContent>
          {tempFile ? (
            <>
              <div stlye={{ display: "flex" }}>
                {tempFile && (
                  <div className="play--butt" item container xs={12}>
                    {!isPlaying ? (
                      <IconButton
                        style={{ backgroundColor: "black" }}
                        onClick={togglePlayback}
                      >
                        <PlayArrowIcon
                          style={{ float: "left" }}
                          className={classes.icon}
                        />
                      </IconButton>
                    ) : (
                      <IconButton
                        style={{ backgroundColor: "#00ffb1", color: "black" }}
                        onClick={togglePlayback}
                      >
                        <PauseIcon className={classes.icon} />
                      </IconButton>
                    )}
                    {/* <IconButton onClick={stopPlayback}>
                  <StopIcon className={classes.icon} />
                </IconButton> */}
                  </div>
                )}
                <Grid div className="wawe--recorded" id="wavesurfer-id" />
              </div>
            </>
          ) : (
            <ReactMic
              record={record}
              className={classes.reactmic}
              onStop={onStop}
              onData={onData}
              strokeColor="grey"
            />
          )}
        </DialogContent>

        <DialogActions style={{ border: "2px solid white" }} className="audio">
          <Grid className="audio" container>
            {!record && tempFile && (
              <>
                <Grid
                  style={{
                    marginLeft: 10,
                    marginTop: 10,
                    marginBottom: "-10px"
                  }}
                  item
                  container
                  justify="left"
                  xs={12}
                >
                  {/* <p>Scegli la categoria :</p> */}
                </Grid>
                <Grid item container justify="left" xs={12}>
                  <IconButton>
                    <div className="record--interactionss">
                      <p
                        style={{
                          fontSize: 16,
                          color: "white",
                          marginTop: 6,
                          paddingLeft: 6
                        }}
                      >
                        {" "}
                        Vocale
                      </p>
                    </div>
                  </IconButton>

                  <IconButton>
                    <div className="record--interactions-">
                      <p
                        style={{
                          fontSize: 16,
                          color: "white",
                          marginTop: 6,
                          paddingLeft: 6
                        }}
                      >
                        {" "}
                        Podcast
                      </p>
                    </div>
                  </IconButton>
                  <IconButton>
                    <div className="record--interactions-">
                      <p
                        style={{
                          fontSize: 16,
                          color: "white",
                          marginTop: 6,
                          paddingLeft: 6
                        }}
                      >
                        {" "}
                        Canzone
                      </p>
                    </div>
                  </IconButton>
                </Grid>
                <Grid className="explore--grid">
                  <section className="post">
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/lion_1f981.png" />
                  </section>

                  <div className="post">
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/sign-of-the-horns_light-skin-tone_1f918-1f3fb_1f3fb.png" />
                  </div>

                  <section className="post">
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/alien_1f47d.png" />
                  </section>

                  <section className="post">
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/new-moon-face_1f31a.png" />
                  </section>

                  <section className="post">
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/brain_1f9e0.png" />
                  </section>
                </Grid>
              </>
            )}

            <Grid className="button--record" item container>
              {!record && !tempFile && (
                <>
                  <IconButton onClick={startRecording}>
                    <div
                      stlye={{ width: "100%" }}
                      className="record--interactions"
                    >
                      <FiberManualRecordIcon
                        style={{ color: "#00FFB1" }}
                        className={classes.icon}
                      />{" "}
                      <p style={{ fontSize: 16, color: "white", marginTop: 6 }}>
                        Registra
                      </p>
                    </div>
                  </IconButton>
                  {/* <IconButton onClick={startRecording}>
                  <div
                    stlye={{ width: "100%" }}
                    className="record--interactions"
                  >
                    <UploadIcon
                      style={{ color: "#00FFB1" }}
                      className={classes.icon}
                    />{" "}
                    <p style={{ fontSize: 16, color: "white", marginTop: 6 }}>
                    Upload
                    </p>
                  </div>
                </IconButton> */}
                </>
              )}

              {record && (
                <>
                  <IconButton onClick={stopRecording}>
                    <div className="record--interactions">
                      <StopIcon
                        style={{ color: "#FF0066", height: 38, width: 38 }}
                      />

                      <p style={{ fontSize: 16, color: "white", marginTop: 6 }}>
                        {" "}
                        Stop
                      </p>
                    </div>
                  </IconButton>
                </>
              )}

              <IconButton
                style={{ color: "#00FFB1", display: "flex" }}
                onClick={handleDone}
              >
                {!record && tempFile && (
                  <>
                    <div className="done-">
                      <div className="button--done">
                        <DoneIcon
                          style={
                            tempFile && !record ? { color: "#00FFB1" } : {}
                          }
                          className={classes.icon}
                        />{" "}
                        {!record && tempFile && (
                          <p
                            style={{
                              fontSize: 16,
                              color: "white",
                              marginTop: 6
                            }}
                          >
                            {" "}
                            Pubblica
                          </p>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </IconButton>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
}
