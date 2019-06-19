import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";
import Icon from "../components/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__contact">Contact me on social media</p>
      <ul className="footer__icon-container">
        <Icon
          className="footer__icon"
          icon={<FontAwesomeIcon icon={["fab", "facebook"]} />}
          url={"http://facebook.com"}
          alt={"faceook-contact"}
        />
        <Icon
          icon={<FontAwesomeIcon icon={["fab", "twitter"]} />}
          url={"http://twitter.com"}
          alt={"twitter-contact"}
        />
        <Icon
          icon={<FontAwesomeIcon icon={["fab", "instagram"]} />}
          url={"http://instagram.com"}
          alt={"instagram-contact"}
        />
      </ul>
      Created by Paulina Zimny 2019
    </div>
  );
};

export default Footer;
