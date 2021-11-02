import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment, useState } from "react";
import "./App.css";
import Alert from "./components/layouts/Alert";

import Navbar from "./components/layouts/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import About from "./components/pages/About";
import User from "./components/users/User";

const App = () =>{

  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlertValue] = useState(null)
  
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   try {
  //     const res = await axios.get(
  //       `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );
  //     this.setState({ users: res.data });
  //     this.setState({ loading: false });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  //Search Github User
  const SearchUser = async (search) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false)
  };
  //Clear users from state
  const clearUsers = () => {
    setUsers([]);
     setLoading(false)
    };

  //set Alert
  const setAlert = (msg, type) => {
    setAlertValue({ msg, type });
    setTimeout(() => {
      setAlertValue(null);
    }, 3500);
  };
  //Get a user
  const GetUser = async (username) => {
    setLoading({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUser(res.data);
    setLoading(false)
  };

  const GetUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setRepos(res.data); 
    setLoading(false)
  };

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      SearchUser={SearchUser}
                      clearUsers={clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    GetUser={GetUser}
                    user={user}
                    repos={repos}
                    GetUserRepos={GetUserRepos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );

}

export default App;
