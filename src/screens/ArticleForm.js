import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './ArticleForm.css';

const ArticleForm = () => {
  const [formData, setFormData] = useState({
    author: "",
    image: "",
    heading: "",
    description: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError(""); // Clear error on change
  };

  // Handle image file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          image: reader.result, // Set the image data as the base64 string
        }));
      };
      reader.readAsDataURL(file); // Convert file to base64
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.error || "Error creating article");
      }

      // Clear the form after successful submission
      setFormData({
        author: "",
        image: "",
        heading: "",
        description: "",
      });
      alert("Article created successfully!");

      // Redirect to the home page
      navigate("/"); // Redirecting to the home page
    } catch (err) {
      setError(err.message);
      console.error("Error submitting article:", err);
    }
  };

  return (
    <div className="article-form-container">
      <h2>Create a New Article</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="article-form">
        <div className="form-group">
          <label htmlFor="author">Author Name:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image (Upload or Paste URL):</label>
          <input
            type="text"
            name="image"
            placeholder="Paste image URL here..."
            value={formData.image}
            onChange={handleChange}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        {/* Image Preview Section */}
        {formData.image && (
          <div className="image-preview">
            <h4>Image Preview:</h4>
            <img src={formData.image} alt="Preview" />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="heading">Heading:</label>
          <input
            type="text"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Create Article</button>
      </form>
    </div>
  );
};

export default ArticleForm;
