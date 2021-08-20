const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, './public/HTML/index.html'))
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
