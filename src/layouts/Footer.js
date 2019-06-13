import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <h2>footer</h2>
      <Route
        path="/"
        exact
        render={props => {
          return (
            <p>
              You're on<span> main page</span>
            </p>
          );
        }}
      />

      <Route
        path="/:page"
        exact
        render={props => {
          return (
            <p>
              You're on{" "}
              <span className="footer__span">{props.match.params.page}</span>
              page
            </p>
          );
        }}
      />

      <Route
        path="/:page/:idProduct"
        exact
        render={props => {
          return (
            <p>
              Jesteś na stronie <span>{props.match.params.idProduct}</span>
            </p>
          );
        }}
      />
    </div>
  );
};

export default Footer;
