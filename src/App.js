import { Component, createElement } from 'react';
import './App.css';

class App extends Component{
  render() {
    return createElement("div", {className: "App"}, createElement("h2", null, "Testing Create Element without JSX"))
  }
}

export default App;
