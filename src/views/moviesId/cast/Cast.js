import React, { Suspense, Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const siteName = "https://image.tmdb.org/t/p/w500/";

class Cast extends Component {
  state = {
    cast: [{ profile_path: "", name: "", character: "", id: "" }],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=14cad650e98ee4d1aaf3de321f081384&language=en-US/`
    );
    this.setState({ ...response.data });
    console.log(this.state);
  }

  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ul>
          {this.state.cast.map(({ name, id, profile_path, character }) => (
            <li key={id} className="cast-menu-item">
              <img src={`${siteName}${profile_path}`} alt="" width="100" />
              <p className="cast-menu-name">{name}</p>
              <p className="cast-menu-character">{character}</p>
            </li>
          ))}
        </ul>
      </Suspense>
    );
  }
}

Cast.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  profile_path: PropTypes.string,
  character: PropTypes.string,
};

export default withRouter(Cast);
