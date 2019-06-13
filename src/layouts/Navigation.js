import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  { name: "start", path: "/", exact: true },
  { name: "products", path: "/products" },
  { name: "contact", path: "/contact" },
  { name: "admin panel", path: "/admin" }
];
const Navigation = () => {
  const menu = list.map(menuItem => (
    <li key={menuItem.name}>
      <NavLink
        className="main__listItem"
        to={menuItem.path}
        exact={menuItem.exact ? menuItem.exact : false}
      >
        {menuItem.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="main">
      <ul className="main__list">{menu}</ul>
    </nav>
  );
};

export default Navigation;
