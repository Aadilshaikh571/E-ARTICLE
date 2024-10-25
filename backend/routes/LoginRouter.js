const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = "royalpriceisthekingofkings";

router.post(
  "/login",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Look for user by email
      const user = await User.findOne({ email: req.body.email });
      
      // Check if user exists
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Compare the password
      const pwdPassword = await bcryptjs.compare(req.body.password, user.password);
      if (!pwdPassword) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Generate auth token
      const data = {
        userId: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, jwtSecret);

      // If login successful, send a success message
      res.json({ success: true, message: "Login successful", authToken: authToken });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }
);

module.exports = router;
