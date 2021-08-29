import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./components/About";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState("light");

  return (
    <div className="app">
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />
        <LoadingBar
          height={3}
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Switch>
          <Route path="/about">
            <About setProgress={setProgress} />
          </Route>
          <Route path="/news/:category">
            <News setProgress={setProgress} />
          </Route>
          <Route exact path="/">
            <Home setProgress={setProgress} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
