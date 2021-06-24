import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import routes from "../../routes";
import Navigation from "../Navigation/Navigation";

const AppBar = () => {
  return (
    <header className="AppBar">
      <Navigation />
    </header>
  );
};

export default AppBar;
