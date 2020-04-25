import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CCV from "./CCV/CCV.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<CCV />, document.getElementById("root"));

serviceWorker.unregister();
