import React from "react";
import "./helloWorld.css";
import AboutUsStyle from "./components/AboutUs.css";
import imgContainerCss from "./components/imgContainer.css";
import Navbar from "./components/Navbar.js";
import ImgContainer from "./components/ImgContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About.js";

//Babel compiles JSX down to React.createElement() calls.

function App() {
  const changeBackground = (cls) => {
    removeClasses();
    if (cls === "blueTheme") {
      console.log(cls);
      document.body.classList.add("blueTheme");
      console.log("body image set");
    } else if (cls === "summerGarden") {
      document.body.classList.add("summerTheme");
    }
  };
  const removeClasses = () => {
    document.body.classList.remove("blueTheme");
    document.body.classList.remove("summerTheme");
  };
  return (
    <>
      <BrowserRouter>
        <Navbar changeBackground={changeBackground} />
        <Routes>
          <Route exact path="/" element={<ImgContainer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
