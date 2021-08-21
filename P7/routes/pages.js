const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.get("/home", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/HTML/home.html"));
});


router.get('/getCars', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/assets/data/data.json'))
})

router.get("/about", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/HTML/about.html"));
});


router.get("/contact", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/HTML/contact.html"));
});

module.exports = router;
