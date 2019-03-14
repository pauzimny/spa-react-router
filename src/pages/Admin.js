import React from "react";
import { Route, Redirect } from "react-router-dom";

const permission = false;

const Admin = () => {
  return (
    <Route
      render={() =>
        permission ? <h3>Panel Admina-witamy</h3> : <Redirect to="/login" />
      }
    />
  );
};

export default Admin;
