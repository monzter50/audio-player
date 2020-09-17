import React, { useState, useRef,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AudioSrc from "../assets/audio.mp3";
import "./Controls.css";
const Controls = () => {
  const [play, setPlay] = useState(false);
  const [mute,setMute] = useState(false)
  const [volumen, setVolumen] = useState(0.3);
  const [auxVolume, setAuxVolume] = useState(0);
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audio = useRef("audio_tag");

  const handleVolume = (q) => {
    console.log("volumen",q)
    setVolumen(q);
    audio.current.volume = q;
  }
  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + ~~s;
  };
  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute
  }
  
  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause();
    useEffect(() => {

      if(volumen > 0 ){
          setAuxVolume(volumen)
      }
      let aux = auxVolume
      let valueVolumen = !mute ? aux:0;
      handleVolume(valueVolumen)
    },[mute]);
  return (
    <div className="Control">
      <div className="Control-item">
      <FontAwesomeIcon style={{ marginRight: ".5rem" }} onClick={() => {  toggleAudio(); setPlay(!play)}} icon={!play?"play-circle":"pause"} />

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
        <FontAwesomeIcon 
        onClick={()=>{
          setMute(!mute)
        
          }} style={{ marginRight: ".5rem" }} icon={volumen <=0?"volume-mute":"volume-up"} />
        <input
          type="range"
          style={{ marginRight: ".5rem" }}
          value={Math.round(volumen * 100)} 
          onChange={(e) => handleVolume(e.target.value / 100)}
          name=""
          id=""
        />
      </div>
    </div>
  );
};

export default Controls;
