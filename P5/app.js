const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const pages = require("./routes/pages");
app.use(express.static(path.join(__dirname, "public")));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/", pages);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
