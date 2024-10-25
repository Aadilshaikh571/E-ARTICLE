import React, { useEffect, useState } from "react";
import ArticleCard from "../contents/ArticleCard"; 
import './ArticleList.css';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/articles");
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch articles");
        }

        setArticles(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="article-card-container">
      {articles.map((article) => (
        <ArticleCard
          key={article._id} // Pass the article ID as a prop
          id={article._id} // Pass the article ID here
          title={article.heading}
          description={article.description}
          author={article.author}
          image={article.image}
        />
      ))}
    </div>
  );
};

export default ArticleList;
