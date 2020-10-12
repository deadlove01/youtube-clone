import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import RecommendVideo from "./components/recommendVideo/RecommendVideo";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendVideo />
            </div>
          </Route>
        </Switch>
      </Router>

      {/* <Header />

      <div className="app__page">
        <Sidebar />
        <RecommendVideo />
      </div> */}
    </div>
  );
}

export default App;
