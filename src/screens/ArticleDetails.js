import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./ArticleDetail.css";

const ArticleDetail = ({ currentUser }) => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/articles/${id}`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch article");
        }

        setArticle(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/articles/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete article");
      }

      navigate("/"); // Redirect to homepage after deletion
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p className="loading">Loading article...</p>;
  if (error) return <p className="error-message">Error: {error}</p>;

  const isAdmin = () => {
    const role = localStorage.getItem("userRole");
    return role === "admin";
  };
  return (
    <div className="article-detail-container">
      {article && (
        <div className="article-detail">
          <img
            src={article.image}
            alt={article.heading}
            className="article-image"
          />
          <div className="article-content">
            <h1 className="article-heading">{article.heading}</h1>
            <p className="article-description">{article.description}</p>
            <p className="article-author">By {article.author}</p>

            {/* Conditional rendering based on ownership */}

            {isAdmin && (
              <div className="admin-controls">
                <Link to={`/edit/${id}`} className="edit-btn">
                  Edit Article
                </Link>
                <button onClick={handleDelete} className="delete-btn">
                  Delete Article
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;
