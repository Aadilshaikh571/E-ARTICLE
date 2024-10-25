const mongoose = require("mongoose");


// Define a schema and model for the "E-ARTICLE" collection
const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    Name: {
      type: String,
      required: false
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  }
  );
  
  const User = mongoose.model('User', userSchema);
  module.exports = User;