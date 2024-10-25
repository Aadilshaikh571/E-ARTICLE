import React, { useState } from 'react';
import './ArticleCard.css';
import { Link } from 'react-router-dom';

const ArticleCard = ({ id, title, description, author, image }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <div className="article-card">
            <div className="image-wrapper">
                <img src={image} alt={title} className="article-image" />
            </div>
            <div className="article-content">
                <h2 className="article-title">{title}</h2>
                <p className="article-description">{description}</p>
                <div className="article-footer">
                    <p className="article-author">By {author}</p>
                    <button className="read-more-btn">
                        {/* Use the id in the URL */}
                        <Link to={`/articles/${id}`}>Read More</Link>
                    </button>
                    <button 
                        onClick={handleFavoriteClick} 
                        className={`favorite-btn ${isFavorited ? 'favorited' : ''}`}
                        aria-label="Add to Favorite"
                    >
                        <i className={`fas fa-heart ${isFavorited ? 'filled' : ''}`}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
