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
    const castObj = this.state.cast.map(
      ({ name, id, profile_path, character }) => (
        <ul key={id}>
          <li>{profile_path}</li>
          <li>{name}</li>
          <li>{character}</li>
        </ul>
      )
    );

    console.log();

    return <div>{castObj}</div>;
  }
}
export default Cast;
