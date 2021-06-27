import React, { Suspense, Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

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
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ul>
          {this.state.reviews.map(({ content, id }) => (
            <li key={id}>
              <p className="review-info-item">{content}</p>
            </li>
          ))}
        </ul>
      </Suspense>
    );
  }
}

Reviews.PropTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Reviews;
