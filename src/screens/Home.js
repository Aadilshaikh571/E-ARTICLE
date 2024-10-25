import React from "react";
import Carousal from "../Layouts/Carousal";
import ArticleList from "./ArticleList"; // Import the ArticleList component
import { Link } from "react-router-dom";
import "./Home.css";

const isAdmin = () => {
  const role = localStorage.getItem("userRole");
  return role === "admin";
};

const Home = () => {
  return (
    <>
      <div>
        <Carousal />
        {isAdmin && (
          <div className="button-container">
            <h2 className="btn lg">
              <Link to={"/articles"}>Create An Article</Link>
            </h2>
          </div>
        )}
      </div>

      {/* Article List */}
      <ArticleList />
    </>
  );
};

export default Home;
