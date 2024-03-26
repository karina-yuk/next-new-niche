// server.js

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

const users = [];

app.post("/api/signup", (req, res) => {
  const { email, password, confirmPassword } = req.body;

  // Validate email format (you might want to use a library for more thorough validation)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ error: "Email already exists" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  const newUser = { email, password };
  users.push(newUser);

  res.json({ message: "Sign up successful" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
