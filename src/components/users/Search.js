import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import GithubContext from "../../context/Github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  const {SearchUser, clearUsers, users} = githubContext
  const {setAlert} = alertContext

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
      {users.length > 0 && (
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
  setAlert: PropTypes.func.isRequired,
};
export default Search;
