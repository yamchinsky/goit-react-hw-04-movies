import React from "react";

import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "../views/HomePage";
import MoviesPage from "../views/movies/MoviesPage";
import MovieDetailsPage from "../views/moviesId/MovieDetailsPage";
// import Cast from "../views/moviesId/cast/Cast";
// import Reviews from "../views/moviesId/reviews/Reviews";
import NotFound from "../views/NotFound";

const App = () => (
  <div>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies" component={MoviesPage} />
      <Route exact path="/movies/:movieId" component={MovieDetailsPage} />

      <Route component={NotFound} />
      {/* <Redirect to="/" /> */}
    </Switch>
  </div>
);

export default App;
