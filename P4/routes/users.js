const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.get("/getAllUsers", (req, res) => {
  res.sendFile(path.join(__dirname, "../assets/users.json"));
});

router.get("/getUser", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/HTML/index.html"));
});

router.post("/getUser", (req, res) => {
  fs.readFile(
    path.join(__dirname, "../assets/users.json"),
    "utf8",
    (err, data) => {
      if (err) return console.log(err.message);
      data = JSON.parse(data);
      let user = data.find((el) => el.firstName === req.body.user);
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(306).send("Not found User");
      }
    }
  );
});

module.exports = router;
