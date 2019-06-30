import React from "react";
import img1 from "../images/cosmetic-2357981_1920.jpg";
import "../styles/Header.css";

const Header = () => {
  return (
    <React.Fragment>
      <img src={img1} alt="site-header" />
    </React.Fragment>
  );
};

export default Header;
