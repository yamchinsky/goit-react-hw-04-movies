import axios from "axios";
import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Cast from "./cast/Cast";

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
    const genres = this.state.genres.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ));

    console.log(this.props.match.url);
    console.log(this.props.match.path);
    return (
      <div>
        <img src={`${siteName}${this.state.poster_path}`} alt="" width="200" />

        <h1>{this.state.title}</h1>
        <p>{this.state.vote_average}</p>
        <ul>{genres}</ul>
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
          </li>
        </ul>

        <Route
          path={`${this.props.match.path}/cast`}
          render={(props) => <Cast {...props} />}
        />
      </div>
    );
  }
}

export default MovieDetailsPage;
