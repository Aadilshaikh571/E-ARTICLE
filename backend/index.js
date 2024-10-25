const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const createUser = require("./routes/CreateUser");
const LoginRouter = require("./routes/LoginRouter");
const ArticleRoute=require('./routes/ArticleRoute')
const cors = require("cors");
require('dotenv').config();

const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;


// Create an Express application
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/api", createUser);
app.use("/api",LoginRouter);
app.use("/api",ArticleRoute);


// Connect to MongoDB
const connect_db = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

connect_db();

// Define a simple route
app.get("/", (req, res) => {
  res.send("Welcome to the E-commerce API");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
