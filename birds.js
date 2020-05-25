const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("birds homepage");
});

router.get("/about", (req, res) => {
  res.send("birds about page");
});

router.get("/contact", (req, res) => {
  res.send("birds contact page");
});

module.exports = router;
