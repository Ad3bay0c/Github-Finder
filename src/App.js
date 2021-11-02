import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment} from "react";
import "./App.css";
import Alert from "./components/layouts/Alert";

import Navbar from "./components/layouts/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import About from "./components/pages/About";
import User from "./components/users/User";
import GithubState from "./context/Github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {

  return (
    <GithubState>
      <AlertState>
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
                    <Search />
                    <Users />
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
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
