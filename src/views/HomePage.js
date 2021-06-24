import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {
    trendings: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=14cad650e98ee4d1aaf3de321f081384&language=en-US&page=1"
      )
      .then((response) => this.setState({ trendings: response.data.results }))
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.props.match.url);
    return (
      <div>
        <h1>Trending today</h1>
        <ul>
          {this.state.trendings.map((trending) => (
            <li key={trending.id}>
              <Link to={`/movies/${trending.id}`}>{trending.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
