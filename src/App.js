import axios from "axios";
import { Component } from "react";
import "./App.css";
import Alert from "./components/layouts/Alert";

import Navbar from "./components/layouts/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };
  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const res = await axios.get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      this.setState({ users: res.data });
      this.setState({ loading: false });
    } catch (err) {
      console.log(err);
    }
  }

  //Search Github User
  SearchUser = async (search) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({users: res.data.items, loading: false})
    this.setState({ loading: false, alert:null });
  };
  //Clear users from state
  clearUsers = () => this.setState({users: [], loading: false})
  
  //set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: {msg, type}})
    setTimeout(() => {
      this.setState({alert: null})
    }, 3500)
  }
  render() {
    const { loading, users, alert } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Search SearchUser={this.SearchUser} clearUsers={this.clearUsers} showClear = {users.length > 0 ? true : false} setAlert={this.setAlert} />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
