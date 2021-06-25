import AppBar from "./AppBar/AppBar";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "../views/HomePage";
import MoviesPage from "../views/movies/MoviesPage";
import MovieDetailsPage from "../views/moviesId/MovieDetailsPage";
import Cast from "../views/moviesId/cast/Cast";
import Reviews from "../views/moviesId/reviews/Reviews";
import NotFound from "../views/NotFound";
import routes from "../routes";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route
            exact
            path={routes.movies}
            component={MoviesPage}
            onSubmit={this.formSubmitHandler}
          />
          <Route
            exact
            path={routes.movieDetails}
            component={MovieDetailsPage}
          />
          <Route exact path={routes.movieCasts} component={Cast} />
          <Route exact path={routes.movieReviews} component={Reviews} />
          <Route component={NotFound} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
