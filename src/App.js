import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./pages/News/News";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode"))
  );
  return (
    <div className="app">
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
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
