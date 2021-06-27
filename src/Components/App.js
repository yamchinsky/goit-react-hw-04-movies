import AppBar from "./AppBar/AppBar";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../routes";
import React, { lazy, Suspense, Component } from "react";
// import Cast from "../views/moviesId/cast/Cast";
// import Reviews from "../views/moviesId/reviews/Reviews";

const HomePage = lazy(() => import("../views/HomePage"));
// import HomePage from "../views/HomePage";
const MoviesPage = lazy(() => import("../views/movies/MoviesPage"));
// import MoviesPage from "../views/movies/MoviesPage";
const MovieDetailsPage = lazy(() =>
  import("../views/moviesId/MovieDetailsPage")
);
// import MovieDetailsPage from "../views/moviesId/MovieDetailsPage";
const NotFound = lazy(() => import("../views/NotFound"));
// import NotFound from "../views/NotFound";

class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <AppBar />
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route
            exact
            path={routes.movies}
            component={MoviesPage}
            onSubmit={this.formSubmitHandler}
          />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          {/* <Route exact path={routes.movieCast} component={Cast} />
          <Route exact path={routes.movieReviews} component={Reviews} /> */}
          <Route component={NotFound} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    );
  }
}

export default App;
