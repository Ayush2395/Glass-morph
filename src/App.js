import React from "react";
import "./App.css";
import "./responsive.css";
import NavigationMenu from "./components/NavigationMenu";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <div className="shape">
        <div className="circle"></div>
        <div className="clock">
          <div className="bar"></div>
        </div>
      </div>
      <Router>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
