import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "../styles/MobileNav.css";
import { NavLink } from "react-router-dom";

class MobileNav extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    const list = [
      { name: "start", path: "/", exact: true },
      { name: "products", path: "/products" },
      { name: "contact", path: "/contact" },
      { name: "admin panel", path: "/admin" }
    ];

    const mobileMenu = list.map(menuItem => (
      <MenuItem
        key={menuItem.name}
        className="mobile__menu-item"
        onClick={this.handleClose}
      >
        <NavLink
          className="mobile__listItem"
          to={menuItem.path}
          exact={menuItem.exact ? menuItem.exact : false}
        >
          {menuItem.name}
        </NavLink>
      </MenuItem>
    ));

    return (
      <div className="nav__mobile">
        <Button
          className="nav__mobile__button"
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Menu
        </Button>
        <Menu
          disableAutoFocusItem
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {mobileMenu}
        </Menu>
      </div>
    );
  }
}

export default MobileNav;
