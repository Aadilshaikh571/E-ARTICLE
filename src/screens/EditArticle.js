import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditArticle = () => {
    const { id } = useParams(); // Get the article ID from the URL
    const navigate = useNavigate();
    const [article, setArticle] = useState({ heading: '', description: '', author: '', image: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/articles/${id}`);
                const data = await response.json();
                setArticle(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    const handleInputChange = (e) => {
        setArticle({ ...article, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/articles/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(article),
            });

            if (!response.ok) {
                throw new Error('Failed to update the article');
            }

            navigate(`/articles/${id}`); // Redirect to the article detail page after successful edit
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Edit Article</h1>
            <form onSubmit={handleFormSubmit}>
                <label>Heading</label>
                <input
                    type="text"
                    name="heading"
                    value={article.heading}
                    onChange={handleInputChange}
                />
                <label>Description</label>
                <textarea
                    name="description"
                    value={article.description}
                    onChange={handleInputChange}
                />
                <label>Author</label>
                <input
                    type="text"
                    name="author"
                    value={article.author}
                    onChange={handleInputChange}
                />
                <label>Image URL</label>
                <input
                    type="text"
                    name="image"
                    value={article.image}
                    onChange={handleInputChange}
                />
                <button type="submit">Update Article</button>
            </form>
        </div>
    );
};

export default EditArticle;
