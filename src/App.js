import { Component } from "react";
import "./App.css";

class App extends Component {
  FooBar = () => "We Move";
  render() {
    const name = "Adebayo";

    const foo = () => "FooBar";

    const Loading = "true";
    const showName = true;
    return (
      <div className="App">
        {!Loading ? (
          <h4>Loading..</h4>
        ) : (
          <h2>Hello {showName && name.toUpperCase()}</h2>
        )}
      </div>
    );
  }
}

export default App;
