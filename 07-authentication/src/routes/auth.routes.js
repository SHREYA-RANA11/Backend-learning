const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post("/register", authController.registerUser);

router.get("/test", (req, res) => {
  console.log("cookie", req.cookies);
 
  res.json({
    message: "Test Route",
    cookies: req.cookies,
  });
});


module.exports = router;
