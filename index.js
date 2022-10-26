const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const courseCategories = require("./data/courseCategories.json");
const courseDetails = require("./data/courseDetails.json");

app.get("/", (req, res) => {
  res.send("HexBytes API Running");
});

// Making the API for all Course Categories
app.get("/course-categories", (req, res) => {
  res.send(courseCategories);
});

// Making the API for Courses per course categories
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const courseFromCategory = courseDetails.filter(
    (course) => course.category_id === id
  );
  res.send(courseFromCategory);
});

// Making the API for Course Details
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courseDetails.find(
    (courseDetail) => courseDetail.details.course_id === id
  );
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log("HexBytes Server running on port:", port);
});
