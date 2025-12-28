const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🔹 Dummy assignments (for beginners)
const assignments = [
  {
    id: 1,
    title: "Select All Users",
    difficulty: "Easy",
    description: "Fetch all rows from users table"
  },
  {
    id: 2,
    title: "Average Salary",
    difficulty: "Medium",
    description: "Find average salary per department"
  }
];

// 🔹 Home route
app.get("/", (req, res) => {
  res.send("CipherSQLStudio Backend Running");
});

// 🔹 Assignment list API
app.get("/assignments", (req, res) => {
  res.json(assignments);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
