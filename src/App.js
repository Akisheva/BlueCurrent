import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Header from "./components/Header";
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        {/* Development layout */}
        <Slide1/>
        {/* Test layout */}
        {/* <Slide2/>     */}
      </div>
    </div>
  );
}

export default App;
