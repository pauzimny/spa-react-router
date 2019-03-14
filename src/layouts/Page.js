import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsList from "../pages/ProductsList";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Error from "../pages/Error";

const Page = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" component={ProductsList} />
        <Route path="/product/:id" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route exact component={Error} />
      </Switch>
    </React.Fragment>
  );
};

export default Page;
