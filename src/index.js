import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faPlayCircle,
  faVolumeDown,
  faVolumeOff,
  faVolumeUp,
  faVolumeMute,
  faPause,
  faStepBackward,
  faStepForward,
  faForward,
  faBackward
} from "@fortawesome/free-solid-svg-icons";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
library.add(
  fab,
  faPlayCircle,
  faVolumeDown,
  faVolumeOff,
  faVolumeUp,
  faVolumeMute,
  faPause,
  faStepBackward,
  faStepForward,
  faForward,
  faBackward
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
