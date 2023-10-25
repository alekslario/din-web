const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  // Serve the index.html file when the root URL is accessed.
  console.log(req);
  res.sendFile(__dirname + "/index.html");
});

app.get("/more", (req, res) => {
  // Serve the index.html file when the root URL is accessed.
  console.log(req);
  res.sendFile(__dirname + "/index2.html");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
