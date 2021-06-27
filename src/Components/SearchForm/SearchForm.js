import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.name.trim());
    if (!this.state.name) {
      alert("Поле не может быть пустым!");
      return;
    }
    this.reset();
  };

  reset = () => {
    this.setState({ name: "" });
  };

  render() {
    return (
      <div>
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <input
            className="SearchForm-input"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search your movie here"
          />
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchForm);
