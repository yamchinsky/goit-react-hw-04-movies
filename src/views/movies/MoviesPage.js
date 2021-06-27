import React, { lazy, Suspense, Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

const SearchForm = lazy(() => import("../../Components/SearchForm/SearchForm"));
// import SearchForm from "../../Components/SearchForm/SearchForm";

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

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=14cad650e98ee4d1aaf3de321f081384&language=en-US&page=1&include_adult=false&query=${query}`
      )
      .then((response) => this.setState({ searchData: response.data.results }))
      .catch((error) => console.log(error));
  };

  formSubmitHandler = (query) => {
    this.props.history.push(`/movies?query=${query}`);
  };
  render() {
    const { location } = this.props;
    const searchDataObj = this.state.searchData.map((item) => (
      <ul key={item.id}>
        <li className="found-data-item">
          <Link
            to={{ pathname: `/movies/${item.id}`, state: { from: location } }}
          >
            {item.title}
          </Link>
        </li>
      </ul>
    ));

    console.log(this.state.searchData);
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <SearchForm onSubmit={this.formSubmitHandler} />
        <div>{searchDataObj}</div>
      </Suspense>
    );
  }
}

export default withRouter(MoviesPage);
