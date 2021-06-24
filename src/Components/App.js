import React from "react";
import AppBar from "./AppBar/AppBar";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "../views/HomePage";
import MoviesPage from "../views/movies/MoviesPage";
import MovieDetailsPage from "../views/moviesId/MovieDetailsPage";
import Cast from "../views/moviesId/cast/Cast";
import Reviews from "../views/moviesId/reviews/Reviews";
import NotFound from "../views/NotFound";
import routes from "../routes";

const App = () => (
  <div>
    <AppBar />
    <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route exact path={routes.movies} component={MoviesPage} />
      <Route exact path={routes.movieDetails} component={MovieDetailsPage} />
      <Route exact path={routes.movieCasts} component={Cast} />
      <Route exact path={routes.movieReviews} component={Reviews} />
      <Route component={NotFound} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
