import axios from "axios";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import routes from "../../../src/routes";
import React, { lazy, Suspense, Component } from "react";

const Cast = lazy(() => import("./cast/Cast"));
// import Cast from "./cast/Cast";
const MovieList = lazy(() => import("../../Components/MovieList/MovieList"));
// import MovieList from "../../Components/MovieList/MovieList";
const Reviews = lazy(() => import("./reviews/Reviews"));
// import Reviews from "./reviews/Reviews";

class MovieDetailsPage extends Component {
  state = {
    backdrop_path: "",
    poster_path: "",
    title: "",
    vote_average: null,
    genres: [{ id: "", name: "" }],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=14cad650e98ee4d1aaf3de321f081384&language=en-US/`
    );

    this.setState({ ...response.data });
  }
  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.state);
  };

  render() {
    console.log(this.props.location.state);
    return (
      <div className="movie-items-container">
        <button
          className="button-back"
          type="button"
          onClick={this.handleGoBack}
        >
          back
        </button>

        <MovieList
          movieId={this.state.id}
          movieName={this.state.name}
          moviePoster={this.state.poster_path}
          movieGenres={this.state.genres}
          movieTitle={this.state.title}
          movieVotes={this.state.vote_averagе}
        />
        <h3 className="additional-info-header">Additional information</h3>
        <div className="additional-info-menu">
          <ul className="additional-menu-container">
            <li
              className="additional-info-link-cast"
              key={this.props.match.movieId}
            >
              <NavLink
                to={{
                  pathname: `${this.props.match.url}/cast`,
                  state: { from: this.props.location },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li
              className="additional-info-link-reviews"
              key={this.props.match.movieId}
            >
              <NavLink
                to={{
                  pathname: `${this.props.match.url}/reviews`,
                  state: { from: this.props.location },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <Suspense fallback={<h2>Loading inline info...</h2>}>
            <Switch>
              <Route
                path={`${this.props.match.path}/cast`}
                render={(props) => <Cast {...props} />}
              />
              <Route
                path={`${this.props.match.path}/reviews`}
                render={(props) => <Reviews {...props} />}
              />
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieDetailsPage);
