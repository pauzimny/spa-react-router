import React from "react";
import ReactDOM from "react-dom";
import App from "../src/layouts/App";
import * as contentful from "contentful";

// var client = contentful.createClient({
//   space: "a6x3r1vs2g9c",
//   accessToken: "y0oZpRPX5uHlU72fueFoiLrvKaHVo8txWX6UniyjAsc"
// });
// client.getEntries().then(entries => {
//   entries.items.forEach(entry => {
//     if (entry.fields) {
//       console.log(entry.fields);
//     }
//   });
// });
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
