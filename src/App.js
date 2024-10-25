import React from "react";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./screens/Login";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Signup from "./screens/Signup";
import ArticleForm from "./screens/ArticleForm";
import ArticleDetail from "./screens/ArticleDetails";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";
import EditArticle from "./screens/EditArticle";
import About from "./pages/About";
import Service from "./pages/Services";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/createuser" element={<Signup />} />
          <Route path="/articles" element={<ArticleForm />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/edit/:id" element={<EditArticle />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
