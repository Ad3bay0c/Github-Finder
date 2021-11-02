import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ SearchUser, clearUsers, setAlert, showClear }) => {
  const [search, setSearch] = useState("");

  const onChange = (e) => setSearch(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (search === "" || search.trim() === "") {
      setAlert("Please Enter a valid username", "light");
    } else {
      SearchUser(search);
      setSearch("");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="search"
          placeholder="Search Github Users..."
          value={search}
          onChange={onChange}
        />
        <input type="submit" className="btn btn-dark btn-block" />
      </form>
      {showClear && (
        <input
          type="submit"
          className="btn btn-light btn-block"
          value="Clear"
          onClick={clearUsers}
        />
      )}
    </div>
  );
};

Search.propTypes = {
  SearchUser: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};
export default Search;
