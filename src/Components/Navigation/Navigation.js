import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import routes from "../../routes";

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink
          exact
          to={routes.home}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to={routes.movies}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
