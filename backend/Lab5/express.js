import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const users = [
  { id: 1, name: "Akarsh", age: 20 },
  { id: 2, name: "Akshat", age: 21 },
];

// 1. GET request
app.get("/msg", (req, res) => {
  res.status(200).json({ message: "Welcome to express server" });
});

app.get("/user", (req, res) => {
  try {
    res.status(200).json({ message: "data received", userData: users });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
