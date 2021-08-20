const express = require("express");
const app = express();
const router = require("./routes/user");
const path = require("path");
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));


app.use('/', router)
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
