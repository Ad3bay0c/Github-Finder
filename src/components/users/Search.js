import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    search: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.search === "" || this.state.search.trim() === "") {
      this.props.setAlert("Please Enter a valid username", "light");
    } else {
      this.props.SearchUser(this.state.search);
      this.setState({ search: "" });
    }
  };
  static propTypes = {
    SearchUser: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };
  render() {
    const { search } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="search"
            placeholder="Search Users..."
            value={search}
            onChange={this.onChange}
          />
          <input type="submit" className="btn btn-dark btn-block" />
        </form>
        {this.props.showClear && (
          <input
            type="submit"
            className="btn btn-light btn-block"
            value="Clear"
            onClick={this.props.clearUsers}
          />
        )}
      </div>
    );
  }
}

export default Search;
