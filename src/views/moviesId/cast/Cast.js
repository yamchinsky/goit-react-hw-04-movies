import React, { Component } from "react";

import axios from "axios";

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
    const castName = this.state.cast.map((item) => item.name);
    const castProfile = this.state.cast.map((item) => item.profile_path);

    const castCharacter = this.state.cast.map((item) => item.character);

    const castId = this.state.cast.map((item) => item.id);
    console.log(castName);

    return (
      <div>
        <li key={castId}>
          {castName}
          <p>{castCharacter}</p>
          <img src={`${siteName}${castProfile}`} alt="" />
        </li>
      </div>
    );
  }
}
export default Cast;
