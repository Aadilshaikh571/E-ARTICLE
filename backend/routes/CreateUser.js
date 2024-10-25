const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcryptjs=require("bcryptjs")

router.post(
  "/createuser",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  async (req, res) => {

    let salt=await bcryptjs.genSalt(10);
    let secPassword= await bcryptjs.hash(req.body.password,salt)
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
      }

      await User.create({
        email: req.body.email,
        password: secPassword,
        name: req.body.name,
        Image: req.body.Image,
        role: req.body.role,
      });

      res.json({ success: true }); // Return success as a boolean
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error. Please try again later." });
    }
  }
);


module.exports = router;
