import axios from "axios";
import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import MovieList from "../../Components/MovieList/MovieList";
import Cast from "./cast/Cast";
import Reviews from "./reviews/Reviews";

const siteName = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

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

  render() {
    // console.log(this.state.data.genres);
    return (
      <div>
        <MovieList
          movieId={this.state.id}
          movieName={this.state.name}
          moviePoster={this.state.poster_path}
          movieGenres={this.state.genres}
          movieTitle={this.state.title}
          movieVotes={this.state.vote_averag}
        />
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink
              to={{ pathname: `${this.props.match.url}/cast` }}
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Cast
            </NavLink>
            <li>
              <NavLink
                to={{ pathname: `${this.props.match.url}/reviews` }}
                className="NavLink"
                activeClassName="NavLink--active"
              >
                Reviews
              </NavLink>
            </li>
          </li>
        </ul>
        <Route
          path={`${this.props.match.path}/cast`}
          render={(props) => <Cast {...props} />}
        />

        <Route
          path={`${this.props.match.path}/reviews`}
          render={(props) => <Reviews {...props} />}
        />
      </div>
    );
  }
}

export default MovieDetailsPage;
