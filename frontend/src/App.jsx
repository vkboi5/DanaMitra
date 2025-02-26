import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Certificates from "./pages/Certificates";
import Newspaper from "./pages/Newspaper";
import DonationPage from "./pages/DonationPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/newspaper" element={<Newspaper />} />
        <Route path="/donation" element={<DonationPage />} />
      </Routes>
    </Router>
  );
}

export default App;