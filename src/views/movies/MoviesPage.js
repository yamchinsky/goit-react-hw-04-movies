import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, Route, withRouter } from "react-router-dom";
import SearchForm from "../../Components/SearchForm/SearchForm";
import axios from "axios";

class MoviesPage extends Component {
  state = { searchData: [] };
  componentDidMount() {
    const currentQuery = new URLSearchParams(this.props.location.search).get(
      "query"
    );
    if (currentQuery) {
      this.searchMovies();
    }
  }

  componentDidUpdate(prevProps) {
    const currentQuery = new URLSearchParams(this.props.location.search).get(
      "query"
    );
    const query = new URLSearchParams(prevProps.location.search).get("query");
    if (currentQuery !== query) {
      this.searchMovies();
    }
  }

  searchMovies = () => {
    const query = new URLSearchParams(this.props.location.search).get("query");

    const response = axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=14cad650e98ee4d1aaf3de321f081384&language=en-US&page=1&include_adult=false&query=${query}`
      )
      .then((response) => this.setState({ searchData: response.data.results }))
      .catch((error) => console.log(error));
    console.log(this.state);
  };

  formSubmitHandler = (query) => {
    this.props.history.push(`/movies?query=${query}`);
  };
  render() {
    const searchDataObj = this.state.searchData.map((item) => (
      <ul key={item.id}>
        <li>
          <Link to={`/movies/${item.id}`}>{item.title}</Link>
        </li>
      </ul>
    ));

    console.log(this.state.searchData);
    return (
      <div>
        <SearchForm onSubmit={this.formSubmitHandler} />
        <div>{searchDataObj}</div>
      </div>
    );
  }
}

export default withRouter(MoviesPage);
