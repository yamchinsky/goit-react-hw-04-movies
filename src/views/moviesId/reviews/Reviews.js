import React, { Component } from "react";
import axios from "axios";

const siteName = "https://image.tmdb.org/t/p/w500/";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=14cad650e98ee4d1aaf3de321f081384&language=en-US&page=1/`
    );
    this.setState({ reviews: response.data.results });
    console.log(this.state);
  }

  render() {
    const reviewsObj = this.state.reviews.map(({ content, id }) => (
      <li key={id}>
        <p>{content}</p>
      </li>
    ));
    return <div>{reviewsObj}</div>;
  }
}

export default Reviews;
