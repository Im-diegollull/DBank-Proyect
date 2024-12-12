import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProcessAutomation from "./components/ProcessAutomation";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/process" element={<ProcessAutomation />} />
      </Routes>
    </Router>
  );
};

export default App;