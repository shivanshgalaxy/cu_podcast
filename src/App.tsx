import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Podcasts from "./pages/Podcasts";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/podcasts" element={<Podcasts />} />
      </Routes>
    </Router>
  );
};

export default App;