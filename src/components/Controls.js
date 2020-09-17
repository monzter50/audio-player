import React, { useState, useRef,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AudioSrc from "../assets/audio.mp3";
import "./Controls.css";
const Controls = () => {
  const [play, setPlay] = useState(false);
  const [volumen, setVolumen] = useState(20);
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audio = useRef("audio_tag");

  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + ~~s;
  };
  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute
  }
  
  console.log(dur,currentTime,`audio -- ${audio.current.duration}`)
  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause();
  return (
    <div className="Control">
      <div className="Control-item">
        <FontAwesomeIcon style={{ marginRight: ".5rem" }} onClick={() => {  toggleAudio(); }} icon="play-circle" />
        <span style={{ marginRight: ".5rem" }}>
          {fmtMSS(currentTime)}/ {fmtMSS(dur)}
        </span>
        <audio
          ref={audio}
          type="audio/mpeg"
          onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
          onCanPlay={(e) => setDur(e.target.duration)}
          preload="true"
          src={AudioSrc}
        />
        <input
          type="range"
          value={dur ? (currentTime * 100) / dur : 0}
          name=""
          id=""
          onChange={handleProgress}
          style={{ marginRight: ".5rem" }}
        />
      </div>
      <div className="Control-item">
        <FontAwesomeIcon style={{ marginRight: ".5rem" }} icon="volume-up" />
        <input
          type="range"
          style={{ marginRight: ".5rem" }}
          value={volumen}
          name=""
          id=""
        />
      </div>
    </div>
  );
};

export default Controls;
