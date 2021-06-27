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
    console.log(this.props.location);
    const { location } = this.props;

    return (
      <div>
        <h1 className="homepage-header">Trending today</h1>

        <ul className="homepage-header-menu">
          {this.state.trendings.map((trending) => (
            <li key={trending.id} className="homepage-header-menu-item">
              <Link
                to={{
                  pathname: `/movies/${trending.id}`,
                  state: { from: location },
                }}
              >
                {trending.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
