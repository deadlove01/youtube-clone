import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import RecommendVideo from "./components/recommendVideo/RecommendVideo";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      {/** header */}
      <Header />

      <div class="app__page">
        <Sidebar />
        <RecommendVideo />
      </div>
    </div>
  );
}

export default App;
