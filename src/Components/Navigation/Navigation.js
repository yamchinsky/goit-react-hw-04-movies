import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

const Navigation = () => {
  return (
    <ul className="navigation-menu">
      <li className="navigation-menu-item">
        <NavLink exact to={routes.home}>
          Home
        </NavLink>
      </li>
      <li className="navigation-menu-item">
        <NavLink exact to={routes.movies}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
