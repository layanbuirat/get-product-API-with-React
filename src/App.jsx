import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import CategoryPage from "./pages/CategoryPage";
import CategoryProducts from "./pages/CategoryProducts"; // Add this import

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/category/:category" element={<CategoryProducts />} /> {/* Add this route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
