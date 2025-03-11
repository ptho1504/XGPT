const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/submit", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  res
    .status(200)
    .json({ message: "Data received successfully", data: { name, email } });
});

app.listen(3000, () => console.log("Server running on port 3000"));
