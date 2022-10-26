const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const courseCategories = require('./data/courseCategories.json');
const courseDetails = require('./data/courseDetails.json');

app.get("/", (req, res) => {
  res.send("HexBytes API Running");
});

// Making the API for Course Categories
app.get('/course-categories', (req,res)=>{
    res.send(courseCategories);
})



app.listen(port, () => {
  console.log("HexBytes Server running on port:", port);
});
