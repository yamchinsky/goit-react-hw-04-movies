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
import axios from "axios";

class App extends Component {
  state = { searchData: "" };

  componentDidMount() {
    const { query } = this.state;
    axios
      .get(
        `https://api.themoviedb.org/3/${query}/movie?api_key=14cad650e98ee4d1aaf3de321f081384&language=en-US&page=1&include_adult=false`
      )
      .then((response) => this.setState({ searchData: response.data.results }))
      .catch((error) => console.log(error));
  }
  formSubmitHandler = (query) => {
    this.setState({ searchData: query });
  };
  render() {
    return (
      <div>
        <AppBar onSubmit={this.formSubmitHandler} />
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
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
