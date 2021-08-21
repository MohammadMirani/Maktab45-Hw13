const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const pages = require('./routes/pages')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use('/pages', pages)

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
