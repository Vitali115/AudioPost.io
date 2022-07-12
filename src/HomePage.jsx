import React from "react";
import "./styles.scss";
import { useState } from "react";
import Header from "./Header";
import Menu from "./LeftMenu";
import Trend from "./RightMenu";
import Grid from "@material-ui/core/Grid";
import Microphone from "./components/Microphone/Microphone";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
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
