
const express = require("express");

const app = express();

const PORT = 5000;

// Test route
app.get("/", (req, res) => {
  res.send("AI Career Roadmap Backend is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});