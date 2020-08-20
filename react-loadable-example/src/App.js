import React from "react";
import { Router, Link } from "@reach/router";
import Loadable from "react-loadable";
import "./App.css";

const LoadableOnDemand = Loadable({
  loader: () => import("./components/OnDemandComponent"),
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  },
  loading() {
    return <h1>Loading...</h1>;
  },
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <React.Fragment>
          <Link to="getOnDemand">Get On Demand Component</Link>
          <Router>
            <LoadableOnDemand path="getOnDemand" name="Alen" />
          </Router>
        </React.Fragment>
      </header>
    </div>
  );
}

export default App;
