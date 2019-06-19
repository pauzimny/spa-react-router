import React from "react";
import img1 from "../images/cosmetic-2357981_1920.jpg";
import img2 from "../images/essential-oil-3816410_1920.jpg";
import img3 from "../images/herbs-3119132_1920.jpg";
import "../styles/Header.css";
import { Route, Switch } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <img src={img1} alt="site-header" />
      {/* <Switch>
        <Route
          path="/"
          exact
          render={() => <img src={img1} alt="kosmetyki" />}
        />
        <Route
          path="/products"
          render={() => <img src={img2} alt="kosmetyki" />}
        />
        <Route
          path="/contact"
          render={() => <img src={img3} alt="kosmetyki" />}
        />
        <Route
          path="/admin"
          render={() => <img src={img1} alt="kosmetyki" />}
        />
        <Route render={() => <img src={img1} alt="kosmetyki" />} />
      </Switch> */}
    </React.Fragment>
  );
};

export default Header;
