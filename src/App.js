import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Alert from "./components/layouts/Alert";

import Navbar from "./components/layouts/Navbar";
import About from "./components/pages/About";
import User from "./components/users/User";
import GithubState from "./context/Github/GithubState";
import AlertState from "./context/alert/AlertState";
import Home from "./components/pages/Homee";
import NotFound from "./components/pages/NotFound";

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
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
