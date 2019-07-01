import React from "react";
import ReactDOM from "react-dom";
import App from "../src/layouts/App";
import * as serviceWorker from "./serviceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faHome,
  faBars
} from "@fortawesome/free-solid-svg-icons";

library.add(faCheckSquare, fab, faHome, faBars);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
