const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

// Create a new article
router.post("/articles", async (req, res) => {
  const { author, image, heading, description } = req.body;

  try {
    const newArticle = new Article({
      author,
      image,
      heading,
      description,
    });
    
    await newArticle.save();
    res.status(201).json({ message: "Article created successfully", article: newArticle });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating article" });
  }
});

// Fetch all articles
router.get("/articles", async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching articles" });
  }
});
router.get("/articles/:id", async (req, res) => {
  try {
      const id = req.params.id; // Fetch article ID from request parameters
      const article = await Article.findById(id); // Use `findById` to get article by its ID
      if (!article) {
          return res.status(404).json({ error: "Article not found" });
      }
      res.status(200).json(article);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching article" });
  }
});

// Edit (Update) Article by ID
router.put('/articles/:id', async (req, res) => {
  const { id } = req.params;
  const { heading, description, author, image } = req.body;

  try {
      const updatedArticle = await Article.findByIdAndUpdate(
          id,
          { heading, description, author, image }, // Fields to update
          { new: true, runValidators: true } // Return the updated article
      );

      if (!updatedArticle) {
          return res.status(404).json({ error: 'Article not found' });
      }

      res.status(200).json(updatedArticle);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating article' });
  }
});


// Delete Article by ID
router.delete('/articles/:id', async (req, res) => {
  const { id } = req.params;

  try {
      const deletedArticle = await Article.findByIdAndDelete(id);

      if (!deletedArticle) {
          return res.status(404).json({ error: 'Article not found' });
      }

      res.status(200).json({ message: 'Article deleted successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting article' });
  }
});





module.exports = router;
