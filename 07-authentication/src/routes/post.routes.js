const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/create", (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("User ID:", decoded.id);
    console.log("Body:", req.body);

    res.send("Post created successfully");
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
});

module.exports = router;    