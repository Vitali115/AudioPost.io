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

import { RiMicLine } from "react-icons/ri";

import "./microphone.scss";

import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";

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
              <p>Record a Post</p>
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
              height: 40,
              marginBottom: 15,
              marginTop: 15,
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
          style={{ fontWeight: "bold", fontFamily: "inter" }}
        ></DialogTitle>

        <DialogContent>
          {tempFile ? (
            <div className="wawe--recorded" id="wavesurfer-id" />
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
            {tempFile && (
              <Grid className="audio" item container justify="left" xs={12}>
                {!isPlaying ? (
                  <IconButton onClick={togglePlayback}>
                    <PlayArrowIcon className={classes.icon} />
                  </IconButton>
                ) : (
                  <IconButton onClick={togglePlayback}>
                    <PauseIcon className={classes.icon} />
                  </IconButton>
                )}
                <IconButton onClick={stopPlayback}>
                  <StopIcon className={classes.icon} />
                </IconButton>
              </Grid>
            )}
            {!record && tempFile && (
              <input
                type="text"
                placeholder="Titolo del post"
                style={{
                  width: "100%",
                  // backgroundColor: "black",
                  // color: "white",
                  height: 45,
                  border: "none",
                  borderRadius: 25,
                  fontWeight: "bold",
                  paddingLeft: 10,
                  marginTop: 5,
                  marginLeft: 5,
                  marginBottom: 5
                }}
              />
            )}
            <Grid item container justify="left" xs={12}>
              {!record && !tempFile && (
                <IconButton onClick={startRecording}>
                  <div className="record--interactions">
                    <FiberManualRecordIcon
                      style={{ color: "#00FFB1" }}
                      className={classes.icon}
                    />{" "}
                    <p style={{ fontSize: 16, color: "white", marginTop: 6 }}>
                      Registra
                    </p>
                  </div>
                </IconButton>
              )}

              {record && (
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
              )}

              <IconButton
                style={{ color: "#00FFB1", display: "flex" }}
                onClick={handleDone}
              >
                {!record && tempFile && (
                  <div className="record--interactions">
                    <DoneIcon
                      style={tempFile && !record ? { color: "#00FFB1" } : {}}
                      className={classes.icon}
                    />{" "}
                    {!record && tempFile && (
                      <p style={{ fontSize: 16, color: "white", marginTop: 6 }}>
                        {" "}
                        Pubblica
                      </p>
                    )}
                  </div>
                )}
              </IconButton>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
}
