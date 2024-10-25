const mongoose = require("mongoose");

// Define the Article schema
const ArticleSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String, // You can use String for the image URL or path
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the Article model
const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
